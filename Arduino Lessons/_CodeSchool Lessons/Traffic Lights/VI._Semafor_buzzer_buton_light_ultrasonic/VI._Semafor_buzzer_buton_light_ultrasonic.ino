int PinVerde = 11;
int viteza = 100;
int PinRosu = 9;
int PinButon = 0;
int PinGalben = 10;
int PinLumina = 1;

int PinBuzzer = 6;


// definirea pinilor
const int trigPin = 5;
const int echoPin = 3;
// definirea variabilelor
long duration; //durata
int distance;  //distanta

void setup() {
  Serial.begin(9600);
  pinMode(PinButon, INPUT);
  pinMode(PinGalben, OUTPUT);
  pinMode(PinVerde, OUTPUT);
  pinMode(PinRosu, OUTPUT);
  pinMode(PinLumina, INPUT);


  pinMode(PinBuzzer, OUTPUT);

  
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

  
  Serial.println(analogRead(PinButon));
  digitalWrite(PinRosu, HIGH);
  if (analogRead(PinButon) >= 1023) {
    Serial.print("Butonul a fost apasat");

    delay(viteza);
    digitalWrite(PinGalben, HIGH);
    delay(viteza);
    digitalWrite(PinRosu, LOW);
    digitalWrite(PinGalben, LOW);
    digitalWrite(PinVerde, HIGH);

    while (analogRead(PinLumina) >= 5) {
      
      digitalWrite(PinBuzzer, HIGH);
    
    }
      
      digitalWrite(PinBuzzer, LOW);
      
      digitalWrite(PinVerde, LOW);
  }
}
