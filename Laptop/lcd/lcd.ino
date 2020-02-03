#include <LiquidCrystal.h>
LiquidCrystal lcd(8, 9, 4, 5, 6, 7);

char text[] = "Code School Iasi";

void setup() {
  lcd.begin(16, 2);
}

void loop() {

  lcd.setCursor(0, 0);
  lcd.print(strlen(text));
  delay(1000);
  lcd.clear();

  for (int j = 0; j < 5; j++)
  {
    lcd.setCursor(0, 0);
    for (int i = 0; i < strlen(text); i++) {
      lcd.print(text[i]);
      delay(100);
    }
    lcd.clear();
    lcd.setCursor(0, 0);
    for (int i = strlen(text)-1; i >0; i--) {
      lcd.print(text[i]);
      delay(100);
    }
    lcd.clear();
  }
}
