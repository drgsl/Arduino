#include <FaBoGas_CCS811.h>
#include "SparkFunBME280.h"
#include <Wire.h>
#include <SoftwareSerial.h>
#include <SD.h> //Load SD library
#include <SPI.h>


FaBoGas ccs811;
BME280 bme280;
SoftwareSerial BTserial(10, 9); // RX | TX

int Counter = 0;

int sensor_val[2];

int red = 8;
int yellow = 7;
int green = 6;
bool FirstTime = true;

int chipSelect = 4; //chip select pin for the MicroSD Card Adapter
//File file; // file object that is used to read and write data
File excel; // file object that is used to read and write data

char filename[] = "LOGGER00.txt";

#define seconds() (millis()/1000 % 60)
#define minutes() (millis()/1000/60 % 60)
#define hours()   (millis()/1000/60/60)

char Time[17];
char counter[10];
char co2[10];
char tvoc[10];
char AirQua[10];

void setup() {

  pinMode(red, OUTPUT);
  pinMode(yellow, OUTPUT);
  pinMode(green, OUTPUT);

  digitalWrite(yellow, HIGH);

  Serial.begin(9600);
  while (!Serial) {
    digitalWrite(red, HIGH);
    delay(1000);
  }
  Serial.println("Serial Started");
  BTserial.begin(9600);
  while (!BTserial) {
    digitalWrite(red, HIGH);
    delay(1000);
  }
  Serial.println("Bluetooth Started");
  while (!ccs811.begin())
  {
    Serial.println("CCS811 did not respond.");
    digitalWrite(red, HIGH);
    delay(1000);
  }
  Serial.println("Reading basic values from CCS811");

  Wire.begin();

  while (!bme280.beginI2C()) //Begin communication over I2C
  {
    Serial.println("BME280 did not respond");
    digitalWrite(red, HIGH);
    delay(1000);
  }
  Serial.println("Reading basic values from BME280");


  // SD setup
  pinMode(chipSelect, OUTPUT); // chip select pin must be set to OUTPUT mode
  while (!SD.begin(chipSelect)) { // Initialize SD card
    Serial.println("Could not initialize SD card."); // if return value is false, something went wrong.
    digitalWrite(red, HIGH);
    delay(1000);
  }
  Serial.println("SD Card Initialized");
}

void loop() {
  if (FirstTime) {
    digitalWrite(green, HIGH);
    digitalWrite(yellow, LOW);
    OpenNewFile();
    FirstTime = false;
  }

  if ( ccs811.checkStatus()) {
    ccs811.getAlgResultsData(sensor_val);
    sprintf(Time, "%02d:%02d:%02d", (int)hours(), (int)minutes(), (int)seconds());
    sprintf(counter, "%05d", (int)Counter);
    sprintf(co2, "%05d", (int)sensor_val[0]);
    sprintf(tvoc, "%04d", (int)sensor_val[1]);
    sprintf(AirQua, "%03d", (int)analogRead(0));

    PrintBluetooth();

    SDPrint(1); // 1 for excel, anything else for readable
    //PrintEverything();

    Counter++;
  }

  delay(10);
}

void OpenNewFile() {
  strncpy(filename, "LOGGER00.txt", 20);
  for (uint8_t i = 0; i < 100; i++) {
    filename[6] = i / 10 + '0';
    filename[7] = i % 10 + '0';
    if (! SD.exists(filename)) {
      // only open a new file if it doesn't exist
      //excel = SD.open(filename, FILE_WRITE);
      Serial.print(filename);
      Serial.println(" found");
      break;  // leave the loop!
    }
  }
}

void PrintBluetooth() {

  BTserial.print(filename);
  BTserial.print(",");

  BTserial.print(counter);
  BTserial.print(",");

  BTserial.print(Time);
  BTserial.print(",");

  BTserial.print(co2); // CO2
  BTserial.print(" ppm");
  BTserial.print(",");

  BTserial.print(tvoc); // TVOC
  BTserial.print(" ppb");
  BTserial.print(",");

  BTserial.print(AirQua); // Air Quality
  BTserial.print(" ppm");
  BTserial.print(",");

  BTserial.print(bme280.readFloatHumidity(), 0);
  BTserial.print("%");
  BTserial.print(",");

  BTserial.print(bme280.readTempC(), 2);
  BTserial.print(" C");
  BTserial.print(",");

  BTserial.print(bme280.readFloatPressure(), 0);
  BTserial.print(" Pa");
  BTserial.print(",");

  BTserial.print(bme280.readFloatAltitudeMeters(), 1);
  BTserial.print(" m");
  BTserial.print(";");
}

void SDPrintSensors() {

  excel.print("File Name: ");
  excel.print(filename);

  excel.print(" Sample No.");
  excel.print(counter);

  excel.print(" Recorded after ");
  excel.print(Time);
  excel.print(": ");

  excel.print(" CO2: ");
  excel.print(co2);
  excel.print(" ppm ");

  excel.print(" TVOC: ");
  excel.print(tvoc);
  excel.print(" ppb ");

  excel.print(" Air Quality: ");
  excel.print(AirQua);
  excel.print(" ppm ");

  excel.print(" Humidity: ");
  excel.print(bme280.readFloatHumidity(), 0);
  excel.print(" % ");

  excel.print(" Temperature: ");
  excel.print(bme280.readTempC(), 2);
  excel.print(" C ");

  excel.print(" Pressure: ");
  excel.print(bme280.readFloatPressure(), 0);
  excel.print(" Pa ");

  excel.print(" Altitude: ");
  excel.print(bme280.readFloatAltitudeMeters(), 1);
  excel.print(" m");

  excel.println();
}

void SDPrint(int a) {
  excel = SD.open(filename, FILE_WRITE); // open "file.txt" to write data
  if (excel) {
    if (a == 1)
    {
      SDPlotSensors();
    }
    else
    {
      SDPrintSensors();
    }
    excel.close(); // close file
    Serial.println("Wrote on SD card");
    ControlLED();
  } else {
    Serial.println("Could not open file (writing).");
    digitalWrite(red, HIGH);
    excel.close(); // close file
  }
}

void SDPlotSensors() {

  excel.print(filename);
  excel.print(",");

  excel.print(counter);
  excel.print(",");

  excel.print(Time);
  excel.print(",");

  excel.print(co2); //CO2
  excel.print(",");

  excel.print(tvoc); //TVOC
  excel.print(",");

  excel.print(AirQua);
  excel.print(",");

  excel.print(bme280.readFloatHumidity(), 0);
  excel.print(",");

  excel.print(bme280.readTempC(), 2);
  excel.print(",");

  excel.print(bme280.readFloatPressure(), 0);
  excel.print(",");

  excel.print(bme280.readFloatAltitudeMeters(), 1);

  excel.println();
}

void ControlLED() {

  for (int i = 9; i >= 6; i --) {
    digitalWrite(i, LOW);
    digitalWrite(i - 1, HIGH);
    delay(100);
  }
}

void PrintEverything() {

  Serial.print("File Name: ");
  Serial.print(filename);

  Serial.print(" Sample No.");
  Serial.print(counter);

  Serial.print(" Recorded after ");
  Serial.print(Time);
  Serial.print(": ");

  Serial.print(" CO2: ");
  Serial.print(co2);
  Serial.print(" ppm ");

  Serial.print(" TVOC: ");
  Serial.print(tvoc);
  Serial.print(" ppb ");

  Serial.print(" Air Quality: ");
  Serial.print(AirQua);
  Serial.print(" ppm ");

  Serial.print(" Humidity: ");
  Serial.print(bme280.readFloatHumidity(), 0);
  Serial.print(" % ");

  Serial.print(" Temperature: ");
  Serial.print(bme280.readTempC(), 2);
  Serial.print(" C ");

  Serial.print(" Pressure: ");
  Serial.print(bme280.readFloatPressure(), 0);
  Serial.print(" Pa ");

  Serial.print(" Altitude: ");
  Serial.print(bme280.readFloatAltitudeMeters(), 1);
  Serial.print(" m");

  Serial.println();
}