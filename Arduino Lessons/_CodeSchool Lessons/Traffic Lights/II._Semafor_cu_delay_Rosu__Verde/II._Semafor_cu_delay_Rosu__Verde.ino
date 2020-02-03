int PinVerde = 11;
int viteza = 1000;


int PinRosu = 9;

void setup() {
  pinMode(PinVerde, OUTPUT);

  
  pinMode(PinRosu, OUTPUT);
}

void loop() {
  
  digitalWrite(PinRosu, HIGH);
  delay(viteza);
  digitalWrite(PinRosu, LOW);

  
  digitalWrite(PinVerde, HIGH);
  delay(viteza);
  digitalWrite(PinVerde, LOW);
}
