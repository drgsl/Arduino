void setup() {
  Serial.begin(9600);
  pinMode(5, INPUT); // button
  pinMode(11, OUTPUT); // led
}

void loop() {
  Serial.println(analogRead(5));
  if (analogRead(5) >= 1023) {
    digitalWrite(11, HIGH);
    //Serial.println("Pressed");
  }
  else
  {
    digitalWrite(11, LOW);
    //Serial.println("Not Pressed");
  }
}
