int Pot0 = A0;
int Pot1 = A1;
int Pot2 = A2;

int PinRosu = 6;
int PinVerde = 5;
int PinAlbastru = 3;
void setup() {
  // put your setup code here, to run once:
  pinMode(A0, INPUT);
  pinMode(A1, INPUT);
  pinMode(A2, INPUT);

  pinMode(PinRosu, OUTPUT);
  pinMode(PinVerde, OUTPUT);
  pinMode(PinAlbastru, OUTPUT);
}
void loop() {
  // put your main code here, to run repeatedly:
  int val0 = analogRead(A0);
  int val1 = analogRead(A1);
  int val2 = analogRead(A2);

  Serial.println(val0);
  Serial.println(val1);
  Serial.println(val2);

  analogWrite(PinRosu, val0 / 4);
  analogWrite(PinVerde, val1 / 4);
  analogWrite(PinAlbastru, val2 / 4);
}
