/**
@file readTVOC.ino
@brief This is a library for the FaBo GAS I2C Brick.

  http://fabo.io/223.html

  Released under APACHE LICENSE, VERSION 2.0

  http://www.apache.org/licenses/

@author FaBo<info@fabo.io>
*/

#include <FaBoGas_CCS811.h>
#include <Wire.h>

FaBoGas faboGas;

//int co2;
//int total_voc;
int sensor_val[2];

void setup() {
  // put your setup code here, to run once:
//  Wire.begin();
  Serial.begin(115200);
  while (!faboGas.begin()){
    Serial.println("Sensor Error");
    delay(1000);
  }
  
  Serial.println("Sensor OK");
}

void loop() {
  // Algorithm Results Data Status check
  if( faboGas.checkStatus()){
    // get Algorithm Results Data(CO2,TVOC)
    faboGas.getAlgResultsData(sensor_val);
//      // CO2 get
//      sensor_val[0] = faboGas.getCO2();
//      // VOC get
//      sensor_val[1] = faboGas.getVOC();
    
    Serial.print(" CO2:");
    Serial.print(sensor_val[0]);
    Serial.print("ppm, TVOC:");
    Serial.print(sensor_val[1]);
    Serial.println("ppb");

  } 
  delay(10);
}
