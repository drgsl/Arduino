
#include <Adafruit_CircuitPlayground.h>

void setup() {
  CircuitPlayground.begin();
  Serial.begin(115200);
}

void loop() {
  Serial.println(CircuitPlayground.mic.soundPressureLevel(50));

  for(int i = 0; i <=9; i ++){
        CircuitPlayground.setPixelColor(i, 255, 0, 165);
        CircuitPlayground.setBrightness(CircuitPlayground.mic.soundPressureLevel(50));        
  }
}
