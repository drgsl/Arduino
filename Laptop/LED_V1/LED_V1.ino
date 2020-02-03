int temperatura; 


void setup() {
  // put your setup code here, to run once:
pinMode(2, OUTPUT); 
pinMode(7, OUTPUT); 
 pinMode(9, OUTPUT); 



Serial.begin(9600); 
}

void loop() {
  // put your main code here, to run repeatedly:

  while(Serial.available() > 0){

    temperatura = Serial.parseInt(); 
    Serial.println(temperatura); 
    if(temperatura >0 and temperatura <=10)
    {
      digitalWrite(7, HIGH); 
      delay(2000); 
      digitalWrite(7, LOW);
      delay(100); 
      digitalWrite(7, HIGH); 
      delay (1000);
      digitalWrite(7, LOW);   
    }else if(temperatura >=11 and temperatura <20)
    {
      digitalWrite(2, HIGH); 
      delay(2000); 
      digitalWrite(2, LOW); 
      }else(temperatura >=20);
    {
      digitalWrite(9, HIGH); 
      delay(2000); 
      digitalWrite(9, LOW); 
      }
  }

}
