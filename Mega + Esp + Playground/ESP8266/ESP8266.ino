#include "ESP8266WiFi.h"
#include "ESP8266HTTPClient.h"
#include "ArduinoJson.h"
#include <Wire.h>

// WiFi Parameters
const char* ssid = "UPC44F3BAC";
const char* password = "zyuHdzfmu5ve";


//String lastPayload;

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);     // Initialize the LED_BUILTIN pin as an output
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  digitalWrite(LED_BUILTIN, LOW);  // Turn the LED off by making the voltage HIGH
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting...");
  }
  Serial.println("Connected");

  Wire.begin();

}
void loop() {
  // Check WiFi Status
  //Serial.println("Starting Loop");

  digitalWrite(LED_BUILTIN, HIGH);  // Turn the LED off by making the voltage HIGH

  if (WiFi.status() == WL_CONNECTED) {
    //Serial.println("Wifi Connected");
    HTTPClient http;  //Object of class HTTPClient
    http.begin("http://electropeak.com/api/ifttt/?apikey=70bbfb2b683385ddae9a6b1ceaeb45d2");
    int httpCode = http.GET();
    //Serial.println(httpCode);
    //Check the returning code
    if (httpCode > 0) {
      // Get the request response payload
      String payload = http.getString();

      Wire.beginTransmission(9); // transmit to device #9
      Wire.write(payload.c_str());              // sends x
      Wire.endTransmission();    // stop transmitting
      
      // TODO: Parsing
      Serial.println(payload);
    }
    http.end();   //Close connection
  }
  // Delay
  delay(300);
}
