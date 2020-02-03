int led1 = 2;
int led2 = 3;
int led3 = 4;
int led4 = 5;
int led5 = 6;
int led6 = 7;

int number;

void setup() {
  // set all LED pins to OUTPUT
  for (int i = led1; i <= led6; i++) {
    pinMode(i, OUTPUT);
  }

  randomSeed(analogRead(0));

  number = random(1, 7);

}


void loop() {

  digitalWrite(led1, HIGH);

  if (number >= 2) {
    digitalWrite(led2, HIGH);
  }
  if (number >= 3) {
    digitalWrite(led3, HIGH);
  }
  if (number >= 4) {
    digitalWrite(led4, HIGH);
  }
  if (number >= 5) {
    digitalWrite(led5, HIGH);
  }
  if (number == 6) {
    digitalWrite(led6, HIGH);
  }

}
