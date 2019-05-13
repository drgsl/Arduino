#include <Adafruit_CircuitPlayground.h>

bool rightButtonPressed;

void setup() {
  // put your setup code here, to run once:
  CircuitPlayground.begin();
  CircuitPlayground.clearPixels();
}

void loop() {
  // put your main code here, to run repeatedly:

  CircuitPlayground.setPixelColor(0, 255, 0, 0);    //Turn LED 0 to red
  CircuitPlayground.setPixelColor(9, 255, 0, 0);    //Turn LED 9 to red
  delay(2000);
  CircuitPlayground.setPixelColor(1, 255, 165, 0);  //Turn LED 1 to orange
  delay(2000);
  CircuitPlayground.setPixelColor(0, 0, 0, 0);      //Turn LED 0 off
  CircuitPlayground.setPixelColor(1, 0, 0, 0);      //Turn LED 1 off

  do {
    CircuitPlayground.setPixelColor(2, 0, 255, 0);    //Turn LED 2 to green
    rightButtonPressed = CircuitPlayground.rightButton();
  } while (!rightButtonPressed);
  delay(2000);
  CircuitPlayground.setPixelColor(2, 0, 0, 0);      //Turn LED 2 off
  CircuitPlayground.setPixelColor(1, 255, 165, 0);  //Turn LED 1 to orange
  delay(2000);
  CircuitPlayground.setPixelColor(1, 0, 0, 0);      //Turn LED 1 off
  CircuitPlayground.setPixelColor(0, 255, 0, 0);    //Turn LED 0 to red

  CircuitPlayground.setPixelColor(9, 0, 0, 0);      //Turn LED 9 off
  CircuitPlayground.setPixelColor(8, 0, 255, 0);    //Turn LED 8 to green
  delay(4000);
  CircuitPlayground.setPixelColor(8, 0, 0, 0);      //Turn LED 8 off
}
