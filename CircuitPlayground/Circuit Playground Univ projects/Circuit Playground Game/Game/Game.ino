#include <Adafruit_CircuitPlayground.h>

bool rightButtonPressed;

int i = 4;

bool right;
bool left;

bool gameover = false;
int duration = 50;

#define NOTE_G5  784


void setup() {
  // put your setup code here, to run once

  CircuitPlayground.begin();
  CircuitPlayground.clearPixels();
}

void loop() {
  switch(i){
  case 0:
  Player1Win();
  break;

  case 9:
  Player2Win();
  break;
}
if(!gameover){
    CircuitPlayground.setPixelColor(i, 255, 0, 165);

    if(right != CircuitPlayground.rightButton()){
      resetLigth();
      i++;
      delay(150);
      right = CircuitPlayground.rightButton();
    }

        if(left != CircuitPlayground.leftButton()){
          resetLigth();
      i--;
            delay(150);
            left = CircuitPlayground.leftButton();
        }
}
}

void Player1Win(){
              CircuitPlayground.playTone(NOTE_G5, duration);
              
  for(int j =5; j<=9; j++){
      CircuitPlayground.setPixelColor(j, 255, 0, 0);
        delay(100);
  }
    for(int j =9; j>=5; j--){
            CircuitPlayground.setPixelColor(j, 0, 0, 0);
                delay(100);
  }

          CircuitPlayground.playTone(NOTE_G5, duration);

    for(int j = 4; j>=0; j--){
      CircuitPlayground.setPixelColor(j, 0, 255, 0);
          delay(100);
  }
    for(int j =0; j<=4; j++){
            CircuitPlayground.setPixelColor(j, 0, 0, 0);
                delay(100);
  }

  gameover = true;  
}

void Player2Win(){
              CircuitPlayground.playTone(NOTE_G5, duration);
  for(int j =5; j<=9; j++){
      CircuitPlayground.setPixelColor(j, 0, 255, 0);
        delay(100);
  }
    for(int j =9; j>=5; j--){
            CircuitPlayground.setPixelColor(j, 0, 0, 0);
                delay(100);
  }

          CircuitPlayground.playTone(NOTE_G5, duration);

    for(int j = 4; j>=0; j--){
      CircuitPlayground.setPixelColor(j, 255, 0, 0);
          delay(100);
  }
    for(int j =0; j<=4; j++){
            CircuitPlayground.setPixelColor(j, 0, 0, 0);
                delay(100);
  }

  gameover = true;  
}
void resetLigth(){
  if(!gameover)
          for(int j = 0; j<= 9; j++)
        CircuitPlayground.setPixelColor(j, 0, 0, 0);
}
