#include <Bounce2.h>

#include <FastLED.h>

// How many leds in your strip?
#define NUM_LEDS 300 + 120

// Data pin for the LEDs
#define DATA_PIN 5

// Potentiometer pins
#define POT_0_PIN A0
#define POT_1_PIN A1
#define POT_2_PIN A2

// Switch pin
#define SWITCH_PIN 9

// Push button pin
#define BUTTON_PIN 2

Bounce bounce = Bounce(BUTTON_PIN, 5);

// Define the array of leds
CRGB leds[NUM_LEDS];

boolean waiting = false;

byte failedAttempts = 0;
byte maxFailedAttempts = 3;

// the random target color the player will try to match
CHSV targetColor;

// the current color the player has created
CHSV currentColor;

// the maximum allowable difference in hue between the target and current colors
const byte maxDifference = 8;

// setup is called once by Arduino automatically
// all initial setup work should be done here
void setup() {
  // start the serial port, so we can log data to the Arduino IDE
  Serial.begin(9600);
  
  // start FastLED, tell it about our LEDs
  FastLED.addLeds<WS2812B, DATA_PIN, GRB>(leds, NUM_LEDS);
  
  // set the LED brightness
  // this is a global brightness, applied regardless of what color(s) are shown on the LEDs
  FastLED.setBrightness(16);

  FastLED.clear();

  // set the switch and button pins to input mode (as opposed to output), since we'll be reading from them
  pinMode(SWITCH_PIN, INPUT);
  pinMode(BUTTON_PIN, INPUT);
}

void loop() {
  bounce.update();
  
  random16_add_entropy(analogRead(A3));
  random16_add_entropy (random());
  
  int value0 = analogRead(A0); // read the value from the first potentiometer
  int value1 = analogRead(A1); // read the value from the second potentiometer
  int value2 = analogRead(A2); // read the value from the third potentiometer

  // read whether the button is pressed
  boolean buttonIsPressed = bounce.risingEdge();
  
  // read whether the switch is on or off
  boolean switchIsOn = digitalRead(SWITCH_PIN) == HIGH;

  // scale the potentiometer values from 10-bit (0-1023) to 8-bit (0-255)
  byte byte0 = map(value0, 0, 1023, 0, 255); // scale the value of first potentiometer
  byte byte1 = map(value1, 0, 1023, 0, 255); // scale the value of second potentiometer
  byte byte2 = map(value2, 0, 1023, 0, 255); // scale the value of third potentiometer

  // log the scaled potentiomenter values to the Serial port
  // printValues(byte0, byte1, byte2);

  if(!waiting) {
    byte newHue = random8();
    while(abs((int)newHue - (int)targetColor.h) < 64) {
      newHue = random8();
    }
    targetColor = CHSV(newHue, 255, 255);
    leds[1] = targetColor;
    waiting = true;
  }

  currentColor = CHSV(byte0, byte1, byte2);
  leds[0] = currentColor;

  // if the button is pressed, check
  if (buttonIsPressed && waiting) {
    checkColors();
  }

  // use FastLED to show the color(s) we've set
  FastLED.show();

  // wait for a fraction of a second (30ms, or about 1/30 of a second)
  // let FastLED show the color while we wait
  FastLED.delay(30);
}

void checkColors() {
  Serial.print(currentColor.h);
  Serial.print(", "); Serial.print(currentColor.s);
  Serial.print(", "); Serial.print(currentColor.v);

  int diff = abs((int)currentColor.h - (int)targetColor.h);
  
  // if the colors match, shift them down the strip
  if (diff <= maxDifference) {
    Serial.print(" == ");
    for(byte i = NUM_LEDS - 1; i > 0; i--) {
      leds[i] = leds[i - 1];
    }

    failedAttempts = 0;

    waiting = false;
  }
  else {
    Serial.print(" != ");

    failedAttempts += 1;

    byte numberToFlash = 1;
    
    if(failedAttempts > maxFailedAttempts) {
      numberToFlash = NUM_LEDS;
    }
    
    for(byte i = 0; i <= failedAttempts; i++) {
      fill_solid(leds, numberToFlash, CRGB::Red);
      FastLED.delay(failedAttempts * 100);
      fill_solid(leds, numberToFlash, CRGB::Black);
      FastLED.delay(failedAttempts * 100);
    }
    
    if(failedAttempts > maxFailedAttempts) {
      failedAttempts = 0;
      waiting = false;
    }
  }
  
  Serial.print(targetColor.h);
  Serial.print(", "); Serial.print(targetColor.s);
  Serial.print(", "); Serial.print(targetColor.v);
  Serial.println("");
}

void printValues(int value0, int value1, int value2) {
  // keep track of the former values, so we can log only when they change
  // since these are static, they'll keep their value between calls
  static int lastValue0 = 0;
  static int lastValue1 = 0;
  static int lastValue2 = 0;

  // if any of the values have changed
  if (value0 != lastValue0 || value1 != lastValue1 || value2 != lastValue2) {
    // print the new values to the Serial port
    Serial.print(value0);
    Serial.print(", "); Serial.print(value1);
    Serial.print(", "); Serial.print(value2);
    Serial.println("");

    // store the new values
    lastValue0 = value0;
    lastValue1 = value1;
    lastValue2 = value2;
  }
}
