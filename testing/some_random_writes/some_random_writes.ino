int b1 = A0;
int b2 = A1;

int L1 = 6;
int L2 = 5;

void setup() {
  // put your setup code here, to run once:
  pinMode(b1, INPUT);
  pinMode(b2, INPUT);

  pinMode(L1, OUTPUT);
  pinMode(L2, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  if (digitalRead(b1)) {
    digitalWrite(L1, HIGH);
    while (1);
  }
  
  if (digitalRead(b2)){
    digitalWrite(L2, HIGH);
    while (1);
  }

}
