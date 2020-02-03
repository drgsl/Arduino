/*
  ReadAnalogVoltage

  Reads an analog input on pin 0, converts it to voltage, and prints the result to the Serial Monitor.
  Graphical representation is available using Serial Plotter (Tools > Serial Plotter menu).
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

  This example code is in the public domain.

  http://www.arduino.cc/en/Tutorial/ReadAnalogVoltage
*/

int red, blue, green;  

int redp = 9;
int greenp = 10;
int bluep = 11;


void setup() {
  Serial.begin(9600);
  pinMode(redp, OUTPUT);
  pinMode(bluep, OUTPUT);
  pinMode(greenp, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop() {

  analogWrite(redp, red / 4);
  analogWrite(bluep, blue / 4);
  analogWrite(greenp, green / 4);
  
  // read the input on analog pin 0:
  blue = map(analogRead(A0), 0, 1023, 0, 255);
  // print out the value you read:
  Serial.print(blue);
  Serial.print(",");

  red =map(analogRead(A1), 0, 1023, 0, 255);;
  Serial.print(red);
  Serial.print(",");


  green =map(analogRead(A2), 0, 1023, 0, 255);;
  Serial.println(green);
  


}
