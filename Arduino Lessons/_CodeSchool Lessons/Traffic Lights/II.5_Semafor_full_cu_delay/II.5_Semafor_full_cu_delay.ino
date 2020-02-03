int PinVerde = 11;
int viteza = 1000;

int PinRosu = 9;

int PinGalben = 10;

void setup() {
  pinMode(PinVerde, OUTPUT);


  pinMode(PinRosu, OUTPUT);


  pinMode(PinGalben, OUTPUT);
}

void loop() {

  digitalWrite(PinRosu, HIGH);
  delay(viteza);
  digitalWrite(PinGalben, HIGH);
  delay(viteza);
  digitalWrite(PinRosu, LOW);
  digitalWrite(PinGalben, LOW);
  digitalWrite(PinVerde, HIGH);
  delay(viteza);
  digitalWrite(PinVerde, LOW);
}
