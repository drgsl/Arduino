#include <Servo.h>

Servo myservo;

int x = A0;
int y = A1;

void setup() {
  // put your setup code here, to run once:
  myservo.attach(9);
  pinMode(x, INPUT);
  pinMode(y, INPUT);

  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:

  int xval = analogRead(x);
  int yval = analogRead(y);

  Serial.print(xval);
  Serial.print(" , ")
  Serial.println(yval);

  if(yval > 600){
    myservo.write(0);
  }
  else if ( yval < 400){
    myservo.write(170);
  }


  
  //  for (int i = 0; i <= 170; i += 10) {
  //    myservo.write(i);
  //    delay(100);
  //  }
  //  for (int i = 170; i >= 0; i -= 10) {
  //    myservo.write(i);
  //    delay(100);
  //  }
}
