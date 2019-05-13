#include <Adafruit_CircuitPlayground.h>

void setup() {
  // put your setup code here, to run once:
  CircuitPlayground.begin();
  CircuitPlayground.clearPixels();
}

void loop() {
  // put your main code here, to run repeatedly:
  for(int i = 0; i<=9; i ++){
  CircuitPlayground.setPixelColor(i, 255, 165, 0);
  }
  delay(2000);
    for(int i = 0; i<=9; i ++){
  CircuitPlayground.setPixelColor(i, 0, 0, 0);
    }
  delay(2000);
}
