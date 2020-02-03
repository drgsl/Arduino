int Led = 11;

void setup() {
  pinMode(Led, OUTPUT);
}

void loop() {
  digitalWrite(Led, HIGH);
  delay(50);
  digitalWrite(Led, LOW);
  delay(50);
}
