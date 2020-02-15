#include <VirtualWire.h>
#include <OS_4TouchSensor.h>
#include <OS_Buzzer.h>


int RF_TX_PIN = 2;//connect the sent module to D2 to use  
              //you can change it to the idle port you want. 
 
#define TOUCH_OUT1 9//
#define TOUCH_OUT2 6//
#define TOUCH_OUT3 5//
#define TOUCH_OUT4 3//
TouchSensor touch(TOUCH_OUT1,TOUCH_OUT2, TOUCH_OUT3,TOUCH_OUT4);//buy from dx.com/456375
#define BUZZER_PIN 8         
Buzzer buzzer(BUZZER_PIN); 

void setup()
{
  vw_set_tx_pin(RF_TX_PIN); // Setup transmit pin
  vw_setup(2000); // Transmission speed in bits per second.
}
char *msg = "0";

void loop()
{
  
  int button;
  button = touch.get();
  if(button != -1){
  	buzzer.on();
  if(button == TOUCH_OUT1) //如果触摸TCH1区域
  {
    *msg = '1';
  }
  else if(button == TOUCH_OUT2)//如果触摸TCH2区域
  {
    *msg = '2';
  }
  else if(button == TOUCH_OUT3) //如果触摸TCH3区域
  {
    *msg = '3';
  }
  else if(button == TOUCH_OUT4) //如果触摸TCH4区域
  {
    *msg = '4';
  }
//	  msg  = "hello";
	vw_send((uint8_t *)msg, strlen(msg));  //
    delay(100);
	buzzer.off();
	while(button == touch.get());//
  	}
   
 
}

