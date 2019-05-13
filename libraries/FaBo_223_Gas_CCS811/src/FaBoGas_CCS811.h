/**
 @file FaBoGAS_CSS811.h
 @brief This is a library for the FaBo GAS I2C Brick.

//   http://fabo.io/223.html

   Released under APACHE LICENSE, VERSION 2.0

   http://www.apache.org/licenses/

 @author FaBo<info@fabo.io>
*/

#ifndef FABOGAS_CCS811_H
#define FABOGAS_CCS811_H

#include <Arduino.h>

#define CCS811_SLAVE_ADDRESS_DEFAULT 0x5B

#define	CCS811_STATUS_REG			      0x00
#define	CCS811_MEAS_MODE_REG        0x01
#define	CCS811_ALG_RESULT_DATA_REG  0x02
#define	CCS811_RAW_DATA_REG         0x03
#define	CCS811_ENV_DATA_REG     		0x05
#define	CCS811_NTC_REG        			0x06
#define	CCS811_THRESHOLDS_REG 			0x10
#define	CCS811_BASELINE_REG		     	0x11
#define	CCS811_HW_ID_REG            0x20
#define	CCS811_HW_VERSION_REG			  0x21
#define	CCS811_FW_BOOT_VERSION_REG	0x23
#define	CCS811_FW_APP_VERSION_REG		0x24
#define	CCS811_ERROR_ID_REG			    0xE0
#define CCS811_APP_ERASE_REG        0xF1
#define CCS811_APP_DATA_REG         0xF2
#define CCS811_APP_VALIFY_REG       0xF3
#define CCS811_APP_START_REG        0xF4
#define	CCS811_SW_RESET_REG			    0xFF

// device check
#define CCS811_HW_ID     0x81

//Status
#define CCS811_STATUS_MODE_BOOT       0b00000000
#define CCS811_STATUS_MODE_APP        0b10000000
#define CCS811_STATUS_APP_NO_LOAD     0b00000000
#define CCS811_STATUS_APP_VALID_LOAD  0b00010000
#define CCS811_STATUS_DATA_NO_READY   0b00000000
#define CCS811_STATUS_DATA_READY      0b00001000
#define CCS811_STATUS_NO_ERR          0b00000000
#define CCS811_STATUS_ERR             0b00000001

#define CCS811_MEAS_DRIVE_MODE_0    0b00000000   // Idle mode  (Measurements are disabled in this mode)
#define CCS811_MEAS_DRIVE_MODE_1    0b00010000   // Constant power mode  IAQ measurement every second
#define CCS811_MEAS_DRIVE_MODE_2    0b00100000   // Pulse heating mode  IAQ measurement every 10 seconds
#define CCS811_MEAS_DRIVE_MODE_3    0b00110000   // Low power pulse heating mode IAQ measurement every 60 seconds
#define CCS811_MEAS_DRIVE_MODE_4    0b01000000   // Constant power mode, sensor measurement every 250ms

#define CSS811_MEAS_DRIVE_MODE_MASK 0b10001111

/**
 * @class FaBoGas
 * @brief FaBo Gas I2C Controll class
 */
class FaBoGas {
  public:
    FaBoGas(uint8_t addr = CCS811_SLAVE_ADDRESS_DEFAULT);
    bool begin(void);
    bool searchDevice(void);
    bool configuration(void);
    void setDriveMode(uint8_t mode);
    bool checkStatus(void);
    uint8_t getAlgResultsData(int *resultData);
    uint16_t getBaseline(void);
    void setBaseline(uint16_t baseline);
    uint16_t getCO2(void);
    uint16_t getTVOC(void);
  private:
    uint8_t _i2caddr;
    int co2_value;
    int totalVOC_value;
    void writeI2c(uint8_t address, uint8_t data);
    void readI2c(uint8_t address, uint8_t num, uint8_t * data);
    void writeBytesI2c(uint8_t address, uint8_t num, uint8_t *data);
};


#endif
