//Grove - 315(433) RF link kit Demo v1.0

//connect the receive module to D2 to use ..
#include <VirtualWire.h>

int RF_RX_PIN = 2;
void(* resetFunc) (void) = 0;  
void setup()
{
  Serial.begin(9600);

  Serial.println("setup");
  vw_set_rx_pin(RF_RX_PIN);  // Setup receive pin.
  vw_setup(2000); // Transmission speed in bits per second.
  vw_rx_start(); // Start the PLL receiver.
}

uint8_t buffer[VW_MAX_MESSAGE_LEN]; // buffer array for data recieve over serial port 
uint8_t buflen = VW_MAX_MESSAGE_LEN;

void loop()
{
  String comdata = "";
  
  if(vw_get_message(buffer, &buflen)) // non-blocking I/O
  {
    decode();
  }
}
void decode()
{
  if((buffer[0]!=0x7E)||(buffer[4]!=0xEF))
  {
    Serial.println("bad massage");
	resetFunc();
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
  Serial.print("x = ");
  Serial.print(x ,DEC);
  Serial.print(","); 
  Serial.print("y = ");
  Serial.print(y ,DEC);
  Serial.print(","); 
  Serial.print("z = ");
  Serial.print(z ,DEC);
  Serial.print(","); 
  if(button)
    {
      Serial.print("KEY");
      Serial.println(button);
    }
    else Serial.println("NO KEY");
	clearBufferArray();
}

void clearBufferArray()              // function to clear buffer array
{
  for (int i=0; i<VW_MAX_MESSAGE_LEN;i++)
    { buffer[i]=0;}                  // clear all index of array with command NULL
}


