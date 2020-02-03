int PinVerde = 11;
int viteza = 1000;
int PinRosu = 9;

int PinButon = 0;
int PinGalben = 10;

void setup() {
  Serial.begin(9600);
  pinMode(PinButon, INPUT);
  pinMode(PinGalben, OUTPUT);


  pinMode(PinVerde, OUTPUT);
  pinMode(PinRosu, OUTPUT);
}

void loop() {
  Serial.println(analogRead(PinButon));

  digitalWrite(PinRosu, HIGH);

  if (analogRead(PinButton) >= 1023) {
    Serial.print("Butonul a fost apasat");

    delay(viteza);
    digitalWrite(PinGalben, HIGH);
    delay(viteza);
    digitalWrite(PinRosu, LOW);
    digitalWrite(PinGalben, LOW);
    digitalWrite(PinVerde, HIGH);
    delay(viteza);
    digitalWrite(PinVerde, LOW);
  }

}
