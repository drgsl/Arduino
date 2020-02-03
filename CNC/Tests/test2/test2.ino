int Move_Yaxis = 5;
int Y2 = 7;
int Y1 = 6;
int YAxis_DelaySpeed = 10;

int Move_Xaxis = 8;
int X1 = 9;
int X2 = 10;
int XAxis_DelaySpeed = 10;


int BigDelay = 50;

int XSteps = 10;
int YSteps = 10;

void setup() {
  pinMode(Move_Yaxis, OUTPUT);

  pinMode(Y1, OUTPUT);
  pinMode(Y2, OUTPUT);

  pinMode(Move_Xaxis, OUTPUT);

  pinMode(X1, OUTPUT);
  pinMode(X2, OUTPUT);

}
void loop() {
  YFaceUp();
  delay(BigDelay);
  MoveY(YSteps);
  delay(BigDelay);
  YFaceDown();
  delay(BigDelay);
  MoveY(YSteps);
  delay(BigDelay);


  XFaceRight();
  delay(BigDelay);
  MoveX(XSteps);
  delay(BigDelay);
  XFaceLeft();
  delay(BigDelay);
  MoveX(XSteps);
  delay(BigDelay);
}

void MoveY(int units) {
  for (int i = 0; i < units; i ++)
  {
    digitalWrite(Move_Yaxis, LOW);  // move Y axis
    delay(YAxis_DelaySpeed);        // wait
    digitalWrite(Move_Yaxis, HIGH); //stop Y axis from moving
    delay(YAxis_DelaySpeed);        // wait
  }
}

void MoveX(int units) {
  for (int i = 0; i < units; i ++)
  {
    digitalWrite(Move_Xaxis, LOW);  // move X axis
    delay(XAxis_DelaySpeed);        // wait
    digitalWrite(Move_Xaxis, HIGH); //stop X axis from moving
    delay(XAxis_DelaySpeed);        // wait
  }
}

void YFaceUp() {

  digitalWrite(Y2, HIGH);
  digitalWrite(Y1, HIGH);
}


void YFaceDown() {

  digitalWrite(Y2, LOW);
  digitalWrite(Y1, LOW);
}




void XFaceRight() {

  digitalWrite(X2, HIGH);
  digitalWrite(X1, HIGH);
}


void XFaceLeft() {

  digitalWrite(X2, LOW);
  digitalWrite(X1, LOW);
}
