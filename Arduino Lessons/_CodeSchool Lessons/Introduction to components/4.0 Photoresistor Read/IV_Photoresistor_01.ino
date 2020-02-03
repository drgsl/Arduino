int Photoresistor = 2;

void setup() {
  pinMode(Photoresistor, INPUT);
}

void loop() {
  Serial.println(analogRead(Photoresistor));
}
