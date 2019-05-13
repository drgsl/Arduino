#include <Adafruit_CircuitPlayground.h>

void setup() {
  // put your setup code here, to run once:
  CircuitPlayground.begin();
  CircuitPlayground.clearPixels();
}

void loop() {
  // put your main code here, to run repeatedly:
  CircuitPlayground.setPixelColor(9, 255, 165, 0);  //Turn LED 9 to orange
  delay(2000);                                      //Wait for 2 seconds
  CircuitPlayground.setPixelColor(9, 0, 0, 0);      //Turn LED 9 off
  delay(2000);                                      //Wait for 2 seconds
}
