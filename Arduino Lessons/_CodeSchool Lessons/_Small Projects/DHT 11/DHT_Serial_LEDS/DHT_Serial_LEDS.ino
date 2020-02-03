#include <dht.h>
dht DHT;
int DHT11_PIN = 7;


int Pin_Albastru = 4;
int Pin_Verde = 5;
int Pin_Rosu = 6;

void setup() {
  Serial.begin(9600);

  pinMode(Pin_Albastru, OUTPUT);
  pinMode(Pin_Verde, OUTPUT);
  pinMode(Pin_Rosu, OUTPUT);
}

void loop()
{
  delay(2000);
  int chk = DHT.read11(DHT11_PIN);
  Serial.print("Temperature = ");
  Serial.println(DHT.temperature);
  Serial.print("Humidity = ");
  Serial.println(DHT.humidity);


  int temp = DHT.temperature;
  
  if (temp < 20) {
    digitalWrite(Pin_Albastru, HIGH);
    digitalWrite(Pin_Verde, LOW);
    digitalWrite(Pin_Rosu, LOW);
  }
  else if (temp > 30) {
    digitalWrite(Pin_Albastru, LOW);
    digitalWrite(Pin_Verde, LOW);
    digitalWrite(Pin_Rosu, HIGH);
  }
  else {
    digitalWrite(Pin_Albastru, LOW);
    digitalWrite(Pin_Verde, HIGH);
    digitalWrite(Pin_Rosu, LOW);
  }
}
