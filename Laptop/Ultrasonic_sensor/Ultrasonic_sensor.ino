// definirea pinilor
 int trigPin = 5;
 int echoPin = 3;
// definirea variabilelor
long duration; //durata
int distance;  //distanta

void setup() {
  pinMode(trigPin, OUTPUT); // trigpin este output
  pinMode(echoPin, INPUT); // echoPin  este input
  Serial.begin(9600); // pornim comunicarea seriala
}
void loop() {
  // resetam valoarea lui trigpin
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  // trigpin trebuie sa stea pornit pentru 10 microsecunde
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  // citim valoarea lui echopin, valoarea va fi stocata in variabila duration si este in microsecunde
  duration = pulseIn(echoPin, HIGH);
  // calculam distanta
  distance = duration * 0.034 / 2;
  // printam distanta pe serial monitor
  Serial.print("Distance: ");
  Serial.println(distance);
}
