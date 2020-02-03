#include <RH_ASK.h>
#include <SPI.h> // Not actually used but needed to compile

RH_ASK driver;

void setup()
{
  Serial.begin(9600);    // Debugging only
  if (!driver.init())
    Serial.println("init failed");
}

void loop()
{
  int x = map(analogRead(A0), 0, 1024, -1024, 1024);
    const char *msg = "Stop";
  if(x > 500){
    msg = "Frwd";
  }
  else if(x < -500){
    msg = "Bkwd";
  }
  
  driver.send((uint8_t *)msg, strlen(msg));
  driver.waitPacketSent();
}
