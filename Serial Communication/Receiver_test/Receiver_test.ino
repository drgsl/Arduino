
#include <Adafruit_CircuitPlayground.h>

char mystr[10]; //Initialized variable to store recieved data
char hellostr[5] = "Hello"; //String data
int incomingByte = 0; // for incoming serial data

void setup() {
  // Begin the Serial at 115200 Baud
  Serial.begin(9600);
  CircuitPlayground.begin();
}

void loop() {  
  //if (Serial.available() > 0) {
    // read the incoming byte:
    incomingByte = Serial.read();

    // say what you got:
    Serial.print("I received: ");
    Serial.println(incomingByte, HEX);
    CircuitPlayground.setPixelColor(0, 255, 0, 255);
  //}
}
