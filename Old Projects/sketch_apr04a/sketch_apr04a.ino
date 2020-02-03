#include <Adafruit_CircuitPlayground.h>

int delaytime = 200;
bool right, left;

void setup() {
  // put your setup code here, to run once

  CircuitPlayground.begin();
  CircuitPlayground.clearPixels();
}

void loop() {
  // put your main code here, to run repeatedly:

    if (right != CircuitPlayground.rightButton()) {
      delaytime -= 25;
      delay(150);
      right = CircuitPlayground.rightButton();
    }

    if (left != CircuitPlayground.leftButton()) {
      delaytime += 25;
      delay(150);
      left = CircuitPlayground.leftButton();
    }

  for (int i = 0; i <= 9; i++) {
    CircuitPlayground.setPixelColor(i, random(255), random(255), random(255));
    delay(delaytime);
  }
  for (int i = 0; i <= 9; i++) {
    CircuitPlayground.setPixelColor(i, 0, 0, 0);
    delay(delaytime);
  }

  for (int i = 9; i >= 0; i--) {
    CircuitPlayground.setPixelColor(i, random(255), random(255), random(255));
    delay(delaytime);
  }
  for (int i = 9; i >= 0; i--) {
    CircuitPlayground.setPixelColor(i, 0, 0, 0);
    delay(delaytime);
  }

}
