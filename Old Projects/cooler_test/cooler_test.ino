int power = 0;
int motor = 9; 
  
void setup() {
  pinMode(motor, OUTPUT);
    Serial.begin(9600);
}

void loop() {
digitalWrite(motor, HIGH);
}
//  power +=1; 
//  Serial.println(power);
//if(power>= 1000){
//power = 0; 
//}}
