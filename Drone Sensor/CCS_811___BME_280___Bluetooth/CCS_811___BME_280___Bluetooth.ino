#include <FaBoGas_CCS811.h>
#include "SparkFunBME280.h"
#include <Wire.h>
#include <EEPROM.h>
#include <SoftwareSerial.h>

FaBoGas ccs811;
BME280 bme280;
SoftwareSerial BTserial(10, 11); // RX | TX

int sensor_val[2];

int addr = 0;


void setup() {

  Serial.begin(9600);  //Serial.begin(115200);
  BTserial.begin(9600);
  while (!ccs811.begin()) {
    Serial.println("CCS811 did not respond.");
    delay(1000);
  }
      Serial.println("Reading basic values from CCS811");

  Wire.begin();

  if (bme280.beginI2C() == false) //Begin communication over I2C
  {
    Serial.println("BME280 did not respond");
    while (1); //Freeze
  }
      Serial.println("Reading basic values from BME280");
}

void loop() {
  if ( ccs811.checkStatus()) {
    ccs811.getAlgResultsData(sensor_val);

    PrintCCS();
    PrintBME();
    Serial.println();
    //CCSWrite();
    PrintBluetooth();
    //CCSList();

  }


  delay(10);
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
  BTserial.print(";");
}

void CCSWrite() {
  EEPROM.write(addr, sensor_val[0]);
  addr = addr + 1;
  if (addr == EEPROM.length()) {
    addr = 0;
  }
}

void CCSList() {
  while (EEPROM.read(addr) != 0)
  {
    Serial.print(". CO2: ");
    Serial.println(EEPROM.read(0));
    addr ++;
    if (addr > EEPROM.length()) break;
  }
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
