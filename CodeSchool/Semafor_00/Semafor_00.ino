int rosu = 11;
int verde = 9;

void setup() {
  pinMode(rosu, OUTPUT);
  pinMode(verde, OUTPUT);
}

void loop() {
  digitalWrite(rosu, HIGH);
  delay(3000);
  digitalWrite(rosu, LOW);
  digitalWrite(verde, HIGH);
  delay(3000);
  digitalWrite(verde, LOW);
}
