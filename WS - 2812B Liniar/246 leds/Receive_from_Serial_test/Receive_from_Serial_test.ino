#include <FastLED.h>
#include <Keypad.h>

FASTLED_USING_NAMESPACE

#define DATA_PIN    5
#define LED_TYPE    WS2812B
#define COLOR_ORDER GRB
#define NUM_LEDS    246
#define MIDDLE_LEDS 158
#define UPPER_LEDS 98
CRGB leds[NUM_LEDS];

CRGBPalette16 currentPalette;
TBlendType    currentBlending;

extern CRGBPalette16 myRedWhiteBluePalette;
extern const TProgmemPalette16 myRedWhiteBluePalette_p PROGMEM;


#define BRIGHTNESS          96
int FRAMES_PER_SECOND = 100;
#define ARRAY_SIZE(A) (sizeof(A) / sizeof((A)[0]))

#define DISPLAYTIME 10
#define TEMPERATURE_1 Tungsten100W
#define TEMPERATURE_2 OvercastSky

uint8_t gCurrentPatternNumber; // Index number of which pattern is current
uint8_t gHue = 0; // rotating "base color" used by many of the patterns

bool backnforth = true;
char mystr[50]; //Initialized variable to store recieved data
char hellostr[50] = "RandomizeDeskPattern";

const byte ROWS = 4;
const byte COLS = 4;

char hexaKeys[ROWS][COLS] = {
  {'1', '2', '3', 'A'},
  {'4', '5', '6', 'B'},
  {'7', '8', '9', 'C'},
  {'*', '0', '#', 'D'}
};

byte rowPins[ROWS] = {13, 12, 11, 10};
byte colPins[COLS] = {9, 8, 7, 6};

char key, customKey;

Keypad customKeypad = Keypad(makeKeymap(hexaKeys), rowPins, colPins, ROWS, COLS);


// AUDIO INPUT SETUP
int audio = A5;

// STANDARD VISUALIZER VARIABLES
int loop_max = 0;
int k = 255; // COLOR WHEEL POSITION
int decay = 0; // HOW MANY MS BEFORE ONE LIGHT DECAY
int decay_check = 0;
long pre_react = 0; // NEW SPIKE CONVERSION
long react = 0; // NUMBER OF LEDs BEING LIT
long post_react = 0; // OLD SPIKE CONVERSION

// RAINBOW WAVE SETTINGS
int wheel_speed = 3;


void setup() {
  delay( 1500 ); // power-up safety delay
  pinMode(audio, INPUT);
  Serial.begin(115200);
  Serial.println("Starting....");
  FastLED.addLeds<LED_TYPE, DATA_PIN, COLOR_ORDER>(leds, NUM_LEDS).setCorrection(TypicalLEDStrip);
  FastLED.setBrightness(BRIGHTNESS);
  currentPalette = RainbowColors_p;
  currentBlending = LINEARBLEND;

  randomSeed(analogRead(A0));
  //gCurrentPatternNumber = random(8);

  customKey = hexaKeys[random(4)][random(4)];
}

// List of patterns to cycle through.  Each is defined as a separate function below.
typedef void (*SimplePatternList[])();
SimplePatternList gPatterns = { rainbow, confetti, sinelon, juggle, bpm, BackAndForth, ColorPalette, ColorTemp, MiddleMeeting1, MiddleMeeting2};

void loop() {
  // do some periodic updates
  EVERY_N_MILLISECONDS( 20 ) {
    gHue++;  // slowly cycle the "base color" through the rainbow
  }
  EVERY_N_SECONDS( 10 ) {
    nextPattern();  // change patterns periodically
  }
  EVERY_N_MILLISECONDS(1) {
    CheckForKeypad();
  }
  EVERY_N_MINUTES( 10 ) {
  customKey = hexaKeys[random(4)][random(4)];
  }
  // send the 'leds' array out to the actual LED strip
  FastLED.show();
  // insert a delay to keep the framerate modest
  FastLED.delay(1000 / FRAMES_PER_SECOND);
  
  if (Serial.available()) {
    Serial.readBytes(mystr, 50); //Read the serial data and store in var

    if (strcmp(mystr, hellostr) == 0){
      Serial.println("Woaaaa");
  customKey = hexaKeys[random(4)][random(4)];
  }
    Serial.println(mystr); //Print data on Serial Monitor
  }
}

void nextPattern() {
  // add one to the current pattern number, and wrap around at the end
  gCurrentPatternNumber = random(ARRAY_SIZE( gPatterns));
}
void fadeall() {
  for (int i = 0; i < NUM_LEDS; i++)
  {
    leds[i].nscale8(250);
  }
}
void CheckForKeypad() {
  key = customKeypad.getKey();
  //Serial.println("Checked");
  if (key && key != NO_KEY) {
    customKey = key;
        Serial.println(customKey);
  }
  switch (customKey) {
    case '1' :
      rainbow ();
      //Serial.println("1");
      break;
    case '2' :
      confetti ();
      //Serial.println("2");
      break;
    case '3' :
      sinelon ();
      //Serial.println("3");
      break;
    case '4' :
      juggle ();
      //Serial.println("4");
      break;
    case '5' :
      bpm ();
      //Serial.println("5");
      break;
    case '6' :
      if (backnforth)
        BackAndForth ();
      //Serial.println("6");
      break;
    case '7' :
      ColorPalette ();
      //Serial.println("7");
      break;
    case '8' :
      ColorTemp ();
      //Serial.println("8");
      break;
    case '9' :
      MiddleMeeting1 ();
      //Serial.println("9");
      break;
    case '0' :
      MiddleMeeting2 ();
      //Serial.println("0");
      break;
    case 'A':
      // Call the current pattern function once, updating the 'leds' array
      //gPatterns[gCurrentPatternNumber]();
      MusicVisualizer1();
      //Serial.println("A");
      break;
    case 'B':
      // Call the current pattern function once, updating the 'leds' array
      rainbowWithGlitter();
      //Serial.println("B");
      break;
//    case 'C':
//      // Call the current pattern function once, updating the 'leds' array
//      //Serial.println("C");
//      break;
//    case 'D':
//      // Call the current pattern function once, updating the 'leds' array
//      //Serial.println("D");
//      break;
//    case '*':
//      // Call the current pattern function once, updating the 'leds' array
//      //Serial.println("*");
//      break;
//    case '#':
//      // Call the current pattern function once, updating the 'leds' array
//      //Serial.println("#");
//      break;
    default:
      //Serial.println("default");
        customKey = hexaKeys[random(4)][random(4)];
      break;
  }
}
void AudioRainbow() {
  for (int i = NUM_LEDS - 1; i >= 0; i--) {
    if (i < react)
      leds[i] = Scroll((i * 256 / 50 + k) % 256);
    else
      leds[i] = CRGB(0, 0, 0);
  }
  FastLED.show();
}
CRGB Scroll(int pos) {
  CRGB color (0, 0, 0);
  if (pos < 85) {
    color.g = 0;
    color.r = ((float)pos / 85.0f) * 255.0f;
    color.b = 255 - color.r;
  } else if (pos < 170) {
    color.g = ((float)(pos - 85) / 85.0f) * 255.0f;
    color.r = 255 - color.g;
    color.b = 0;
  } else if (pos < 256) {
    color.b = ((float)(pos - 170) / 85.0f) * 255.0f;
    color.g = 255 - color.b;
    color.r = 1;
  }
  return color;
}

//Paletts
void ChangePalettePeriodically() {
  uint8_t secondHand = (millis() / 1000) % 60;
  static uint8_t lastSecond = 99;

  if ( lastSecond != secondHand) {
    lastSecond = secondHand;
    if ( secondHand ==  0)  {
      currentPalette = RainbowColors_p;
      currentBlending = LINEARBLEND;
    }
    if ( secondHand == 10)  {
      currentPalette = RainbowStripeColors_p;
      currentBlending = NOBLEND;
    }
    if ( secondHand == 15)  {
      currentPalette = RainbowStripeColors_p;
      currentBlending = LINEARBLEND;
    }
    if ( secondHand == 20)  {
      SetupPurpleAndGreenPalette();
      currentBlending = LINEARBLEND;
    }
    if ( secondHand == 25)  {
      SetupTotallyRandomPalette();
      currentBlending = LINEARBLEND;
    }
    if ( secondHand == 30)  {
      SetupBlackAndWhiteStripedPalette();
      currentBlending = NOBLEND;
    }
    if ( secondHand == 35)  {
      SetupBlackAndWhiteStripedPalette();
      currentBlending = LINEARBLEND;
    }
    if ( secondHand == 40)  {
      currentPalette = CloudColors_p;
      currentBlending = LINEARBLEND;
    }
    if ( secondHand == 45)  {
      currentPalette = PartyColors_p;
      currentBlending = LINEARBLEND;
    }
    if ( secondHand == 50)  {
      currentPalette = myRedWhiteBluePalette_p;
      currentBlending = NOBLEND;
    }
    if ( secondHand == 55)  {
      currentPalette = myRedWhiteBluePalette_p;
      currentBlending = LINEARBLEND;
    }
  }
}
void SetupTotallyRandomPalette() {
  for ( int i = 0; i < 16; i++) {
    currentPalette[i] = CHSV( random8(), 255, random8());
  }
}
void SetupBlackAndWhiteStripedPalette() {
  // 'black out' all 16 palette entries...
  fill_solid( currentPalette, 16, CRGB::Black);
  // and set every fourth one to white.
  currentPalette[0] = CRGB::White;
  currentPalette[4] = CRGB::White;
  currentPalette[8] = CRGB::White;
  currentPalette[12] = CRGB::White;

}
void SetupPurpleAndGreenPalette() {
  CRGB purple = CHSV( HUE_PURPLE, 255, 255);
  CRGB green  = CHSV( HUE_GREEN, 255, 255);
  CRGB black  = CRGB::Black;

  currentPalette = CRGBPalette16(
                     green,  green,  black,  black,
                     purple, purple, black,  black,
                     green,  green,  black,  black,
                     purple, purple, black,  black );
}
const TProgmemPalette16 myRedWhiteBluePalette_p PROGMEM = {
  CRGB::Red,
  CRGB::Gray, // 'white' is too bright compared to red and blue
  CRGB::Blue,
  CRGB::Black,

  CRGB::Red,
  CRGB::Gray,
  CRGB::Blue,
  CRGB::Black,

  CRGB::Red,
  CRGB::Red,
  CRGB::Gray,
  CRGB::Gray,
  CRGB::Blue,
  CRGB::Blue,
  CRGB::Black,
  CRGB::Black
};
void FillLEDsFromPaletteColors( uint8_t colorIndex) {
  uint8_t brightness = 255;
  for ( int i = 0; i < NUM_LEDS; i++) {
    leds[i] = ColorFromPalette( currentPalette, colorIndex, brightness, currentBlending);
    colorIndex += 3;
  }
}

//Patterns

void rainbowWithGlitter(){
  // built-in FastLED rainbow, plus some random sparkly glitter
  rainbow();
  addGlitter(80);
}
void addGlitter( fract8 chanceOfGlitter){
  if ( random8() < chanceOfGlitter) {
    leds[ random16(NUM_LEDS) ] += CRGB::White;
  }
}
void rainbow() {
  // FastLED's built-in rainbow generator
  fill_rainbow( leds, NUM_LEDS, gHue, 7);
}
void confetti() {
  // random colored speckles that blink in and fade smoothly
  fadeToBlackBy( leds, NUM_LEDS, 10);
  int pos = random16(NUM_LEDS);
  leds[pos] += CHSV( gHue + random8(64), 200, 255);
}
void sinelon() {
  // a colored dot sweeping back and forth, with fading trails
  fadeToBlackBy( leds, NUM_LEDS, 20);
  int pos = beatsin16( 13, 0, NUM_LEDS - 1 );
  leds[pos] += CHSV( gHue, 255, 192);
}
void bpm() {
  // colored stripes pulsing at a defined Beats-Per-Minute (BPM)
  uint8_t BeatsPerMinute = 62;
  CRGBPalette16 palette = PartyColors_p;
  uint8_t beat = beatsin8( BeatsPerMinute, 64, 255);
  for ( int i = 0; i < NUM_LEDS; i++) { //9948
    leds[i] = ColorFromPalette(palette, gHue + (i * 2), beat - gHue + (i * 10));
  }
}
void juggle() {
  // eight colored dots, weaving in and out of sync with each other
  fadeToBlackBy( leds, NUM_LEDS, 20);
  byte dothue = 0;
  for ( int i = 0; i < 8; i++) {
    leds[beatsin16( i + 7, 0, NUM_LEDS - 1 )] |= CHSV(dothue, 200, 255);
    dothue += 32;
  }
}
void BackAndForth() {
  backnforth = false;
  CheckForKeypad();
  static uint8_t hue = 0;
  // First slide the led in one direction
  for (int i = 0; i < NUM_LEDS; i++) {
    // Set the i'th led to red
    leds[i] = CHSV(hue++, 255, 255);
    // Show the leds
    FastLED.show();

    if (i % 2)
      CheckForKeypad();

    // now that we've shown the leds, reset the i'th led to black
    // leds[i] = CRGB::Black;
    //fadeToBlackBy(leds, NUM_LEDS, 40);
    fadeall();
    // Wait a little bit before we loop around and do it again
  }
  // Now go in the other direction.
  for (int i = (NUM_LEDS) - 1; i >= 0; i--) {
    // Set the i'th led to red
    leds[i] = CHSV(hue++, 255, 255);
    // Show the leds
    FastLED.show();


    if (i % 2)
      CheckForKeypad();

    // now that we've shown the leds, reset the i'th led to black
    // leds[i] = CRGB::Black;
    //fadeToBlackBy(leds, NUM_LEDS, 40);
    fadeall();
    // Wait a little bit before we loop around and do it again
  }
  backnforth = true;
}
void ColorPalette() {
  ChangePalettePeriodically();

  static uint8_t startIndex = 0;
  startIndex = startIndex + 1; /* motion speed */

  FillLEDsFromPaletteColors( startIndex);
}
void ColorTemp() {
  // draw a generic, no-name rainbow
  static uint8_t starthue = 0;
  fill_rainbow( leds + 5, NUM_LEDS - 5, --starthue, 20);

  // Choose which 'color temperature' profile to enable.
  uint8_t secs = (millis() / 1000) % (DISPLAYTIME * 2);
  if ( secs < DISPLAYTIME) {
    FastLED.setTemperature( TEMPERATURE_1 ); // first temperature
    leds[0] = TEMPERATURE_1; // show indicator pixel
  } else {
    FastLED.setTemperature( TEMPERATURE_2 ); // second temperature
    leds[0] = TEMPERATURE_2; // show indicator pixel
  }
}
void MiddleMeeting1() {
  for (int i = 0; i <= MIDDLE_LEDS / 2; i++) {
    // fade everything out
    //leds.fadeToBlackBy(40);

    // let's set an led value
    leds[i] = CHSV(gHue++, 255, 255);
    leds[MIDDLE_LEDS - i]  = CHSV(gHue++, 255, 255);

    // now, let's first 20 leds to the top 20 leds,
    //leds(NUM_LEDS/2,NUM_LEDS-1) = leds(NUM_LEDS/2 - 1 ,0);
    //FastLED.delay(3000 / FRAMES_PER_SECOND);

    FastLED.show();
  }
}
void MiddleMeeting2() {
  for (int i = 0; i <= MIDDLE_LEDS / 2; i++) {
    // fade everything out
    fadeToBlackBy(leds, NUM_LEDS, 40);

    // let's set an led value
    leds[i] = CHSV(gHue++, 255, 255);
    leds[MIDDLE_LEDS - i]  = CHSV(gHue++, 255, 255);

    // now, let's first 20 leds to the top 20 leds,
    //leds(NUM_LEDS/2,NUM_LEDS-1) = leds(NUM_LEDS/2 - 1 ,0);
    //FastLED.delay(3000 / FRAMES_PER_SECOND);

    FastLED.show();
  }
}
void MusicVisualizer1() {

  int audio_input = analogRead(audio); // ADD x2 HERE FOR MORE SENSITIVITY

  if (audio_input > 0)
  {
    pre_react = ((long)NUM_LEDS * (long)audio_input) / 1023L; // TRANSLATE AUDIO LEVEL TO NUMBER OF LEDs

    if (pre_react > react) // ONLY ADJUST LEVEL OF LED IF LEVEL HIGHER THAN CURRENT LEVEL
      react = pre_react;

    //Serial.print(audio_input);
    //Serial.print(" -> ");
    //Serial.println(pre_react);
  }

  AudioRainbow(); // APPLY COLOR

  k = k - wheel_speed; // SPEED OF COLOR WHEEL
  if (k < 0) // RESET COLOR WHEEL
    k = 255;

  // REMOVE LEDs
  decay_check++;
  if (decay_check > decay)
  {
    decay_check = 0;
    if (react > 0)
      react--;
  }
  //delay(1);
}
