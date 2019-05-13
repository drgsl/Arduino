#include <FaBoGas_CCS811.h>
#include "SparkFunBME280.h"
#include <Wire.h>
#include <SoftwareSerial.h>
#include <SD.h> //Load SD library
#include <SPI.h>


FaBoGas ccs811;
BME280 bme280;
SoftwareSerial BTserial(10, 9); // RX | TX

int counter = 0;

int sensor_val[2];

int red = 8;
int yellow = 7;
int green = 6;

int delaytime = 200;
bool FirstTime = true;

int chipSelect = 4; //chip select pin for the MicroSD Card Adapter
File file; // file object that is used to read and write data
File excel; // file object that is used to read and write data

int humidity;
int pressure;
int altitude;
int temperature;

void setup() {

  pinMode(red, OUTPUT);
  pinMode(yellow, OUTPUT);
  pinMode(green, OUTPUT);

  Serial.begin(9600);
  while (!Serial) { }
  Serial.println("Serial Started");
  BTserial.begin(9600);
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
  //
  //  if (SD.exists("ReadableData.txt")) { // if "file.txt" exists, fill will be deleted
  //    Serial.println("ReadableData File exists.");
  //    //            if (SD.remove("file.txt") == true) {
  //    //              Serial.println("Successfully removed file.");
  //    //            } else {
  //    //              Serial.println("Could not removed file.");
  //    //            }
  //  }
  //
  //  if (SD.exists("ExcelData.txt")) { // if "file.txt" exists, fill will be deleted
  //    Serial.println("ExcelData File exists.");
  //    //            if (SD.remove("file.txt") == true) {
  //    //              Serial.println("Successfully removed file.");
  //    //            } else {
  //    //              Serial.println("Could not removed file.");
  //    //            }
  //  }
  //End of SD setup
}

void loop() {
  if (FirstTime) {
    //SDRead();
    FirstTime = false;
  }

  if ( ccs811.checkStatus()) {
    ccs811.getAlgResultsData(sensor_val);

    humidity = (int((bme280.readFloatHumidity(), 0)));
    pressure = (int((bme280.readFloatPressure(), 0)));
    altitude = (int((bme280.readFloatAltitudeMeters(), 1)));
    temperature = (int((bme280.readTempC(), 2)));
    
    //PrintEverything();
    PrintBluetooth();

    SDWrite();
    //SDPlot();
  }

  delay(10);
}

void SDRead() {
  file = SD.open("file.txt", FILE_READ); // open "file.txt" to read data
  if (file) {
    Serial.println("--- Reading start ---");
    char character;
    while ((character = file.read()) != -1) { // this while loop reads data stored in "file.txt" and prints it to serial monitor
      Serial.print(character);
    }
    file.close();
    Serial.println("--- Reading end ---");
  } else {
    Serial.println("Could not open file (reading).");
  }
}

void PrintBluetooth() {

  BTserial.print(counter);
  BTserial.print(",");

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

  BTserial.print(analogRead(2));
  BTserial.print(" ppm");
  BTserial.print(";");
}


void SDWrite() {

  file = SD.open("file.txt", FILE_WRITE); // open "file.txt" to write data
  if (file) {

    file.write("Sample No. ");
    file.write(counter);
    file.write(": ");

    file.write(" CO2: ");
    file.write(sensor_val[0]);
    file.write(" ppm ");

    file.write(" TVOC: ");
    file.write(sensor_val[1]);
    file.write(" ppb ");

    file.write(" Humidity: ");
    file.write(humidity);
    file.write(" % ");

    file.write(" Pressure: ");
    file.write(pressure);
    file.write(" Pa ");

    file.write(" Altitude: ");
    file.write(altitude);
    file.write(" m ");

    file.write(" Temperature: ");
    file.write(temperature);
    file.write(" C ");

    file.write(" Air Quality: ");
    file.write(analogRead(0));
    file.write(" ppm ");

    file.write('/n');

    file.close(); // close file
    Serial.println("Wrote on SD card"); // debug output: show written number in serial monitor
  } else {
    Serial.println("Could not open file (writing).");
    file.close(); // close file
  }
}


void SDPlot() {
  excel = SD.open("excel.txt", FILE_WRITE); // open "file.txt" to write data
  if (excel) {
    SDPlotSensors();
    excel.close(); // close file
    Serial.println("Wrote on SD card"); // debug output: show written number in serial monitor
  } else {
    Serial.println("Could not open file (writing).");
    excel.close(); // close file
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

  file.print(" Air Quality: ");
  file.print(analogRead(0));
  file.print(" ppm ");

  file.println();
}


void SDPlotSensors() {

  excel.print(counter);

  excel.print(sensor_val[0]); //CO2
  excel.print(" ppm ");

  excel.print(sensor_val[1]); //TVOC
  excel.print(" ppb ");

  excel.print(bme280.readFloatHumidity(), 0);
  excel.print(" % ");

  excel.print(bme280.readFloatPressure(), 0);
  excel.print(" Pa ");

  excel.print(bme280.readFloatAltitudeMeters(), 1);
  excel.print(" m ");

  excel.print(bme280.readTempC(), 2);
  excel.print(" C ");

  excel.print(analogRead(0));
  excel.print(" ppm ");

  excel.println();
}

void ControlLED() {

  for (int i = 6; i <= 8; i ++) {
    digitalWrite(i, LOW);
    digitalWrite(i + 1, HIGH);
  }

  //  switch (LEDState) {
  //    case 0:
  //      digitalWrite(green, HIGH);
  //      break;
  //
  //    case 1:
  //      digitalWrite(green, HIGH);
  //      digitalWrite(red, HIGH);
  //      break;
  //
  //    default:
  //      ClearLEDS();
  //      digitalWrite(red, HIGH);
  //      break;
  //  }
}

void ClearLEDS() {
  digitalWrite(green, LOW);
  digitalWrite(yellow, LOW);
  digitalWrite(red, LOW);
}

void PrintEverything() {

  Serial.print("Sample No.");
  Serial.print(counter);
  Serial.print(": ");

  Serial.print(" CO2: ");
  Serial.print(sensor_val[0]);
  Serial.print(" ppm ");

  Serial.print(" TVOC: ");
  Serial.print(sensor_val[1]);
  Serial.print(" ppb ");

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
  Serial.print(" C ");

  Serial.print("Air Quality: ");
  Serial.print(analogRead(0));
  Serial.print(" ppm ");

  Serial.println();

  counter++;

  ControlLED();
}
