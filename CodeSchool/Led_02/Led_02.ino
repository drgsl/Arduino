void setup() {
  pinMode(11, OUTPUT); // led
}

void loop() {
  for(int i =0; i <= 255; i++){
    analogWrite(11,i);
    delay(2);
  }
  delay(250);
    for(int i =255; i >=0; i--){
    analogWrite(11,i);
    delay(2);
  }
  delay(250);
}
