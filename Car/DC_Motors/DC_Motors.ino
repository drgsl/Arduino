//L293D
//Motor A
const int motorPin1  = 5;  // Pin 14 of L293
const int motorPin2  = 6;  // Pin 10 of L293
//Motor B
const int motorPin3  = 10; // Pin  7 of L293
const int motorPin4  = 9;  // Pin  2 of L293

#include <RH_ASK.h>
#include <SPI.h> // Not actualy used but needed to compile

RH_ASK driver;

//This will run only one time.
void setup() {
  Serial.begin(9600);

  //Set pins as outputs
  pinMode(motorPin1, OUTPUT);
  pinMode(motorPin2, OUTPUT);
  pinMode(motorPin3, OUTPUT);
  pinMode(motorPin4, OUTPUT);
  
      if (!driver.init())
         Serial.println("init failed");

  //Motor Control - Motor A: motorPin1,motorpin2 & Motor B: motorpin3,motorpin4

  //This code  will turn Motor A clockwise for 2 sec.
  //  digitalWrite(motorPin1, HIGH);
  //  digitalWrite(motorPin2, LOW);
  //  digitalWrite(motorPin3, LOW);
  //  digitalWrite(motorPin4, LOW);
  //  delay(2000);
  //  //This code will turn Motor A counter-clockwise for 2 sec.
  //  digitalWrite(motorPin1, LOW);
  //  digitalWrite(motorPin2, HIGH);
  //  digitalWrite(motorPin3, LOW);
  //  digitalWrite(motorPin4, LOW);
  //  delay(2000);
  //
  //  //This code will turn Motor B clockwise for 2 sec.
  //  digitalWrite(motorPin1, LOW);
  //  digitalWrite(motorPin2, LOW);
  //  digitalWrite(motorPin3, HIGH);
  //  digitalWrite(motorPin4, LOW);
  //  delay(2000);
  //  //This code will turn Motor B counter-clockwise for 2 sec.
  //  digitalWrite(motorPin1, LOW);
  //  digitalWrite(motorPin2, LOW);
  //  digitalWrite(motorPin3, LOW);
  //  digitalWrite(motorPin4, HIGH);
  //  delay(2000);
  //
  //  //And this code will stop motors
  //  digitalWrite(motorPin1, LOW);
  //  digitalWrite(motorPin2, LOW);
  //  digitalWrite(motorPin3, LOW);
  //  digitalWrite(motorPin4, LOW);

}


void loop() {
//  int x = map(analogRead(A1), 0, 1030, -1024, 1024);
//  int y = map(analogRead(A2), 0, 1030, -1024, 1024);
//Serial.println(x);
//  if (x > 100) {
//    digitalWrite(motorPin1, HIGH);
//    digitalWrite(motorPin2, LOW);
//
//    digitalWrite(motorPin3, HIGH);
//    digitalWrite(motorPin4, LOW);
//  }
//  else  if (x < - 100){
//    digitalWrite(motorPin1, LOW);
//    digitalWrite(motorPin2, HIGH);
//
//
//    digitalWrite(motorPin3, LOW);
//    digitalWrite(motorPin4, HIGH);
//  }else{
//    StopMotors();
//  }


  uint8_t buf[4];
    uint8_t buflen = sizeof(buf);
    if (driver.recv(buf, &buflen)) // Non-blocking
    {
      Serial.print("Message: ");
      Serial.println((char*)buf);         
    }
}


void GoForward(int HowLong) {
  digitalWrite(motorPin1, HIGH);
  digitalWrite(motorPin2, LOW);

  digitalWrite(motorPin3, HIGH);
  digitalWrite(motorPin4, LOW);
  //delay(HowLong);
}


void RotateRightClockwise(int HowLong) {
  digitalWrite(motorPin1, HIGH);
  digitalWrite(motorPin2, LOW);
  delay(HowLong);
}

void RotateLeftClockwise(int HowLong) {
  digitalWrite(motorPin3, HIGH);
  digitalWrite(motorPin4, LOW);
  delay(HowLong);
}

void RotateRightCounterClockwise(int HowLong) {
  digitalWrite(motorPin1, LOW);
  digitalWrite(motorPin2, HIGH);
  delay(HowLong);
}

void RotateLeftCounterClockwise(int HowLong) {
  digitalWrite(motorPin3, LOW);
  digitalWrite(motorPin4, HIGH);
  delay(HowLong);
}

void StopMotors() {
  digitalWrite(motorPin1, LOW);
  digitalWrite(motorPin2, LOW);
  digitalWrite(motorPin3, LOW);
  digitalWrite(motorPin4, LOW);
}
