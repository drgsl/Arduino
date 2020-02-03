void setup() {
  pinMode(6, OUTPUT);
}

void loop() {
  analogWrite(6, 512);
  delay(1000);
  analogWrite(6, 0);
  delay(1000);
}
