int Led = 11;
int Buton = 0;
int Potentiometru = 1;
int Led2 = 10;

int Fotoresistor = 2;
int Led3 = 9;

void setup() {
  pinMode(Buton, INPUT);
  pinMode(Potentiometru, INPUT);
  pinMode(Led, OUTPUT);
  pinMode(Led2, OUTPUT);

  pinMode(Fotoresistor, INPUT);
    pinMode(Led3, OUTPUT);
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
}
