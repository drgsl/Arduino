#include <dht.h>

dht DHT;

int DHT11_PIN = A0;

void setup() {
  Serial.begin(9600);
}

void loop()
{
  delay(2000);
  int chk = DHT.read11(DHT11_PIN);
  Serial.print("Temperature = ");
  Serial.println(DHT.temperature);
  Serial.print("Humidity = ");
  Serial.println(DHT.humidity);
}
