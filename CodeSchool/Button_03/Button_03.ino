int luminozitate = 0;

void setup() {
  Serial.begin(9600);
  pinMode(5, INPUT); // button
  pinMode(11, OUTPUT); // led
}

void loop() {
  if (analogRead(5) >= 1023){
    luminozitate += 1;
    delay(10);
    analogWrite(11, luminozitate);
  }
}
