/**
 @file FaBoGAS_CSS811.cpp
 @brief This is a library for the FaBo GAS I2C Brick.

//   http://fabo.io/223.html

   Released under APACHE LICENSE, VERSION 2.0

   http://www.apache.org/licenses/

 @author FaBo<info@fabo.io>
*/

#include "FaBoGas_CCS811.h"
#include <Wire.h>

/**
 @brief Constructor
*/
FaBoGas::FaBoGas(uint8_t addr) {
  _i2caddr = addr;
  Wire.begin();
}

/**
 @brief Begin Device
*/
bool FaBoGas::begin() {
  if (searchDevice()) {
    if (configuration()){
      return true;
    }
  }
  return false;
}

/**
 @brief Search Device
 @retval true device connected
 @retval false device error
*/
bool FaBoGas::searchDevice() {
  uint8_t whoami;
  readI2c(CCS811_HW_ID_REG, 1, &whoami);
  if(whoami == CCS811_HW_ID){
    return true;
  } else{
    return false;
  }
}

/**
 * @brief Set Config
 */
bool FaBoGas::configuration()
{
  // Soft Reset
  uint8_t reset_cmd[] = {0x11, 0xE5, 0x72, 0x8A};
  writeBytesI2c(CCS811_SW_RESET_REG, 4, reset_cmd);

  delay(1);
  //check status
  uint8_t status;
  readI2c(CCS811_STATUS_REG, 1, &status);
  // Error check
  if (status & CCS811_STATUS_ERR){
    // sensor error
    return false;
  }
  readI2c(CCS811_STATUS_REG, 1, &status);
  // App valid check
  if (!(status & CCS811_STATUS_APP_VALID_LOAD)){
    // error
    return false;
  }

  // APP Start(write address only)
  writeBytesI2c(CCS811_APP_START_REG, 0, 0);
  // set DriveMode (Mode 1  circle 1sec)
  setDriveMode(CCS811_MEAS_DRIVE_MODE_1);

  return true;
}

/**
 @brief Set DriveMode
 @param [in] mode
*/
void FaBoGas::setDriveMode(uint8_t mode){
  uint8_t status;
  readI2c(CCS811_MEAS_MODE_REG, 1, &status);
  // mode set
  status = ((status&CSS811_MEAS_DRIVE_MODE_MASK) | mode);

  writeI2c(CCS811_MEAS_MODE_REG, status );
}

/**
 @brief Algorithm Results Data(CO2, VOC) Data Ready check
 @param resultData[1] VOC
 @retval 0: No new data samples are ready
 @retval 1: new data sample is ready
*/
bool FaBoGas::checkStatus(){

  uint8_t status;
  readI2c(CCS811_STATUS_REG, 1, &status);
  if (status & CCS811_STATUS_DATA_READY){
    return true;
  }
  return false;
}

/**
 @brief get CO2 & Total_VOC value
 @param resultData[0] CO2
 @param resultData[1] VOC
 @return Status
*/
uint8_t FaBoGas::getAlgResultsData(int *resultData){
  uint8_t readData[5];

  readI2c(CCS811_ALG_RESULT_DATA_REG, 5, readData);
  // set CO2 value
  resultData[0] = (readData[0]<< 8) | readData[1];
  // set total VOC
  resultData[1] = (readData[2]<< 8) | readData[3];

  // status
  return readData[4];
}

/**
 @brief get Baseline
 @return Baseline Value
*/
uint16_t FaBoGas::getBaseline()
{
	uint8_t readData[2];
	readI2c(CCS811_BASELINE_REG, (uint8_t)2, readData);

	return (readData[0] << 8) | readData[1];
}

/**
 @brief set Baseline
*/
void FaBoGas::setBaseline(uint16_t baseline)
{
	uint8_t setData[2];
	setData[0] = (baseline >> 8) & 0xFF;
	setData[1] = baseline & 0xFF;

	writeBytesI2c(CCS811_BASELINE_REG, 2, setData);
}

/**
 @brief get CO2 Value
 @return CO2
*/
uint16_t FaBoGas::getCO2( )
{
  uint8_t readData[2];

  readI2c(CCS811_ALG_RESULT_DATA_REG, 2, readData);
  // return CO2
  return (readData[0]<< 8) | readData[1];
}

/**
 @brief get Total VOC Value
 @return Total VOC
*/
uint16_t FaBoGas::getTVOC()
{
  uint8_t readData[4];

  readI2c(CCS811_ALG_RESULT_DATA_REG, 4, readData);
  // return Total VOC
  return (readData[2]<< 8) | readData[3];

}

/**
 @brief Write I2C
 @param [in] address register address
 @param [in] data write data
*/
void FaBoGas::writeI2c(uint8_t address, uint8_t data) {
  Wire.beginTransmission(_i2caddr);
  Wire.write(address);
  Wire.write(data);
  Wire.endTransmission();
}


/**
 @brief Write I2C Bytes
 @param [in] address register address
 @param [in] num number of bytes
 @param [in] *bytes write data
*/
void FaBoGas::writeBytesI2c(uint8_t address, uint8_t num, uint8_t *data) {
  Wire.beginTransmission(_i2caddr);
  Wire.write(address);
  for(int i=0; i<num; i++){
    Wire.write(data[i]);
  }

  Wire.endTransmission();
}

/**
 @brief Read I2C
 @param [in] address register address
 @param [in] num read length
 @param [out] data read data
*/
void FaBoGas::readI2c(uint8_t address, uint8_t num, uint8_t * data) {
  Wire.beginTransmission(_i2caddr);
  Wire.write(address);
  Wire.endTransmission();
  uint8_t i = 0;
  Wire.requestFrom(_i2caddr, num);
  while( Wire.available() ) {
    data[i++] = Wire.read();
  }
}
