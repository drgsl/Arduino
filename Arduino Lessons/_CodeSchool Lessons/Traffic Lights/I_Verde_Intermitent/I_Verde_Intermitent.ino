int PinVerde = 11;
int viteza = 100;

void setup() {
  pinMode(PinVerde, OUTPUT);
}

void loop() {
  digitalWrite(PinVerde, HIGH);
  delay(viteza);
  digitalWrite(PinVerde, LOW);
  delay(viteza);
}
