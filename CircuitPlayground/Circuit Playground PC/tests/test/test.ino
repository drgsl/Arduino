#include <Adafruit_CircuitPlayground.h>
#include <Mouse.h>
#include <Wire.h>
#include <SPI.h>
#include <Keyboard.h>

int incomingByte = 0; // for incoming serial data

void setup() {
  CircuitPlayground.begin();
  Mouse.begin();
  Keyboard.begin();

  Serial.begin(115200);
}

void loop() {

//  if (Serial.available() > 0) {
//    // read the incoming byte:
//    incomingByte = Serial.read();
//
//    // say what you got:
//    Serial.print("I received: ");
//    Serial.println(incomingByte, HEX);
//      CircuitPlayground.setPixelColor(0, 255, 0, 255);
//  }
InBoardButtons();
}

void InBoardButtons() {
  boolean left_first = CircuitPlayground.leftButton();
  boolean right_first = CircuitPlayground.rightButton();

  if (left_first) {
    SoundUp();
    delay(200);
  }
  if (right_first) {
    SoundDown();
    delay(200);
  }
}

void SoundUp() {
  Keyboard.press(KEY_LEFT_GUI);
  Keyboard.press(KEY_PAGE_UP);
  Keyboard.releaseAll();
  delay(100);
}
void SoundDown() {
  Keyboard.press(KEY_LEFT_GUI);
  Keyboard.press(KEY_PAGE_DOWN);
  Keyboard.releaseAll();
  delay(100);
}
void SoundMute() {
  Keyboard.press(KEY_LEFT_GUI);
  Keyboard.press(KEY_INSERT);
  Keyboard.releaseAll();
  delay(100);
}


void WindowsLogIn() {

  Keyboard.press(KEY_UP_ARROW);
  delay(1000);
  Keyboard.releaseAll();
  Keyboard.print("Smarandita1");
  Keyboard.println();
  delay(1000);
  Keyboard.releaseAll();

}
void WindowsSleep() {
  Keyboard.press(KEY_LEFT_GUI);
  Keyboard.press('x');
  delay(500);
  Keyboard.releaseAll();
  Keyboard.press('u');
  delay(500);
  Keyboard.releaseAll();
  Keyboard.press('s');
  delay(500);
  Keyboard.releaseAll();
}
void WindowsShutDown() {
  Keyboard.press(KEY_LEFT_GUI);
  Keyboard.press('x');
  delay(500);
  Keyboard.releaseAll();
  Keyboard.press('u');
  delay(500);
  Keyboard.releaseAll();
  Keyboard.press('u');
  delay(500);
  Keyboard.releaseAll();
}
void WindowsRestart() {
  Keyboard.press(KEY_LEFT_GUI);
  Keyboard.press('x');
  delay(500);
  Keyboard.releaseAll();
  Keyboard.press('u');
  delay(500);
  Keyboard.releaseAll();
  Keyboard.press('h');
  delay(500);
  Keyboard.releaseAll();
}


void OpenArduino() {
  Keyboard.press(KEY_RIGHT_CTRL);
  delay(100);
  Keyboard.press(KEY_RIGHT_ALT);
  delay(100);
  Keyboard.press('q');
  delay(2000);
  Keyboard.releaseAll();
}
void OpenUnity() {
  Keyboard.press(KEY_RIGHT_CTRL);
  delay(100);
  Keyboard.press(KEY_RIGHT_ALT);
  delay(100);
  Keyboard.press('q');
  delay(2000);
  Keyboard.releaseAll();
}
void OpenPhotoshop() {
  Keyboard.press(KEY_RIGHT_CTRL);
  delay(100);
  Keyboard.press(KEY_RIGHT_ALT);
  delay(100);
  Keyboard.press('q');
  delay(2000);
  Keyboard.releaseAll();
}
void OpenYoutube() {
  Keyboard.press(KEY_RIGHT_CTRL);
  delay(100);
  Keyboard.press(KEY_RIGHT_ALT);
  delay(100);
  Keyboard.press('q');
  delay(2000);
  Keyboard.releaseAll();
}
void OpenFbMessenger() {
  Keyboard.press(KEY_RIGHT_CTRL);
  delay(100);
  Keyboard.press(KEY_RIGHT_ALT);
  delay(100);
  Keyboard.press('q');
  delay(2000);
  Keyboard.releaseAll();
}
void OpenIGMessenger() {
  Keyboard.press(KEY_RIGHT_CTRL);
  delay(100);
  Keyboard.press(KEY_RIGHT_ALT);
  delay(100);
  Keyboard.press('q');
  delay(2000);
  Keyboard.releaseAll();
}
void OpenWhatsapp() {
  Keyboard.press(KEY_RIGHT_CTRL);
  delay(100);
  Keyboard.press(KEY_RIGHT_ALT);
  delay(100);
  Keyboard.press('q');
  delay(2000);
  Keyboard.releaseAll();
}
void OpenSteam() {
  Keyboard.press(KEY_RIGHT_CTRL);
  delay(100);
  Keyboard.press(KEY_RIGHT_ALT);
  delay(100);
  Keyboard.press('q');
  delay(2000);
  Keyboard.releaseAll();
}



void weirdMethod() {
  // Grab a second button state reading to check if the buttons were pressed or
  // released.
  boolean left_second = CircuitPlayground.leftButton();
  boolean right_second = CircuitPlayground.rightButton();

  // Check for left button pressed / released.
  //  if (!left_first && left_second) {
  //    // Low then high, button was pressed!
  //
  //  }
  //  else if (left_first && !left_second) {
  //    // High then low, button was released!
  //    Mouse.release(MOUSE_LEFT);
  //  }
  //
  //  // Check for right button pressed / released.
  //  if (!right_first && right_second) {
  //    // Low then high, button was pressed!
  //    Mouse.press(MOUSE_RIGHT);
  //  }
  //
  //  else if (right_first && !right_second) {
  //    // High then low, button was released!
  //    Mouse.release(MOUSE_RIGHT);
  //  }
}
