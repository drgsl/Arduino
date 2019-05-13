#include <Wire.h>
#include "DHT.h"
#include <EEPROM.h>
#include "Adafruit_SGP30.h"


#define DHTPIN 7     // what digital pin we're connected to



#define DHTTYPE DHT22   // DHT 22  (AM2302), AM2321
#define LEDR_PIN 4      // RED LED  DIGITAL PIN
#define LEDY_PIN 6      // YELLOW LED  DIGITAL PIN
#define LEDG_PIN 5      // GREEN LED  DIGITAL PIN
#define EEPROM_PIN  9   //EEPROM PIN W/R

Adafruit_SGP30 sgp;
DHT dht(DHTPIN, DHTTYPE);

void clearEEPROM();
void writeEEPROM(uint8_t value);
void listEEPROM();
void readLights();

/* return absolute humidity [mg/m^3] with approximation formula
* @param temperature [°C]
* @param humidity [%RH]
*/
String file;
int addr;
float hic;
uint32_t getAbsoluteHumidity(float temperature, float humidity) {
    // approximation formula from Sensirion SGP30 Driver Integration chapter 3.15
    const float absoluteHumidity = 216.7f * ((humidity / 100.0f) * 6.112f * exp((17.62f * temperature) / (243.12f + temperature)) / (273.15f + temperature)); // [g/m^3]
    const uint32_t absoluteHumidityScaled = static_cast<uint32_t>(1000.0f * absoluteHumidity); // [mg/m^3]
    return absoluteHumidityScaled;
}


void setup() {
  
  pinMode(LEDY_PIN, OUTPUT);
  pinMode(LEDR_PIN, OUTPUT);
  pinMode(LEDG_PIN, OUTPUT);
  pinMode(EEPROM_PIN, INPUT);
  Serial.begin(9600);
    Serial.println("DHT + SGP30");
  if(digitalRead(EEPROM_PIN)) //IF PIN HIGH
  {
    Serial.println("EEPROM Read MODE");
    readLights();
    readLights();
    readLights();
    listEEPROM();
  }
  else
  {
    Serial.println("EEPROM Write MODE");
    clearEEPROM();
    
  }

  dht.begin();

  if (! sgp.begin()){
    Serial.println("Sensor not found :(");
    while (1);
  }
  Serial.print("Found SGP30 serial #");
  Serial.print(sgp.serialnumber[0], HEX);
  Serial.print(sgp.serialnumber[1], HEX);
  Serial.println(sgp.serialnumber[2], HEX);

  // If you have a baseline measurement from before you can assign it to start, to 'self-calibrate'
  //sgp.setIAQBaseline(0x8E68, 0x8F41);  // Will vary for each sensor!
}

int counter = 0;
byte count_samples = 0;
uint8_t tempeco2 = 0;
uint8_t temptvoc = 0;
void loop() {
    if(!digitalRead(EEPROM_PIN))
  {
  // If you have a temperature / humidity sensor, you can set the absolute humidity to enable the humditiy compensation for the air quality signals
  float temperature = 22.1; // [°C]
  float humidity = 45.2; // [%RH]
  humidity = dht.readHumidity();
  temperature = dht.readTemperature();
  hic = dht.computeHeatIndex(temperature, humidity, false);
    //Write values in EEPROM
     writeEEPROM(temperature);
     writeEEPROM(humidity);
     writeEEPROM(hic);
  sgp.setHumidity(getAbsoluteHumidity(temperature, humidity));
  if (! sgp.IAQmeasure()) {
    Serial.println("Measurement failed");
   // return;
  }
  writeEEPROM(sgp.TVOC);
  writeEEPROM(sgp.TVOC>>8);
  writeEEPROM(sgp.eCO2);
  writeEEPROM(sgp.eCO2>>8);
  count_samples++;
  Serial.print("Added ");
  Serial.print(count_samples);
  if(count_samples == 1) Serial.println(" sample to memory");
  else Serial.println(" samples to memory");
  
  #ifdef DEBUG
  Serial.print("TVOC "); Serial.print(sgp.TVOC); Serial.print(" ppb\t");
  Serial.print("eCO2 "); Serial.print(sgp.eCO2); Serial.println(" ppm");
  #endif

delay(500);
  counter++;
  if (counter == 30) {
    counter = 0;

    uint16_t TVOC_base, eCO2_base;
    if (! sgp.getIAQBaseline(&eCO2_base, &TVOC_base)) {
      Serial.println("Failed to get baseline readings");
      return;
    }
    #ifdef DEBUG
    Serial.print("****Baseline values: eCO2: 0x"); Serial.print(eCO2_base, HEX);
    Serial.print(" & TVOC: 0x"); Serial.println(TVOC_base, HEX);
    #endif
  }
  else readLights();
}
}
void listEEPROM(){
  int address = 0;
  int count = 0;
  uint16_t temp = 0;
  while(EEPROM.read(address) != 0)
  {
    count++;
    address +=7;
  }
  Serial.print("There are ");
  Serial.print(count, DEC);
  Serial.println(" entries.");
  address = 0;
  count = 1;
  while(EEPROM.read(address) != 0)
  {
    Serial.print(count, DEC);
    Serial.print(". Temperature: ");
    Serial.print(EEPROM.read(address));
    Serial.print(" C Humidity: ");
    Serial.print(EEPROM.read(address+1));
    Serial.print(" %RH");
    Serial.print(" Heat Index: ");
    Serial.print(EEPROM.read(address+2));
    Serial.println(" C");
    Serial.print("TVOC: ");
    temp = EEPROM.read(address+3)+ EEPROM.read(address+4)*256;
    Serial.print(temp);
    Serial.print(" ppb \t");
    temp = EEPROM.read(address+5)+ EEPROM.read(address+6)*256;
    Serial.print(temp);
    Serial.println(" ppm");
    Serial.println(" ppm");
    address += 7;
    count++;
    if(address > EEPROM.length()) break;
  }
}

void clearEEPROM() {
  
  for (int addr = 0; addr < EEPROM.length(); addr++)
    EEPROM.write(addr, 0);
}

void writeEEPROM(uint8_t value)
{
  EEPROM.write(addr, value);
  #ifdef DEBUG
  Serial.print("Wrote: ");
  Serial.print(EEPROM.read(addr));    //V&V
  Serial.print(" at address: 0x");
  Serial.println(addr, HEX); 
  #endif
  addr = addr + 1;
}

void readLights(void )         //Blink when done reading data
{
  
      digitalWrite(LEDG_PIN, HIGH);
      delay(150);
      digitalWrite(LEDG_PIN, LOW);
      digitalWrite(LEDY_PIN, HIGH);
      delay(150);
      digitalWrite(LEDY_PIN, LOW);
      digitalWrite(LEDR_PIN, HIGH);
      delay(150);
      digitalWrite(LEDR_PIN, LOW);
}
