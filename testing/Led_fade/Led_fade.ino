void setup() {
  // put your setup code here, to run once:
  pinMode(3, OUTPUT);
  Serial.begin(1200);
 TCCR2A = _BV(COM2A0) | _BV(COM2B1) | _BV(WGM20);
 TCCR2B = _BV(WGM22) | _BV(CS22)| _BV(CS21)| _BV(CS20);           //
 OCR2A = 156;
 OCR2B = 4;
}

void loop() {

  //  for (int i = 255 ; i >= 0; i-=1) {
  //    analogWrite(3, i);
  //    delay(5);
  //  }
  //      //delay(1000);
  //  // put your main code here, to run repeatedly:
  //  for (int i = 0 ; i <= 255; i+=1) {
  //    analogWrite(3, i);
  //    delay(5);
  //  }

  analogWrite(3, 0);
  delay(9);
  analogWrite(3, 255);
  delay(9);

    Serial.print("1");
  //  delay(500);
}
