// Include the required Wire library for I2C<br>

int incomingByte = 0; // for incoming serial data
#include <Wire.h>


String inputString = "";         // a String to hold incoming data
bool stringComplete = false;  // whether the string is complete
char firstChar;
bool GotFirstChar = false;

char inChar;

String lastString;

void setup() {
  // Start the I2C Bus as Master
  Serial.begin(115200);
  Wire.begin();
}
void loop() {
  if (stringComplete) {
    if (inputString != lastString)
    {
      Wire.beginTransmission(9); // transmit to device #9
      Wire.write(inputString.c_str());              // sends x
      Wire.endTransmission();    // stop transmitting
      Serial.println(inputString);
      lastString = inputString;
    }
    inputString = "";
    stringComplete = false;
  }
}

void serialEvent() {
  while (Serial.available()) {
    // get the new byte:
    inChar = (char)Serial.read();
    if (inChar == '\n') {
      //Serial.println("inputString :  " + inputString);
      stringComplete = true;
    }
    else {
      inputString += inChar;
    }
    // if the incoming character is a newline, set a flag so the main loop can
    // do something about it:

  }
}



void CharSerial() {
  if (Serial.available() > 0) {
    // read the incoming byte:
    incomingByte = Serial.read();
    if (incomingByte != 13 && incomingByte != 10) {
      Wire.beginTransmission(9); // transmit to device #9
      Wire.write(incomingByte);              // sends x
      Wire.endTransmission();    // stop transmitting
      //Serial.println(incomingByte);
    }
  }
}
