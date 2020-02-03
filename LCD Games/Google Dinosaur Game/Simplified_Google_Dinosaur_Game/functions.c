// Functions for main.cpp

int read_LCD_buttons() {
  adc_key_in = analogRead(0);

  if (adc_key_in > 1000) return btnNONE;

  if (adc_key_in < 10)  return btnRIGHT;
  if (adc_key_in < 110)  return btnUP;
  if (adc_key_in < 300)  return btnDOWN;
  if (adc_key_in < 450)  return btnLEFT;
  if (adc_key_in < 700)  return btnSELECT;

  return btnNONE;
}

void updateLcd() {
  for (int i = 0; i <= 15; i++) {
    lcd.setCursor(i, 1);
    lcd.write(runnerArea[i]);
  }
  lcd.setCursor(1, 0);
  lcd.write(jump);
}

void drawBarrier() {
  runnerArea[0] = 3;
  runnerArea[15] = 3;
}

void printScore() {
  lcd.setCursor(4, 0);
  lcd.print("Score: ");
  lcd.setCursor(11, 0);
  lcd.print(score);
}

void showSplashScreen(int delayTime, boolean wait_for_start) {
  lcd.home();
  lcd.print("Chrome Dino Game");
  drawSplashGraphics();
  delay(delayTime);
  if (wait_for_start) {
    while (read_LCD_buttons() != btnSELECT) {
      checkForEEPROMUserInitErase();
    }
  }
  lcd.clear();
}

boolean checkForEEPROMUserInitErase() {
  if (read_LCD_buttons() == btnDOWN) {
    lcd.clear();
    lcd.home();
    lcd.print("Enter Executive");
    lcd.setCursor(0, 1);
    lcd.print("Code: ");
    if (EnterPassword() == 0) {
      lcd.clear();
      lcd.home();
      lcd.print("Chrome Dino Game");
      drawSplashGraphics();
      return 0;
    }
    lcd.home();
    lcd.print("Clearing EEPROM");
    EEPROMWriteInt(0, 0);
    delay(250);
    lcd.home();
    lcd.print("               ");
    lcd.home();
    lcd.print("Done!");
    digitalWrite(13, !digitalRead(13));
    delay(100);
    digitalWrite(13, !digitalRead(13));
    delay(400);
    lcd.setCursor(0, 1);
    lcd.print("                ");
    lcd.home();
    lcd.print("Chrome Dino Game");
    drawSplashGraphics();
  }
  return 1;
}

bool leave = 0;
int code = 0;

boolean EnterPassword() {
  lcd.setCursor(0, 1);
  lcd.print("Code: ");
  while (leave == 0) {
    lcd.setCursor(6, 1);
    lcd.print("    ");
    lcd.setCursor(6, 1);
    lcd.print(code);
    if (read_LCD_buttons() == btnUP) {
      code++;
      delay(50);
    } else if (read_LCD_buttons() == btnDOWN) {
      code--;
      delay(50);
    }
    if (read_LCD_buttons() == btnSELECT) {
      if (code == correct_code) {
        leave = 1;
      } else {
        wrong();
      }
    }
    delay(50);
  }
  delay(250);
  lcd.home();
  lcd.clear();
  lcd.print("Access granted!");
  delay(500);
  lcd.clear();
  return 1;
}

void wrong() {
  lcd.setCursor(0, 1);
  lcd.print("Incorrect!");
  code = 0;
  delay(250);
  lcd.setCursor(0, 1);
  lcd.print("Code: ");
}

void drawRandChar() {
  lcd.setCursor(random(3, 15), 1);
  lcd.write(int(random(1, 3)));
}

void drawSplashGraphics() {
  lcd.setCursor(0, 1);
  lcd.write(int(3));
  lcd.setCursor(15, 1);
  lcd.write(int(3));
  lcd.setCursor(1, 1);
  lcd.write(int(0));
  drawRandChar();
  drawRandChar();
  drawRandChar();
}

void showCrashScreen() {
  lcd.setCursor(4, 1);
  lcd.print("Game Over!");
  delay(2500);
  lcd.setCursor(4, 1);
  lcd.print("Best: ");
  lcd.setCursor(10, 1);
  lcd.print("      ");
  lcd.setCursor(10, 1);
  if (EEPROMReadInt(0) <= score) {
    EEPROMWriteInt(0, score);
  }
  lcd.print(EEPROMReadInt(0));
  while (true) {
    digitalWrite(13, !digitalRead(13));
    delay(500);
  }
}

void EEPROMWriteInt(int address, int value)
{
  int two = (value & 0xFF);
  int one = ((value >> 8) & 0xFF);

  EEPROM.update(address, two);
  EEPROM.update(address + 1, one);
}

int EEPROMReadInt(int address)
{
  long two = EEPROM.read(address);
  long one = EEPROM.read(address + 1);

  return ((two << 0) & 0xFFFFFF) + ((one << 8) & 0xFFFFFFFF);
}
