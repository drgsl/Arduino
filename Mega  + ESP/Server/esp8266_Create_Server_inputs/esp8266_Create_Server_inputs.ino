/*********
  Rui Santos
  Complete project details at https://RandomNerdTutorials.com/esp32-esp8266-input-data-html-form/

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files.

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
*********/

#include <Arduino.h>
#ifdef ESP32
#include <WiFi.h>
#include <AsyncTCP.h>
#else
#include <ESP8266WiFi.h>
#include <ESPAsyncTCP.h>
#endif
#include <ESPAsyncWebServer.h>

AsyncWebServer server(80);

// REPLACE WITH YOUR NETWORK CREDENTIALS
const char* ssid = "UPC44F3BAC";
const char* password = "zyuHdzfmu5ve";

const char* PARAM_INPUT_1 = "input1";
const char* PARAM_INPUT_2 = "input2";
const char* PARAM_INPUT_3 = "input3";

// HTML web page to handle 3 input fields (input1, input2, input3)
const char index_html[] PROGMEM = R"rawliteral(
<!DOCTYPE HTML>
  <html>
    <head>
      <title>ESP Input Form</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>

    
      <form action="/get">
        input1: <input type="text" name="input1">
        <input type="submit" value="Submit">
      </form><br>

      <form action="/get">
              input1:
        <input type="submit" name="input1" value="ButtonPressed"> ButtonPressed </button>
        <input type="submit" value="Submit">
      </form><br>
  
      <form action="/get">
        input2: <input type="text" name="input2">
        <input type="submit" value="Submit">
      </form><br>
      
      <form action="/get">
        input2:
        <select name="input2" size="4" multiple onchange="this.form.submit()>
          <option name="input2" value="Led1">Led1</option>
          <option name="input2" value="Led2">Led2</option>
          <option name="input2" value="Led3">Led3</option>
          <option name="input2" value="Led4">Led4</option>
        </select>
  
      <input type="submit" value="Submit">
      </form>
  
      <form action="/get">
        input3:
        <input type="radio" name="input3" value="male" checked> Male<br>
        <input type="radio" name="input3" value="female"> Female<br>
        <input type="radio" name="input3" value="other"> Other
  
      <input type="submit" value="Submit">
      </form>

      <form action="/get">
        input3:
        <select name="input3">
          <option name="input3" value="Clock">Clock</option>
          <option name="input3" value="Date">Date</option>
          <option name="input3" value="Temp">Temp</option>
          <option name="input3" value="Day Of Week">Day Of Week</option>
        </select>
        <input type="submit" value="Submit">
      </form>
  
    </body>
  </html>
)rawliteral";

void notFound(AsyncWebServerRequest *request) {
  request->send(404, "text/plain", "Not found");
}

void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());

  // Send web page with input fields to client
  server.on("/", HTTP_GET, [](AsyncWebServerRequest * request) {
    request->send_P(200, "text/html", index_html);
  });

  // Send a GET request to <ESP_IP>/get?input1=<inputMessage>
  server.on("/get", HTTP_GET, [] (AsyncWebServerRequest * request) {
    String inputMessage;
    String inputParam;
    // GET input1 value on <ESP_IP>/get?input1=<inputMessage>
    if (request->hasParam(PARAM_INPUT_1)) {
      inputMessage = request->getParam(PARAM_INPUT_1)->value();
      inputParam = PARAM_INPUT_1;
    }
    // GET input2 value on <ESP_IP>/get?input2=<inputMessage>
    else if (request->hasParam(PARAM_INPUT_2)) {
      inputMessage = request->getParam(PARAM_INPUT_2)->value();
      inputParam = PARAM_INPUT_2;
    }
    // GET input3 value on <ESP_IP>/get?input3=<inputMessage>
    else if (request->hasParam(PARAM_INPUT_3)) {
      inputMessage = request->getParam(PARAM_INPUT_3)->value();
      inputParam = PARAM_INPUT_3;
    }
    else {
      inputMessage = "No message sent";
      inputParam = "none";
    }
    Serial.println(inputMessage);
    if (inputMessage == "Clock") {
      Serial.println("0");
    }
    if (inputMessage == "Date") {
      Serial.println("1");
    }
    if (inputMessage == "Temp") {
      Serial.println("2");
    }
    request->send(200, "text/html", "HTTP GET request sent to your ESP on input field ("
                  + inputParam + ") with value: " + inputMessage +
                  "<br><a href=\"/\">Return to Home Page</a>");
  });
  server.onNotFound(notFound);
  server.begin();
}

void loop() {

}
