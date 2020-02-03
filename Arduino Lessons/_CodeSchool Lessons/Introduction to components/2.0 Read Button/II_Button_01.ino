int Buton = 0;

void setup() {
  Serial.begin(9600);
  pinMode(Buton, INPUT);
}

void loop() {
  Serial.println(analogRead(Buton));
}
