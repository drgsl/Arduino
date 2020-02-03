#include <LiquidCrystal.h>
#include <EEPROM.h>
LiquidCrystal lcd(8, 9, 4, 5, 6, 7);

#include "bitmaps.h"


int adc_key_in  = 0;

#define btnRIGHT  0
#define btnUP     1
#define btnDOWN   2
#define btnLEFT   3
#define btnSELECT 4
#define btnNONE   5

int runnerArea[16] {32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32};
int jump = 32;

int score = 0;
bool freeze_score = 0;

int correct_code = 123;

unsigned long previousMillis = 0;
unsigned long previousMillisLED = 0;
unsigned long jumpTime = 0;
const int jumpLength = 500;

#define checkSafe runnerArea[1] == 32 || runnerArea[1] == 0

const int chance_of_ob = 15;
int speedOfScroller = 300;

void setup() {
  lcd.begin(16, 2);
  Serial.begin(9600);

  lcd.createChar(0, dino);
  lcd.createChar(1, cacti);
  lcd.createChar(2, bird);
  lcd.createChar(3, block);
  pinMode(A0, INPUT);
  pinMode(A1, INPUT);
  pinMode(13, OUTPUT);
  randomSeed(A1);
  lcd.clear();
  showSplashScreen(1000, true);
}

void loop() {
  unsigned long currentMillis = millis();
  unsigned long currentMillisOb = millis();
  if (currentMillisOb - previousMillis >= speedOfScroller) {
    previousMillis = currentMillisOb;
    if (random(chance_of_ob) == 0) {
      runnerArea[15] = 1;
    } else if (random(chance_of_ob) == 1) {
      runnerArea[15] = 2;
    } else {
      runnerArea[15] = 32;
    }
    for (int i = 0; i <= 15; i++) {
      runnerArea[i] = runnerArea[i + 1];
    }
    if (freeze_score == 0) {
      score++;
    }
  }
  drawBarrier();

  if (read_LCD_buttons() == btnSELECT) {
    // runnerArea[1] = 32;
    if (runnerArea[1] != 32 && (runnerArea[1] != 1 || runnerArea[1] != 2)) {
      runnerArea[1] = 32;
    }
    jump = 0;
    freeze_score = 1;
    jumpTime = millis();
  }
  if (millis() - jumpTime >= jumpLength) {
    if (checkSafe) {
      runnerArea[1] = 0;
      jump = 32;
      freeze_score = 0;
    } else {
      showCrashScreen();
    }
  }
  updateLcd();
  printScore();

  if (millis() - previousMillisLED >= 500) {
    previousMillisLED = currentMillis;
    digitalWrite(13, !digitalRead(13));
  }
}
