int PinLed1 = 11;
int PinLed2 = 11;
int PinLed3 = 11;
int viteza = 100;

void setup() {
  pinMode(PinLed1, OUTPUT);
  pinMode(PinLed2, OUTPUT);
  pinMode(PinLed3, OUTPUT);

}

void loop() {
  
  digitalWrite(PinLed1, HIGH);
  delay(viteza);
  digitalWrite(PinLed1, HIGH);
  delay(viteza);
  digitalWrite(PinLed1, HIGH);
  delay(viteza);

  
  digitalWrite(PinLed1, LOW);
  delay(viteza);
  digitalWrite(PinLed1, LOW);
  delay(viteza);
  digitalWrite(PinLed1, LOW);
  delay(viteza);
}
