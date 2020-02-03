void setup() {
  Serial.begin(9600);
  pinMode(0, INPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  Serial.println(analogRead(0));
  if (analogRead(0) > 200) {
    digitalWrite(9, LOW);  //Turn led off
  }
  else {
    digitalWrite(9, HIGH); //Turn led on
  }

  delay(500);
}
