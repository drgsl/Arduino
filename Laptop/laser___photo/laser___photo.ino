int Photo = A0;
int Laser = 3;
int limita = 500;

void setup() {
  // put your setup code here, to run once:
  pinMode(Photo, INPUT);
  pinMode(Laser, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.println(analogRead(A0));
  digitalWrite(Laser, HIGH);

  if (analogRead(Photo) < limita) {
    Serial.println(" Alarma!! ");
  }
}
