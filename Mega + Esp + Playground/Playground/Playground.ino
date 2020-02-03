// Include the required Wire library for I2C<br>
#include <Wire.h>
#include <SPI.h>
#include <Keyboard.h>

String inputString = "";

char inChar = 0;

bool stringComplete = false;  // whether the string is complete

String test = "Connecting...";

String lastString;

void setup() {
  Serial.begin(115200);
  // Start the I2C Bus as Slave on address 9
  Wire.begin(9);
  // Attach a function to trigger when something is received.
  Wire.onReceive(receiveEvent);
  Keyboard.begin();

}

void receiveEvent(int bytes) {
  inputString = "";
  while ( Wire.available()) {
    inChar = (char)Wire.read();
    if (inChar == 13 || inChar == 0) {
      stringComplete = true;
      Serial.println(inputString);
      Finished();
    } else {
      inputString += inChar;
      //Serial.println(inputString);
    }
  }
}


void loop() {
}

void Finished() {

  if (stringComplete) {
    Serial.println(inputString);
    if (inputString.equals("A")) {
      SoundUp();
      delay(200);
    }
    if (inputString.equals("b")) {
      SoundDown();
      delay(200);
    }
    if (inputString.charAt(0) == '-')
    {
      int nr = (inputString.charAt(1) - '0') * 10 + (inputString.charAt(2) - '0');
      Serial.println(nr);
      for (int i = 0; i <= nr; i ++) {
        SoundDown();
        delay(1000);
      }
    }
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
