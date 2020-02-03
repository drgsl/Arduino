void setup() {
  Serial.begin(9600);
  pinMode(0, INPUT);
}

void loop() {
  Serial.println(analogRead(0));
}
