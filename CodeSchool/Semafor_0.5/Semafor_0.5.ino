int rosu = 11;
int verde = 9;

void setup() {
  pinMode(rosu, OUTPUT);
  pinMode(verde, OUTPUT);
  digitalWrite(rosu, HIGH);
}

void loop() {
  if (analogRead(5) >= 1023) {
    digitalWrite(rosu, LOW);
    digitalWrite(verde, HIGH);
    delay(3000);
    digitalWrite(verde, LOW);
    digitalWrite(rosu, HIGH);
        delay(3000);
  }
}
