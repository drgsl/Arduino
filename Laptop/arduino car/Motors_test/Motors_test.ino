int pins[6] = {3, 5, 6, 9, 10, 11};

void setup() {
  // put your setup code here, to run once:
  for (int i = 0; i < 6; i++) {
    pinMode(pins[i], OUTPUT);
  }
  Serial.begin(9600);
  //    digitalWrite(3, HIGH);
  //  digitalWrite(5, LOW);
  //  analogWrite(6, 255);
}

void loop() {
//  // put your main code here, to run repeatedly:
//  for (int i = 0; i <= 255; i++) {
//    MoveA(1, i);
//    Serial.println(i);
//    delay(50);
//  }
//
//  for (int i = 255; i > 0; i--) {
//    MoveA(-1, i);
//    Serial.println(i);
//    delay(50);
//  }
MoveA(-1, 255);
MoveB(1, 255);
}

void MoveB(int dir, int spd) {
  if (dir == 1) {
    digitalWrite(pins[0], HIGH);
    digitalWrite(pins[1], LOW);
    analogWrite(pins[2], spd);
  } else if (dir == -1) {
    digitalWrite(pins[0], LOW);
    digitalWrite(pins[1], HIGH);
    analogWrite(pins[2], spd);
  }
}

void MoveA(int dir, int spd) {
  if (dir == 1) {
    digitalWrite(pins[3], HIGH);
    digitalWrite(pins[4], LOW);
    analogWrite(pins[5], spd);
  } else if (dir == -1) {
    digitalWrite(pins[3], LOW);
    digitalWrite(pins[4], HIGH);
    analogWrite(pins[5], spd);
  }
}
