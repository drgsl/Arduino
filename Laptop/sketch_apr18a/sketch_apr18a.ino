#include <Adafruit_CircuitPlayground.h>

bool rightButtonPressed;

// Detect light using the analog light sensor (photoresistor)
#define ANALOG_INPUT A5
// Variable to store the sensor value
int sensor_value;


void setup() {
  // put your setup code here, to run once:
  CircuitPlayground.begin();
  CircuitPlayground.clearPixels();
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:

    sensor_value = analogRead(ANALOG_INPUT);

    Serial.println(sensor_value);
    delay(50);
}
