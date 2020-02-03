int Led = 11;
int Buton = 0;
int Potentiometru = 1;
int Led2 = 10;
int Fotoresistor = 2;
int Led3 = 9;

int Buton2 = 3;
int Led4 = 3;
int luminozitate = 0;

void setup() {
  pinMode(Buton, INPUT);
  pinMode(Potentiometru, INPUT);
  pinMode(Led, OUTPUT);
  pinMode(Led2, OUTPUT);
  pinMode(Fotoresistor, INPUT);
  pinMode(Led3, OUTPUT);

  pinMode(Buton2, INPUT);
  pinMode(Led4, OUTPUT);

}

void loop() {
  if (analogRead(Buton) >= 1023) { //Butonul a fost apasat
    digitalWrite(Led, HIGH);
  }
  else
  {
    digitalWrite(Led, LOW);
  }


  analogWrite(Led2, analogRead(Potentiometru));


  if (analogRead(Fotoresistor) > 5) {
    digitalWrite(Led3, LOW);
  }
  else {
    digitalWrite(Led3, HIGH);
  }

  if (analogRead(Buton2) >= 1023) {
    luminozitate += 1;
    delay(10);
    analogWrite(Led4, luminozitate);
  }
}
