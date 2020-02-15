/*Suitable for 433MHz Remote Kit and 315MHz Remote Kit by CATALEX Team*/
//Store: http://www.aliexpress.com/store/1199788
//      http://dx.com

#include <VirtualWire.h>
 
int RF_TX_PIN = 12;//connect the sent module to D12 to use  
              //you can change it to the idle port you want. 
 
void setup()
{
  Serial.begin(19200);
  vw_set_tx_pin(RF_TX_PIN); // Setup transmit pin
  vw_setup(2000); // Transmission speed in bits per second.
}
unsigned char buffer[64]; // buffer array for data recieve over serial port
int count=0;     // counter for buffer array 

void loop()
{
  if (Serial.available())              // if date is comming from softwareserial port ==> data is comming from gprs shield
  {
    while(Serial.available())          // reading data into char array 
    {
      buffer[count++]=Serial.read();     // writing data into array
      if(count == 64)break;
  }
     vw_send(buffer, count);  // Send 'hello' every 400ms.
    clearBufferArray();              // call clearBufferArray function to clear the storaged data from the array
    count = 0;
 
  }

//  const char *msg = "hello";
//  vw_send((uint8_t *)msg, strlen(msg));  // Send 'hello' every 400ms.
  delay(400);
 
}
void clearBufferArray()              // function to clear buffer array
{
  for (int i=0; i<count;i++)
    { buffer[i]=NULL;}                  // clear all index of array with command NULL
}
