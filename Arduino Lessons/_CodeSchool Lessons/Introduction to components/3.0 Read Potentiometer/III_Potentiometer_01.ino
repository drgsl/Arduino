int Potentiometru = 3;

void setup() {
  pinMode(Potentiometru, INPUT);
}

void loop() {
  Serial.println(analogRead(Potentiometru));
}
