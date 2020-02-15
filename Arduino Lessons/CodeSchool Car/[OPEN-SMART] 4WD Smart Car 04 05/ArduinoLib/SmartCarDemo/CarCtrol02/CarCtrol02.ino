/*------------------------------------
// Function: This is car control demo code for Wireless Joystick Remote 
	to control the smart car. At the same time, use the Ultrasonic Sensor module to detect the distance and
//               display it on the 4-digit Display module.
// IDE: Arduinio-1.6.5
// Author: OPEN-SMART Team
// Buy from: 
https://www.aliexpress.com/store/product/4WD-Wireless-JoyStick-Remote-Control-Rubber-Wheel-Gear-Motor-Smart-Car-Kit-w-Tutorial-for-Arduino/1199788_32864937005.html?spm=2114.12010608.0.0.2ca348ecLz4VeF
https://www.aliexpress.com/store/product/4WD-Wireless-JoyStick-Remote-Control-Rubber-Wheel-Gear-Motor-Smart-Car-Kit-with-Tutorial-for-Arduino/1199788_32866494308.html?spm=2114.12010608.0.0.2ca348ecLz4VeF
-------------------------------------*/
#include <String.h>
#include "MotorDriver.h"
#include <VirtualWire.h>
#include <Ultrasonic.h>
#include "TM1637.h"

int RF_RX_PIN = 2;
void(* resetFunc) (void) = 0; //software reset when the RF receiver can not respond

#define TRIGGER_PIN  7//connect Trip of the Ultrasonic Sensor moudle to D7 of OPEN-SMART UNO R3
                      //and can be changed to other ports
#define ECHO_PIN     8
Ultrasonic ultrasonic(TRIGGER_PIN, ECHO_PIN);

#define CLK A5//connect CLK of the 4-Digit Display to A5 of OPEN-SMART UNO R3 and can be changed to other ports    
#define DIO A4//
TM1637 disp(CLK,DIO);

//Remote control code macro
#define CTRL_INVALID     0
#define CTRL_FORWARD     1
#define CTRL_RIGHT_FRONT 2
#define CTRL_RIGHT_REAR  3
#define CTRL_BACKWARD    4
#define CTRL_LEFT_REAR   5
#define CTRL_LEFT_FRONT  6
#define CTRL_STOP        7
#define CTRL_Z_ROUTE     8
#define CTRL_SPEED_UP    9
#define CTRL_SPEED_DOWN  10

#define XY_TOLERANCE 50
#define X0 510//Initial value of X-asix of the Joystick
#define Y0 510//Initial value of Y-asix of the Joystick

#define SPEED_STEPS 20 
uint8_t speed0 = 100;//Initial value of speed
#define BIN1 3
#define BIN2 5
#define PWMB 6
#define AIN1 9
#define AIN2 10
#define PWMA 11

void setup(){
  motordriver.init(BIN1,BIN2,PWMB,AIN1,AIN2,PWMA);
  motordriver.setSpeed(speed0,MOTORA);
  motordriver.setSpeed(speed0,MOTORB);
  
  disp.set(BRIGHT_TYPICAL);//BRIGHT_TYPICAL = 2,BRIGHT_DARKEST = 0,BRIGHTEST = 7;
  disp.init();
  
  vw_set_rx_pin(RF_RX_PIN);  // Setup receive pin.
  vw_setup(2000); // Transmission speed in bits per second.
  vw_rx_start(); // Start the PLL receiver.
}
uint8_t command;

#define CAR_STOP 0
#define CAR_FORWARD 1
#define CAR_BACK 2
uint8_t car_status = CAR_STOP;
uint8_t new_status = car_status;

uint8_t buffer[VW_MAX_MESSAGE_LEN]; // buffer array for data recieve over serial port 
uint8_t buflen = VW_MAX_MESSAGE_LEN;

void loop(){
  float cmMsec;
  long microsec = ultrasonic.timing();
  cmMsec = ultrasonic.convert(microsec, Ultrasonic::CM);
  disp.display((int16_t)cmMsec);//in centimeters
  if(vw_get_message(buffer, &buflen)) // non-blocking I/O
  {
    command = decode();
	 if(command != CTRL_INVALID){
	controlCar(command);
  }
  }
 
}

void controlCar(uint8_t cmd){
   switch(cmd)
  {
    case CTRL_FORWARD:     new_status = CAR_FORWARD; break;
	case CTRL_RIGHT_FRONT: 
		if(car_status != CAR_STOP)new_status = CAR_FORWARD;
		motordriver.goRight();
		delay(200); 
		break;
	case CTRL_RIGHT_REAR:  
		if(car_status != CAR_STOP)new_status = CAR_BACK; 
		motordriver.goLeft();
		delay(200); 
		break;
	case CTRL_BACKWARD:    new_status = CAR_BACK; break;
	case CTRL_LEFT_REAR:   
		if(car_status != CAR_STOP)new_status = CAR_BACK; 
		motordriver.goRight();
		delay(200);
		break;
	case CTRL_LEFT_FRONT:  
		if(car_status != CAR_STOP)new_status = CAR_FORWARD;
		motordriver.goLeft();
		delay(200);
		break;
	case CTRL_STOP:        new_status = CAR_STOP;break;
	case CTRL_SPEED_UP:    speedUp();break;
	case CTRL_SPEED_DOWN:  speedDown();break;
	default: break;
  }
  switch(new_status)
  {
    case CAR_STOP: motordriver.stop();break;
	case CAR_FORWARD: motordriver.goForward();break;
	case CAR_BACK: motordriver.goBackward();break;
	default: break;
  }
  car_status = new_status;
}

void speedUp(){
  if(speed0 < 236)speed0 += SPEED_STEPS;
  else speed0 = 255;
  motordriver.setSpeed(speed0,MOTORA);
  motordriver.setSpeed(speed0,MOTORB);
}

void speedDown(){
  if(speed0 > 70)speed0 -= SPEED_STEPS;
  else speed0 = 50;
   motordriver.setSpeed(speed0,MOTORA);
  motordriver.setSpeed(speed0,MOTORB);
}

uint8_t decode()
{

   if((buffer[0]!=0x7E)||(buffer[4]!=0xEF))
  {
	resetFunc();//software reset
	return 0;
  }
  int x,y; 
  int xh,xl,yh,yl;
  uint8_t z;
  uint8_t button;
  uint8_t i = 0;
  x = buffer[1]<<2;
  y = buffer[2]<<2;
  z = buffer[3]>>3;
  button = buffer[3]&0x07;
  
  if((x <(X0+XY_TOLERANCE))&&(x >(X0-XY_TOLERANCE))) 
  {
    if(y > (Y0+XY_TOLERANCE))
      command = CTRL_FORWARD;
	else if(y < Y0-XY_TOLERANCE)
	  command = CTRL_BACKWARD;
	else command = CTRL_INVALID;
  }
  else if(x < (X0-XY_TOLERANCE))
  {
    if(y > (Y0+XY_TOLERANCE))
      command = CTRL_LEFT_FRONT;
	else if(y < Y0-XY_TOLERANCE)
	  command = CTRL_LEFT_REAR;
	else command = CTRL_LEFT_FRONT;
  }
  else
  {
    if(y > (Y0+XY_TOLERANCE))
      command = CTRL_RIGHT_FRONT;
	else if(y < Y0-XY_TOLERANCE)
	  command = CTRL_RIGHT_REAR;
	else command = CTRL_RIGHT_FRONT;
  }
  switch(button)
  {
    case 1: command = CTRL_SPEED_UP;break;
    case 2: command = CTRL_STOP;break;
	case 3: command = CTRL_SPEED_DOWN;break;
	default: break;
  }
  clearBufferArray();
  return command;
}


void clearBufferArray()              // function to clear buffer array
{
  for (int i=0; i<VW_MAX_MESSAGE_LEN;i++)
    { buffer[i]=0;}                  // clear all index of array with 0
}

