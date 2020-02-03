int PinVerde = 11;
int viteza = 100;
int PinRosu = 9;
int PinButon = 0;
int PinGalben = 10;
int PinLumina = 1;

int PinBuzzer = 6;

void setup() {
  Serial.begin(9600);
  pinMode(PinButon, INPUT);
  pinMode(PinGalben, OUTPUT);
  pinMode(PinVerde, OUTPUT);
  pinMode(PinRosu, OUTPUT);
  pinMode(PinLumina, INPUT);


  pinMode(PinBuzzer, OUTPUT);
}

void loop() {
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

    while (analogRead(PinLumina) >= 5) {
      
      digitalWrite(PinBuzzer, HIGH);
    
    }
      
      digitalWrite(PinBuzzer, LOW);
      
      digitalWrite(PinVerde, LOW);
  }
}
