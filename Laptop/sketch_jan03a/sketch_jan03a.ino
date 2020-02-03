int p = 3;
int d = 500;
int i0 = 255;
int i1 = 124;

void setup() {
  // put your setup code here, to run once:
  pinMode(3, OUTPUT);

}

void loop() {
  //  // put your main code here, to run repeatedly:
  //  analogWrite(p, i0);
  //  delay(d);
  //  analogWrite(p, i1);
  //  delay(d);
 
  digitalWrite(p, HIGH);
  delay(d);
  digitalWrite(p, LOW);
  delay(d);
}
