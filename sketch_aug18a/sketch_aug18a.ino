int GreenPin = 11;
int YellowPin = 10;
int RedPin = 9;

int ButtonPin = A5;

int LightPin = A4;

int BuzzerPin = 6;

int Trig = 5;
int Echo = 3;

int RecvPin = 7;

void setup() {
  // put your setup code here, to run once:
  pinMode(GreenPin, OUTPUT);
  pinMode(YellowPin, OUTPUT);
  pinMode(RedPin, OUTPUT);
  
  pinMode(ButtonPin, OUTPUT);
  
  pinMode(LightPin, OUTPUT);

  pinMode(BuzzerPin, OUTPUT);
  
  pinMode(Trig, OUTPUT);
  pinMode(Echo, OUTPUT);
  
  pinMode(RecvPin, OUTPUT);

}

void loop() {
  // put your main code here, to run repeatedly:

}
