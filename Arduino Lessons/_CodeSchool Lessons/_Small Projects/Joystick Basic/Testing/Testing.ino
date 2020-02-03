int x = A0;
int y = A1;

int sus = 3;
int jos = 5;
int stanga = 6;
int dreapta = 9;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(x, INPUT);
  pinMode(y, INPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  int xval = analogRead(x);
  int yval = analogRead(y);

  Serial.print("X: ");
  Serial.println(xval);
  Serial.print("Y: ");
  Serial.println(yval);
  delay(100);

  if (xval > 600) {
    digitalWrite(dreapta, HIGH);
  }
  else if (xval < 400) {
    digitalWrite(stanga, HIGH);
  }
  else if ( yval > 600 ) {
    digitalWrite(sus, HIGH);
  }
  else if ( yval < 400) {
    digitalWrite(jos, HIGH);
  }
  else {
    digitalWrite(dreapta, LOW);
    digitalWrite(stanga, LOW);
    digitalWrite(sus, LOW);
    digitalWrite(jos, LOW);
  }
}
