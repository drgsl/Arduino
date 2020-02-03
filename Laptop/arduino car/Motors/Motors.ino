int bin1 = 3;
int bin2 = 5;
int pwmb = 6;

int ain1 = 9;
int ain2 = 10;
int pwma = 11;
void setup() {
  // put your setup code here, to run once:
  for (int i = bin1; i <= pwmb; i++) {
    //if(i == 4) continue;
    pinMode(i, OUTPUT);
  }
  for (int i = ain1; i <= pwma; i++) {
    pinMode(i, OUTPUT);
  }
}

void loop() {
  Move(1, 1, 1000);
}


void aBack(int spd) {
  digitalWrite(ain1, HIGH);
  digitalWrite(ain2, LOW);
  analogWrite(pwma, spd);
}

void aFront(int spd) {
  digitalWrite(ain1, LOW);
  digitalWrite(ain2, HIGH);
  analogWrite(pwma, spd);
}
void bBack(int spd) {
  digitalWrite(bin1, LOW);
  digitalWrite(bin2, HIGH);
  analogWrite(pwmb, spd);
}

void bFront(int spd) {
  digitalWrite(bin1, HIGH);
  digitalWrite(bin2, LOW);
  analogWrite(pwmb, spd);
}



void RightFront(int spd) {
  bFront(spd);
  aBack(spd);
}

void LeftFront(int spd) {
  bBack(spd);
  aFront(spd);
}

void RightBack(int spd) {
  bFront(0);
  aBack(spd);
}

void LeftBack(int spd) {
  bBack(spd);
  aFront(0);
}

void Move ( int Horizonal, int Vertical, int spd) {
  if (Vertical == 0) {
    aBack(0);
    bBack(0);
    return;
  }

  if (Horizontal == 1 && Vertical == 1) {
    RightFront(spd);
    return;
  }
  else if ( Horizontal == 1 && Vertical == -1) {
    RightBack(spd);
    return;
  }
  else if (Horizontal == -1 && Vertical == 1) {
    LeftFront(spd);
    return;
  }
  else if (Horizontal == -1 && Vertical == -1) {
    LeftBack(spd);
    return;
  }
  else if ( Horizontal == 0  && Vertical == 1) {
    aFront(spd);
    bFront(spd);
    return;
  }
  else if ( Horizontal == 0 && Vertical == -1) {
    aBack(spd);
    bBack(spd);
    return;
  }
}
