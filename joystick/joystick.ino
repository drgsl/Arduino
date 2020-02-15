int x = A1;
int y = A0;

int L1 = 3; // sus
int L2 = 9; // dreapta
int L3 = 5; // jos
int L4 = 6; // stanga

void setup() {
  // put your setup code here, to run once:
  pinMode(x, INPUT);
  pinMode(y, INPUT);
  Serial.begin(9600);

  pinMode(L1, OUTPUT);
  pinMode(L2, OUTPUT);
  pinMode(L3, OUTPUT);
  pinMode(L4, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  int xval = analogRead(x);
  int yval = analogRead(y);

  Serial.println(xval);
  Serial.println(yval);
  Serial.println();

  if (yval == 1023)
    digitalWrite(L1, HIGH);
  else if (yval == 0)
    digitalWrite(L2, HIGH);
  else if (xval == 1023)
    digitalWrite(L3, HIGH);
  else if (xval == 0)
    digitalWrite(L4, HIGH);
  else {
    digitalWrite(L1, LOW);
    digitalWrite(L2, LOW);
    digitalWrite(L3, LOW);
    digitalWrite(L4, LOW);
  }
}
