
// include the library code:
#include <LiquidCrystal.h>

// initialize the library by associating any needed LCD interface pin
// with the arduino pin number it is connected to
const int rs = 7, en = 6, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

const int SW_pin = 8; // digital pin connected to switch output
const int X_pin = 0; // analog pin connected to X output
const int Y_pin = 1; // analog pin connected to Y output

int i, j;

int randomi, randomj;

void setup() {
  // initialize LCD and set up the number of columns and rows:
  lcd.begin(16, 2);
  
  pinMode(SW_pin, INPUT);
  digitalWrite(SW_pin, HIGH);

  Serial.begin(9600);
  
}

void loop() {

  //showCoord();
  MoveHeart();
}

void showCoord(){
  
  lcd.setCursor(0, 0);
  lcd.print("X-axis: ");
  lcd.print(analogRead(X_pin));
  lcd.write(digitalRead(SW_pin));
  lcd.setCursor(0, 1);
  lcd.print("Y-axis: ");
  lcd.print(analogRead(Y_pin));
  delay(500);
  lcd.clear();
}

void MoveHeart(){

int x = analogRead(X_pin);
int y = analogRead(Y_pin);
int delaytime = 50;
 
  if(x > 600){
    i++;
    delay(delaytime);
  }else if(x < 500){
    i--;
    delay(delaytime);
  }

  
  if(y > 600){
    j--;   
    delay(delaytime);

  }else if(y < 500){
    j++;  
    delay(delaytime);
  }

  if(i < 0){
    i=0;
  }
  if(j < 0){
    j = 0;
  }

  if(i > 15){
    i=15;
  }
  if(j > 1){
    j= 1;
  }

  lcd.clear();
  lcd.setCursor(i, j);
  //Serial.println(i);
  //Serial.println(j);
  lcd.print("O"); // when calling lcd.write() '0' must be cast as a byte    
}

void spawnApple(){
  lcd.setCursor(randomi, randomj);
    lcd.print("W");
  if(randomi == i && randomj == j){
  randomi +=1;
  randomj = 0;
    Serial.println("Touched");
  }

}
