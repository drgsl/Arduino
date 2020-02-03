#include <VirtualWire.h>
#include <OS_JoystickCtrl.h>

JoystickCtrl remote;
int RF_TX_PIN = 6;//connect the sent module to D2 to use  
              //you can change it to the idle port you want. 
 
void setup()
{
  remote.init();
  vw_set_tx_pin(RF_TX_PIN); // Setup transmit pin
  vw_setup(2000); // Transmission speed in bits per second.
}

uint8_t buffer[5]= {0X7E,0,0,0,0XEF}; // buffer array for data recieve over serial port 

void loop()
{
  
   
    
 int x,y; 
 uint8_t xh,xl,yh,yl;
  uint8_t z;
  if(remote.isChange())
  {
    x=remote.nowX;
	x = x>>2;
    y=remote.nowY;
    y = y>>2;
    z=remote.nowZ;
	z <<= 3;
    uint8_t button = remote.nowkey;
    buffer[1] = x;
    buffer[2] = y;
	buffer[3] = z|button;

  vw_send(buffer, 5);  // 
    delay(100);//between two message, you should delay 400ms so that the receiver may not miss it.
  }

 
}



