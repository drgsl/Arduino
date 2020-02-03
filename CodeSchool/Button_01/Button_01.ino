void setup() {
  Serial.begin(9600);
  pinMode(6, OUTPUT); 
}

void loop() {

for(int i = 0; i <= 1024; i ++){
  analogWrite(6, i);
  delay(10);
  Serial.println(i);
}
  
    }
