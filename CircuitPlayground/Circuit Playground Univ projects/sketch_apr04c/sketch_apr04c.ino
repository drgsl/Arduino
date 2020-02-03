#include <Adafruit_CircuitPlayground.h>

bool rightButtonPressed;

void setup() {
  // put your setup code here, to run once

  CircuitPlayground.begin();
  CircuitPlayground.clearPixels();
}

void loop() {
  // put your main code here, to run repeatedly:
CircuitPlayground.setPixelColor(0, 255, 0, 0);
CircuitPlayground.setPixelColor(9, 255, 0, 0);
  delay(1000);
CircuitPlayground.setPixelColor(1, 255, 165, 0);
delay(1000);
CircuitPlayground.setPixelColor(0, 0, 0, 0);
CircuitPlayground.setPixelColor(1, 0, 0, 0);
do{
CircuitPlayground.setPixelColor(2, 0, 255, 0);
rightButtonPressed = CircuitPlayground.rightButton();
} while(!rightButtonPressed);
delay(2000);
CircuitPlayground.setPixelColor(2, 0, 0, 0);
CircuitPlayground.setPixelColor(1, 255, 165, 0);
delay(2000);
CircuitPlayground.setPixelColor(1, 0, 0, 0);
CircuitPlayground.setPixelColor(0, 255, 0, 0);

CircuitPlayground.setPixelColor(9, 0, 0, 0);
CircuitPlayground.setPixelColor(8, 0, 255, 0);
delay(2000);
CircuitPlayground.setPixelColor(8, 0, 0, 0);
}
