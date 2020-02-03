int Led1 = 2;
int Led2 = 3;
int Led3 = 4;
int Led4 = 5;
int Led5 = 6;
int Led6 = 7;

int numar = 1;

void setup() {
  pinMode(Led1, OUTPUT);
  pinMode(Led2, OUTPUT);
  pinMode(Led3, OUTPUT);
  pinMode(Led4, OUTPUT);
  pinMode(Led5, OUTPUT);
  pinMode(Led6, OUTPUT);

  randomSeed(analogRead(A0));
  numar = random(1, 7);
}

void loop() {
  digitalWrite(Led1, HIGH);
  if(numar > 1){
    digitalWrite(Led2, HIGH);
  }
    if(numar > 2){
    digitalWrite(Led3, HIGH);
  }
    if(numar > 3){
    digitalWrite(Led4, HIGH);
  }
      if(numar > 4){
    digitalWrite(Led5, HIGH);
  }
      if(numar > 5){
    digitalWrite(Led6, HIGH);
  }
}
