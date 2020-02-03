void setup() {
  pinMode(11, OUTPUT); // led
}

void loop() {
  digitalWrite(11, HIGH);
  delay(50);
  digitalWrite(11, LOW);
  delay(50);
}
