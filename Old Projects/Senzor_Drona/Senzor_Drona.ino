#include "DHT.h"
#include <EEPROM.h>

#define DHTPIN 7     // what digital pin we're connected to

#define DHTTYPE DHT22   // DHT 22  (AM2302), AM2321
#define LEDR_PIN 4      // RED LED  DIGITAL PIN
#define LEDY_PIN 6      // YELLOW LED  DIGITAL PIN
#define LEDG_PIN 5      // GREEN LED  DIGITAL PIN
#define EEPROM_PIN  9   //EEPROM PIN W/R

// Initialize DHT sensor.
// Note that older versions of this library took an optional third parameter to
// tweak the timings for faster processors.  This parameter is no longer needed
// as the current DHT reading algorithm adjusts itself to work on faster procs.
DHT dht(DHTPIN, DHTTYPE);

//void showEEPROM();        //V&V
void clearEEPROM();
void writeEEPROM();
void listEEPROM();
void readLights();

int addr;
float h, hic, temp;
String file;
void setup() {
  
  pinMode(LEDY_PIN, OUTPUT);
  pinMode(LEDR_PIN, OUTPUT);
  pinMode(LEDG_PIN, OUTPUT);
  pinMode(EEPROM_PIN, INPUT);
  Serial.begin(9600);
  Serial.println("DHT");
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
}

void loop() {
 
  // Reading temperature or humidity takes about 250 milliseconds!
  // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)

  if(!digitalRead(EEPROM_PIN))
  {
  // Wait a few seconds between measurements.
     delay(1500);
  //Read humidity & temperature(Celsius)
     h = dht.readHumidity();
     temp = dht.readTemperature();
  //Calculate heat index
     hic = dht.computeHeatIndex(temp, h, false);
  //Write values in EEPROM
     writeEEPROM(temp);
     writeEEPROM(h);
     writeEEPROM(hic);
     /*Serial.print("Wrote so far ");   //V&V
     Serial.print((addr + 1) / 3);
     Serial.println(" values");  
     
     */if(temp >= 0 and temp <= 10)
    {
        digitalWrite(LEDR_PIN, HIGH); // Red
        delay(2000);
        digitalWrite(LEDR_PIN, LOW);
    
    }

      if(temp > 10 and temp < 20)
    {
       digitalWrite(LEDY_PIN, HIGH); // Yellow
       delay(2000);
       digitalWrite(LEDY_PIN, LOW);
    
    }
  
     if(temp >= 20)
    {
       digitalWrite(LEDG_PIN, HIGH); // Green
       delay(500);
       digitalWrite(LEDG_PIN, LOW);
     }
  
  }
  else
  {
      readLights();
  }
  // Read temperature as Fahrenheit (isFahrenheit = true)
  //float f = dht.readTemperature(true);

  // Check if any reads failed and exit early (to try again).
  //if (isnan(h) || isnan(temp) ) {
   // Serial.println("Failed to read from DHT sensor!");
  //  return;
 // }

  // Compute heat index in Fahrenheit (the default)
  //float hif = dht.computeHeatIndex(f, h);
  // Compute heat index in Celsius (isFahreheit = false)
  
// Serial.print(" Requesting temperatures..."); 
// sensors.requestTemperatures(); // Send the command to get temperature readings 
 //Serial.println("DONE"); 
/********************************************************************/
    
  /*Serial.print("Humidity(DHT): ");
  Serial.print(h);
  Serial.print(" %\t");
  Serial.print("Temperature(DHT): ");
  Serial.print(temp);
  Serial.println(" *C ");
  Serial.print("Heat index(DHT): "); //Feels like
  Serial.println(hic);*/

}
/*
void showEEPROM() {
  int address = 0;
  while(EEPROM.read(address) != 0)
  {
    Serial.print("Read value ");
    Serial.print(EEPROM.read(address));    //V&V
    Serial.print(" from address: 0x");
    Serial.println(address);
    address = address + 1;
  }
}
*/
void listEEPROM(){
  int address = 0;
  int count = 0;
  while(EEPROM.read(address) != 0)
  {
    count++;
    address +=3;
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
    address += 3;
    count++;
    if(address > EEPROM.length()) break;
  }
}

void clearEEPROM() {
  
  for (int addr = 0; addr < EEPROM.length(); addr++)
    EEPROM.write(addr, 0);
}

void writeEEPROM(int value)
{
  EEPROM.write(addr, value);
  Serial.print("Wrote: ");
  Serial.print(EEPROM.read(addr));    //V&V
  Serial.print(" at address: 0x");
  Serial.println(addr, HEX); 
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
