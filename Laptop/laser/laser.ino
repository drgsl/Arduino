int PinLaser = 3;

void setup() {
  // put your setup code here, to run once:
  pinMode(PinLaser, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(PinLaser, HIGH);
  delay(100);
  digitalWrite(PinLaser, LOW);
  delay(100);
}
