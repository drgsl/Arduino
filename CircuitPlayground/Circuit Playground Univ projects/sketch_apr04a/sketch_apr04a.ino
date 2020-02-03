#include <Adafruit_CircuitPlayground.h>
void setup() {
  // put your setup code here, to run once

  CircuitPlayground.begin();
  CircuitPlayground.clearPixels();
}

void loop() {
  // put your main code here, to run repeatedly:
for(int i = 0; i<=9; i++){
CircuitPlayground.setPixelColor(i, random(255), random(255), random(255)); 
delay(50); 
}
for(int i = 0; i<=9; i++){
CircuitPlayground.setPixelColor(i, 0, 0, 0);
delay(50);
}

for(int i = 9; i>=0; i--){
CircuitPlayground.setPixelColor(i, random(255), random(255), random(255)); 
delay(50); 
}
for(int i = 9; i>=0; i--){
CircuitPlayground.setPixelColor(i, 0, 0, 0);
delay(50);
}

}
