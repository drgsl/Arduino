void setup()
{
  pinMode(11, OUTPUT); //rosu
  pinMode(10, OUTPUT); //verde
  pinMode(9, OUTPUT);  //albastru
}

void rgb(int rosu, int verde, int albastru) {
  analogWrite(11, rosu);
  analogWrite(10, verde);
  analogWrite(9, albastru);
}

void loop() {

  if (analogRead(0) > 900)
    rgb(255, 255, 255); // alb
  else if (analogRead(0) > 750)
    rgb(255, 0, 0); // rosu
  else if (analogRead(0) > 600)
    rgb(255, 0, 255); // roz
  else if (analogRead(0) > 450)
    rgb(0, 0, 255); // albastru
  else if (analogRead(0) > 300)
    rgb(0, 255, 255); // albastru verzui
  else if (analogRead(0) > 150)
    rgb(0, 255, 0); // verde
  else if (analogRead(0) > 0)
    rgb(255, 255, 0); // galben
}
