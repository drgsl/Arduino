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

int i = 255; 
int j = 128;
int z = 0; 

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

  red = map(sin(i), -1, 1, 0, 255);
  blue = map(sin(j), -1, 1, 0, 255);
  green = map(sin(z), -1, 1, 0, 255);

  i++; 
  j++; 
  z++;
  
  if(i>=255 || j >= 255 || z >=255 ){
    delay(1000);
  i=0;j=0;z=0;}
} 
