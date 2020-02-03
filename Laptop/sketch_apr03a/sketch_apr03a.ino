#include <LiquidCrystal.h>

// Arduino pin numbers
const int SW_pin = 13; // digital pin connected to switch output
const int X_pin = 0; // analog pin connected to X output
const int Y_pin = 1; // analog pin connected to Y output

const int rs = 7, en = 6, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

// defines pins numbers
const int trigPin = 9;
const int echoPin = 10;

// defines variables
long duration;
int distance;

void setup() {
  pinMode(SW_pin, INPUT);
  digitalWrite(SW_pin, HIGH);
  Serial.begin(115200);

  pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output
pinMode(echoPin, INPUT); // Sets the echoPin as an Input

    // set up the LCD's number of columns and rows:
  lcd.begin(16, 2);
}

void loop() {
  //ReadJoyStick();
  ReadDistance();
}

void ReadJoyStick(){

  lcd.setCursor(0,0); 
  lcd.print("X-axis:");
  lcd.print(analogRead(X_pin));
  lcd.setCursor(0,1);
  lcd.print("Y-axis:");
  lcd.print(analogRead(Y_pin));  
  delay(500);
  lcd.clear();
  
}


void ReadDistance(){


// Clears the trigPin
digitalWrite(trigPin, LOW);
delayMicroseconds(2);

// Sets the trigPin on HIGH state for 10 micro seconds
digitalWrite(trigPin, HIGH);
delayMicroseconds(10);
digitalWrite(trigPin, LOW);

// Reads the echoPin, returns the sound wave travel time in microseconds
duration = pulseIn(echoPin, HIGH);

// Calculating the distance
distance= duration*0.034/2;

  lcd.setCursor(0,0); 
  lcd.print("Distance: ");
  lcd.print(analogRead(distance));
  lcd.print("cm");
  lcd.clear();
  
}
