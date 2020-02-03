int PinVerde = 11;
int viteza = 100;
int PinRosu = 9;
int PinButon = 0;
int PinGalben = 10;

int PinLumina = 1;

void setup() {
  Serial.begin(9600);
  pinMode(PinGalben, OUTPUT);
  pinMode(PinVerde, OUTPUT);
  pinMode(PinRosu, OUTPUT);

  pinMode(PinLumina, INPUT);

}

void loop() {

  while (analogRead(PinLumina) >= 5) {
    delay(viteza);
  }


  Serial.println(analogRead(PinButon));

  digitalWrite(PinRosu, HIGH);

  if (analogRead(PinButon) >= 1023) {
    Serial.print("Butonul a fost apasat");

    delay(viteza);
    digitalWrite(PinGalben, HIGH);
    delay(viteza);
    digitalWrite(PinRosu, LOW);
    digitalWrite(PinGalben, LOW);
    digitalWrite(PinVerde, HIGH);


    digitalWrite(PinVerde, LOW);
  }
}
