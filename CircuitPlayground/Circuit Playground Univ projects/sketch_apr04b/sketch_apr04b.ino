#include <Adafruit_CircuitPlayground.h>
void setup() {
  // put your setup code here, to run once

  CircuitPlayground.begin();
  CircuitPlayground.clearPixels();
}


void loop() {
  // put your main code here, to run repeatedly:
  for(int i = 0; i <= 3; i ++){
CircuitPlayground.setPixelColor(i, 255, 0, 0);
  }
delay(1000);
  for(int i = 4; i <= 5; i ++){
CircuitPlayground.setPixelColor(i, 255, 165, 0);
  }
  delay(1000);
    for(int i = 0; i <= 5; i ++){
CircuitPlayground.setPixelColor(i, 0, 0, 0);
}
    for(int i = 6; i <= 9; i ++){
CircuitPlayground.setPixelColor(i, 0, 255, 0);
}
delay(2000);
    for(int i = 6; i <= 9; i ++){
CircuitPlayground.setPixelColor(i, 0, 0, 0);
}}
