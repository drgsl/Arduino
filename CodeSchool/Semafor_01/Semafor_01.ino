int rosu = 11;
int galben = 10;
int verde = 9;

void setup() {
  pinMode(rosu, OUTPUT);
  pinMode(galben, OUTPUT);
  pinMode(verde, OUTPUT);
  digitalWrite(rosu, HIGH);

}

void loop() {
  if (analogRead(5) >= 1023) {
    digitalWrite(rosu, LOW);
    digitalWrite(galben, HIGH);
    delay(1000);
    digitalWrite(verde, HIGH);
    digitalWrite(galben, LOW);
    delay(3000);
    digitalWrite(galben, HIGH);
    delay(1000);
    digitalWrite(verde, LOW);
    digitalWrite(galben, LOW);
    digitalWrite(rosu, HIGH);
  }
}
