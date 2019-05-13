#include <FaBoGas_CCS811.h>
#include "SparkFunBME280.h"
#include <Wire.h>
#include <EEPROM.h>
#include <SoftwareSerial.h>
#include <SD.h> //Load SD library

FaBoGas ccs811;
BME280 bme280;
SoftwareSerial BTserial(10, 9); // RX | TX

int counter = 0;

int sensor_val[2];

int red = 8;
int green = 7;

int LEDState = 0;
int delaytime = 200;

int chipSelect = 4; //chip select pin for the MicroSD Card Adapter
File file; // file object that is used to read and write data

void setup() {

  pinMode(red, OUTPUT); // chip select pin must be set to OUTPUT mode
  pinMode(green, OUTPUT); // chip select pin must be set to OUTPUT mode

  Serial.begin(9600);  //Serial.begin(115200);
  BTserial.begin(9600);
  while (!ccs811.begin()) {
    Serial.println("CCS811 did not respond.");
    digitalWrite(red, HIGH);
    delay(1000);
  }
  Serial.println("Reading basic values from CCS811");

  Wire.begin();

  if (bme280.beginI2C() == false) //Begin communication over I2C
  {
    Serial.println("BME280 did not respond");
    digitalWrite(red, HIGH);
    delay(1000);
  }
  Serial.println("Reading basic values from BME280");

  // SD setup
  pinMode(chipSelect, OUTPUT); // chip select pin must be set to OUTPUT mode
  if (!SD.begin(chipSelect)) { // Initialize SD card
    Serial.println("Could not initialize SD card."); // if return value is false, something went wrong.
  }

  if (SD.exists("file.txt")) { // if "file.txt" exists, fill will be deleted
    Serial.println("File exists.");
    //    if (SD.remove("file.txt") == true) {
    //      Serial.println("Successfully removed file.");
    //    } else {
    //      Serial.println("Could not removed file.");
    //    }
  }
  //End of SD setup

}

void loop() {
  if ( ccs811.checkStatus()) {
    ccs811.getAlgResultsData(sensor_val);

    Serial.print("Sample No.");
    Serial.print(counter);
    Serial.print(": ");
    PrintCCS();
    PrintBME();
    Serial.println();
    PrintBluetooth();
    SDWrite();

    counter ++;
  }
  ControlLED();
  delay(10);
}

void SDWrite() {
  file = SD.open("file.txt", FILE_WRITE); // open "file.txt" to write data
  if (file) {
    SDPrintSensors();
    file.close(); // close file
    Serial.println("Wrote on SD card"); // debug output: show written number in serial monitor
    LEDState = 0;
  } else {
    Serial.println("Could not open file (writing).");
    LEDState = 1;
  }

}

void SDPrintSensors() {

  file.print("Sample No.");
  file.print(counter);
  file.print(": ");

  file.print(" CO2: ");
  file.print(sensor_val[0]);
  file.print(" ppm ");

  file.print(" TVOC: ");
  file.print(sensor_val[1]);
  file.print(" ppb ");


  file.print(" Humidity: ");
  file.print(bme280.readFloatHumidity(), 0);
  file.print(" % ");

  file.print(" Pressure: ");
  file.print(bme280.readFloatPressure(), 0);
  file.print(" Pa ");

  file.print(" Altitude: ");
  file.print(bme280.readFloatAltitudeMeters(), 1);
  file.print(" m ");

  file.print(" Temperature: ");
  file.print(bme280.readTempC(), 2);
  file.print(" C ");

  file.println();
}

void PrintCCS() {
  Serial.print(" CO2: ");
  Serial.print(sensor_val[0]);
  Serial.print(" ppm ");

  Serial.print(" TVOC: ");
  Serial.print(sensor_val[1]);
  Serial.print(" ppb ");

}

void PrintBluetooth() {
  BTserial.print(sensor_val[0]); // CO2
  BTserial.print(" ppm");
  BTserial.print(",");

  BTserial.print(sensor_val[1]); // TVOC
  BTserial.print(" ppb");
  BTserial.print(",");

  BTserial.print(bme280.readFloatHumidity(), 0);
  BTserial.print("%");
  BTserial.print(",");

  BTserial.print(bme280.readFloatPressure(), 0);
  BTserial.print(" Pa");
  BTserial.print(",");

  BTserial.print(bme280.readFloatAltitudeMeters(), 1);
  BTserial.print(" m");
  BTserial.print(",");

  BTserial.print(bme280.readTempC(), 2);
  BTserial.print(" C");
  BTserial.print(",");

  BTserial.print(counter);
  BTserial.print(";");
}

void PrintBME() {
  Serial.print(" Humidity: ");
  Serial.print(bme280.readFloatHumidity(), 0);
  Serial.print(" % ");

  Serial.print(" Pressure: ");
  Serial.print(bme280.readFloatPressure(), 0);
  Serial.print(" Pa ");

  Serial.print(" Altitude: ");
  Serial.print(bme280.readFloatAltitudeMeters(), 1);
  Serial.print(" m ");

  Serial.print(" Temperature: ");
  Serial.print(bme280.readTempC(), 2);
  Serial.print("  °C ");
}


void ControlLED() {
  switch (LEDState) {
    case 0:
      digitalWrite(green, HIGH);
      break;

    case 1:
      digitalWrite(green, HIGH);
      digitalWrite(red, HIGH);
      break;

    default:
      ClearLEDS();
      digitalWrite(red, HIGH);
      break;
  }
}

void ClearLEDS() {
  digitalWrite(green, LOW);
  digitalWrite(red, LOW);
}
