#include <IRremote.h>

byte latchPin = 5;
byte clockPin = 6;
byte dataPin = 4;

bool cycle = true;

const byte RECV_PIN = 7;
IRrecv irrecv(RECV_PIN);
decode_results results;
byte key_value = 0; //unsigned long key_value = 0;

byte leds = 0;

int ledarray[5][4] = { {0, 1, 2 , 3}, { -8, -7, -6, -5}, { -4, -3, -2, -1}, {8, 9, 10, 11}, {12, 14, 15, 16}};
//= { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19};

bool LedState[5][4];
bool Finished = false;

byte AnimSpeed = 100;
byte SpeedIncrement = 20;

byte AnimMax = 40;

char buf[25];

String Sentences[] = {"Hello, I'm a matrix", "", "", "", "", "", "", "", ""};

byte AnimIndex = 40;
byte LastAnimIndex;

byte DurationIndex = 0;
byte TotalDuration = 100;

struct RainDrop {
  float spd = 0;
  byte x = 0;
  byte y = 0;
};

RainDrop rain[5];


void setup() {
  randomSeed(analogRead(A4));
  AnimIndex = random(AnimMax);
  LastAnimIndex = AnimIndex;
  //Serial.begin(9600);
  irrecv.enableIRIn();
  irrecv.blink13(true);

  pinMode(latchPin, OUTPUT);
  pinMode(dataPin, OUTPUT);
  pinMode(clockPin, OUTPUT);

  //StartMatrix();
  //CheckPos();
  for (int i = 0; i <= 16; i ++) {
    if (i == 7)
      continue;
    pinMode(i, OUTPUT);
  }
  leds = 0;
  updateShiftRegister();
  //OutputMatrix();
  //StartRgb();

  Test(5);

  for (int i = 0; i <= 3; i ++) {
    rain[i].x = i;
  }
  
}

void loop() {
  if (cycle) {
    switch (AnimIndex) {
      case 0:
        Heart1(AnimSpeed);
        break;
      case 1:
        Heart2(AnimSpeed);
        break;
      case 2:
        Snake1(AnimSpeed);
        break;
      case 3:
        Snake2(AnimSpeed);
        break;
      case 4:
        Snake3(AnimSpeed);
        break;
      case 5:
        Snake4(AnimSpeed);
        break;
      case 6:
        Snake5(AnimSpeed);
        break;
      case 7:
        Snake6(AnimSpeed);
        break;
      case 8:
        Snake7(AnimSpeed);
        break;
      case 9:
        Snake8(AnimSpeed);
        break;

      case 10:
        StartRgb();
        Diagonals0(AnimSpeed);
        break;
      case 11:
        StartRgb();
        Diagonals1(AnimSpeed);
        break;
      case 12:
        StartRgb();
        Diagonals2(AnimSpeed);
        Diagonals3(AnimSpeed);
        ChooseRandomClean(AnimSpeed);
        break;
      case 13:
        StartRgb();
        Diagonals4(AnimSpeed);
        Diagonals5(AnimSpeed);
        DifDiag(0, true, 0);
        ChooseRandomClean(AnimSpeed);
        break;
      case 14:
        StartRgb();
        Diagonals4(AnimSpeed);
        DifDiag(0, true, 0);
        delay(AnimSpeed);
        Diagonals6(AnimSpeed);
        ChooseRandomClean(AnimSpeed);
        break;
      case 15:
        StartRgb();
        Diagonals8(AnimSpeed);
        delay(AnimSpeed);
        DifDiag(0, true, 0);
        delay(AnimSpeed);
        Diagonals7(AnimSpeed);
        ChooseRandomClean(AnimSpeed);
        break;
      case 16:
        while (DurationIndex != TotalDuration)
        {
          Rain(AnimSpeed);
          DurationIndex++;
        }
        DurationIndex = 0;
        break;

      //      case 17:
      //        CreepyFace2(AnimSpeed / 4);
      //        break;
      //
      //      case 18:
      //        CreepyFace2Dance(AnimSpeed / 4);
      //        break;

      //      case 19:
      //        Heart3(AnimSpeed);
      //        break;
      case 20:
        Heart4(AnimSpeed);
        break;
      case 21:
        Heart5(AnimSpeed);
        break;

      case 22:
        Spiral1(AnimSpeed);
        break;
      case 23:
        Spiral2(AnimSpeed);
        break;
      case 24:
        Spiral3(AnimSpeed);
        break;
      case 25:
        Spiral4(AnimSpeed);
        break;
      case 26:
        Spiral5(AnimSpeed);
        break;
      case 27:
        Spiral6(AnimSpeed);
        break;
      case 28:
        Spiral7(AnimSpeed);
        break;
      case 29:
        Spiral8(AnimSpeed);
        break;
      case 30:
        Spiral9(AnimSpeed);
        break;
      case 31:
        Spiral10(AnimSpeed);
        break;
      case 32:
        Spiral11(AnimSpeed);
        break;
      case 33:
        Spiral12(AnimSpeed);
        break;
      case 34:
        Spiral13(AnimSpeed);
        break;
      case 35:
        Spiral14(AnimSpeed);
        break;
      case 36:
        Spiral15(AnimSpeed);
        break;
      default:
        AnimIndex = random(AnimMax);
        break;
    }
    CleanScreen();
    AnimIndex = random(AnimMax);
    while (LastAnimIndex == AnimIndex)
      AnimIndex = random(AnimMax);
    LastAnimIndex = AnimIndex;
  }
    ReadIR();
}

//Rain
void Rain(int DelaySpeed) {
  switch (random(4)) {

    case 0:
      UpdateRain(rain[0]);
      break;
    case 1:
      UpdateRain(rain[1]);
      break;
    case 2:
      UpdateRain(rain[2]);
      break;
    case 3:
      UpdateRain(rain[3]);
      break;
  }
  delay(DelaySpeed / 10);
}
void UpdateRain(RainDrop & raindrop) {
  RainDrop last = raindrop;
  raindrop.spd = 1;//random(0, );
  raindrop.y += 1;
  if (raindrop.y > 4) {
    raindrop.spd = 0;
    raindrop.y = 0;
  }
  ShowRain(raindrop);
  ClearRain(last);
}
void ShowRain(RainDrop & raindrop) {
  TurnOn(ledarray[raindrop.y][raindrop.x]);
}
void ClearRain(RainDrop & raindrop) {
  TurnOff(ledarray[raindrop.y][raindrop.x]);
}

void UltraSmartRandomWrite(int DelaySpeed){
  
int x = random(0);
int y  = random(0);

while(1){
  if(random(2)){ 
    if( x = 3 ) x--; 
    if(x = 1) x++;
      else   
        if(random(2)) x++;
        else x--;
  }
  else 
    if( y = 4 ) y--; 
    if(y = 1) y++;
      else   
        if(random(2)) y++;
        else y--;
  
  delay(DelaySpeed);
    TurnOn(ledarray[y][x]);
}
}

void SmartRandomWrite(int DelaySpeed){
  int x = random(5);
  int y = random(4);

  Finished = true;
  
  if(!LedState[x][y]){
    TurnOn(ledarray[x][y]);
    delay(DelaySpeed);
    LedState[x][y] = true;
  }

 for (int i = 0; i <= 4; i++) {
    for (int j = 0; j <= 3; j ++) {
  if(!LedState[i][j]){
      Finished = false;
  }
    }
    }
  if(Finished)
  SmartRandomClean(DelaySpeed);
  else
  SmartRandomWrite(DelaySpeed);
}
void SmartRandomClean(int DelaySpeed){
  int x = random(5);
  int y = random(4);

  Finished = true;
  
  if(LedState[x][y]){
    TurnOff(ledarray[x][y]);
    delay(DelaySpeed);
    LedState[x][y] = false;
  }

 for (int i = 0; i <= 4; i++) {
    for (int j = 0; j <= 3; j ++) {
  if(LedState[i][j]){
      Finished = false;
  }
    }
    }
  if(Finished)
  SmartRandomWrite(DelaySpeed);
  else
  SmartRandomClean(DelaySpeed);
}

void CompleteRandom() {
  if (random(2) == 1)
    TurnOn(ledarray[random(5)][random(4)]);
  else
    TurnOff(ledarray[random(5)][random(4)]);
  delay(AnimSpeed / 10);
  CompleteRandom();
}

//Diagonals
void Diagonals0(int DelaySpeed) {

  //CleanScreen();
  for (int i = 0; i <= 3; i ++) {
    delay(DelaySpeed);
    DifDiag(i, true, 0);
  }
  ChooseRandomClean(DelaySpeed);
}
void Diagonals0Clean(int DelaySpeed) {

  for (int i = 0; i <= 3; i ++) {
    delay(DelaySpeed);
    DifDiag(i, false, 0);
  }
}
void Diagonals1(int DelaySpeed) {

  //CleanScreen();

  for (int i = 3; i >= 0; i --) {
    delay(DelaySpeed);
    DifDiag(i, true, 0);
  }
  ChooseRandomClean(DelaySpeed);
}
void Diagonals1Clean(int DelaySpeed) {

  FillSquare();

  for (int i = 3; i >= 0; i --) {
    delay(DelaySpeed);
    DifDiag(i, false, 0);
  }
}
void Diagonals2(int DelaySpeed) {

  //CleanScreen();

  for (int i = 3; i >= 0; i -= 2) {
    delay(DelaySpeed);
    DifDiag(i, true, 0);
  }
}
void Diagonals2Clean(int DelaySpeed) {

  for (int i = 1; i <= 3; i += 2) {
    delay(DelaySpeed);
    DifDiag(i, false, 0);
  }
}
void Diagonals3(int DelaySpeed) {

  for (int i = 2; i >= 0; i -= 2) {
    delay(DelaySpeed);
    DifDiag(i, true, 0);
  }
}
void Diagonals3Clean(int DelaySpeed) {

  for (int i = 0; i <= 2; i += 2) {
    delay(DelaySpeed);
    DifDiag(i, false, 0);
  }
}
void Diagonals4(int DelaySpeed) {

  //CleanScreen();

  for (int i = 3; i >= 1; i --) {
    DifDiag(i, true, 1);
    delay(DelaySpeed);
  }
}
void Diagonals4Clean(int DelaySpeed) {

  for (int i = 3; i >= 1; i --) {
    delay(DelaySpeed);
    DifDiag(i, false, 1);
  }
}
void Diagonals5(int DelaySpeed) {

  for (int i = 3; i >= 1; i --) {
    DifDiag(i, true, 2);
    delay(DelaySpeed);
  }
}
void Diagonals5Clean(int DelaySpeed) {

  for (int i = 3; i >= 1; i --) {
    delay(DelaySpeed);
    DifDiag(i, false, 2);
  }
}
void Diagonals6(int DelaySpeed) {

  for (int i = 1; i <= 3; i ++) {
    DifDiag(i, true, 2);
    delay(DelaySpeed);
  }
}
void Diagonals6Clean(int DelaySpeed) {

  for (int i = 3; i >= 1; i --) {
    delay(DelaySpeed);
    DifDiag(i, false, 2);
  }
}
void Diagonals7(int DelaySpeed) {

  for (int i = 1; i <= 3; i ++) {
    DifDiag(i, true, 1);
    delay(DelaySpeed);
  }
}
void Diagonals7Clean(int DelaySpeed) {

  for (int i = 1; i <= 3; i ++) {
    delay(DelaySpeed);
    DifDiag(i, false, 1);
  }
}
void Diagonals8(int DelaySpeed) {

  for (int i = 3; i >= 1; i --) {
    delay(DelaySpeed);
    DifDiag(i, true, 2);
  }
}
void SumDiag(int sum, bool isON) {
  for (int i = 0; i <= 3; i++) {
    for (int j = 0; j <= 3; j ++) {
      if (i + j == sum) {
        if (isON)
          TurnOn(ledarray[i][j]);
        else
          TurnOff(ledarray[i][j]);
      }
    }
  }
}
void DifDiag(int diff, bool isON, int part) {
  switch (part) {
    case 0: // All
      for (int i = 0; i <= 3; i++) {
        for (int j = 0; j <= 3; j ++) {
          if (abs(i - j) == diff) {
            if (isON)
              TurnOn(ledarray[i][j]);
            else
              TurnOff(ledarray[i][j]);
          }
        }
      }
      break;
    case 1: //Up Half
      for (int i = 0; i <= 3; i++) {
        for (int j = 0; j <= 3; j ++) {
          if (j - i == diff) {
            if (isON)
              TurnOn(ledarray[i][j]);
            else
              TurnOff(ledarray[i][j]);
          }
        }
      }
      break;
    case 2: //Down Half
      for (int i = 0; i <= 3; i++) {
        for (int j = 0; j <= 3; j ++) {
          if (i - j == diff) {
            if (isON)
              TurnOn(ledarray[i][j]);
            else
              TurnOff(ledarray[i][j]);
          }
        }
      }
      break;

  }

}

//Stuff
void ChooseRandomClean(int DelaySpeed) {
  switch (random(30)) {
    case 0:
      Spiral1Clean(DelaySpeed);
      break;
    case 1:
      Spiral2Clean(DelaySpeed);
      break;
    case 2:
      Spiral3Clean(DelaySpeed);
      break;
    case 3:
      Spiral4Clean(DelaySpeed);
      break;
    case 4:
      Spiral5Clean(DelaySpeed);
      break;
    case 5:
      Spiral6Clean(DelaySpeed);
      break;
    case 6:
      Spiral7Clean(DelaySpeed);
      break;
    case 7:
      Spiral8Clean(DelaySpeed);
      break;
    case 8:
      Spiral9Clean(DelaySpeed);
      break;
    case 9:
      Spiral10Clean(DelaySpeed);
      break;
    case 10:
      Spiral11Clean(DelaySpeed);
      break;
    case 11:
      Spiral12Clean(DelaySpeed);
      break;
    case 12:
      Spiral13Clean(DelaySpeed);
      break;
    case 13:
      Spiral14Clean(DelaySpeed);
      break;
    case 14:
      Spiral15Clean(DelaySpeed);
      break;
    case 15:
      Snake1Clean(DelaySpeed);
      break;
    case 16:
      Snake2Clean(DelaySpeed);
      break;
    case 17:
      Snake3Clean(DelaySpeed);
      break;
    case 18:
      Snake4Clean(DelaySpeed);
      break;
    case 19:
      Snake5Clean(DelaySpeed);
      break;
    case 20:
      Snake6Clean(DelaySpeed);
      break;
    case 21:
      Snake7Clean(DelaySpeed);
      break;
    case 22:
      Snake8Clean(DelaySpeed);
      break;
    case 23:
      Spiral9Clean(DelaySpeed);
      break;
    case 24:
      Diagonals0Clean(DelaySpeed);
      break;
    case 25:
      Diagonals1Clean(DelaySpeed);
      break;
    case 26:
      Diagonals2Clean(AnimSpeed);
      Diagonals3Clean(AnimSpeed);
      break;
    case 27:
      Diagonals4Clean(AnimSpeed);
      Diagonals5Clean(AnimSpeed);
      delay(AnimSpeed);
      DifDiag(0, false, 0);
      break;
    case 28:
      Diagonals6Clean(AnimSpeed);
      delay(AnimSpeed);
      DifDiag(0, false, 0);
      Diagonals7Clean(AnimSpeed);
      break;
    case 29:
      Diagonals4Clean(AnimSpeed);
      Diagonals0Clean(AnimSpeed);
      break;
  }
}
void(* resetFunc) (void) = 0;//declare reset function at address 0
void ReadIR() {

  if (irrecv.decode(&results)) {
    if (results.value == 0XFFFFFFFF)
      results.value = key_value;
    switch (results.value) {
      case 0xFFA25D:
        //Serial.println("OFF");
        resetFunc();
        break;
      case 0xFF629D:
        //Serial.println("Vol + ");
        break;
      case 0xFFE21D:
        //Serial.println("Func / Stop");
        UltraSmartRandomWrite(AnimSpeed);
        break;
      case 0xFF22DD:
        //Serial.println("|<<");
        break;
      case 0xFF02FD:
        //Serial.println(">|");
        cycle = true;
        break ;
      case 0xFFC23D:
        //Serial.println(">>|");
        break ;
      case 0xFFE01F:
        //Serial.println(" - ");
        if (AnimSpeed > SpeedIncrement)
          AnimSpeed -= SpeedIncrement;
        //CheckSpeed(AnimSpeed);
        break ;
      case 0xFFA857:
        //Serial.println("Vol - ");
        break ;
      case 0xFF906F:
        //Serial.println(" + ");
        if (AnimSpeed < 100 * SpeedIncrement)
          AnimSpeed += SpeedIncrement;
        //CheckSpeed(AnimSpeed);
        break ;
      case 0xFF9867:
        //Serial.println(" EQ ");
        CompleteRandom();
        //        while (1)
        //          CreepyFace(AnimSpeed);
        break ;
      case 0xFFB04F:
        //Serial.println(" St / Rept ");
        SmartRandomWrite(AnimSpeed);
        break ;
      case 0xFF6897:
        //Serial.println("0");
        WriteSentence(Sentences[0]);
      case 0xFF30CF:
        //Serial.println("1");
        WriteSentence(Sentences[1]);
        break ;
      case 0xFF18E7:
        //Serial.println("2");
        WriteSentence(Sentences[2]);
        CleanScreen();
        break ;
      case 0xFF7A85:
        //Serial.println("3");
        WriteSentence(Sentences[3]);
        break;
      case 0xFF10EF:
        //Serial.println("4");
        WriteSentence(Sentences[4]);
        break ;
      case 0xFF38C7:
        //Serial.println("5");
        while (1)
          WriteSentence(Sentences[5]);
        break ;
      case 0xFF5AA5:
        //Serial.println("6");
        WriteSentence(Sentences[6]);
        break ;
      case 0xFF42BD:
        //Serial.println("7");
        WriteSentence(Sentences[7]);
        break ;
      case 0xFF4AB5:
        //Serial.println("8");
        WriteSentence(Sentences[8]);
        break ;
//      case 0xFF52AD:
//        //Serial.println("9");
//        while (1) {
//          for (char i = ' '; i <= '~'; i++) {
//            ShowSymbol(i);
//            delay(750);
//          }
//        }
//        break ;
    }
    key_value = results.value;
    irrecv.resume();
  }
}
void StartRgb() {
  for (int j  = 0; j <= 3; j ++) {
    TurnOn(ledarray[4][j]);
  }
}
void CleanScreen() {
  for (int i = 0; i <= 4; i++) {
    for (int j = 0; j <= 3; j ++) {
      TurnOff(ledarray[i][j]);
    }
  }
}
void FillScreen() {
  for (int i = 0; i <= 4; i++) {
    for (int j = 0; j <= 3; j ++) {
      TurnOn(ledarray[i][j]);
    }
  }
}
void FillSquare() {
  for (int i = 0; i <= 3; i++) {
    for (int j = 0; j <= 3; j ++) {
      TurnOn(ledarray[i][j]);
    }
  }
}
void Test(int DelaySpeed) {
  for (int i = 0; i <= 4; i++) {
    for (int j = 0; j <= 3; j ++) {
      TurnOn(ledarray[i][j]);
      delay(DelaySpeed);
      TurnOff(ledarray[i][j]);
    }
  }
}
void updateShiftRegister() {
  digitalWrite(latchPin, LOW);
  shiftOut(dataPin, clockPin, LSBFIRST, leds);
  digitalWrite(latchPin, HIGH);
}

void TurnOn(int n) {
  CheckForChanges();
  if (n < 0) {
    int index = ((-1 * n) - 1);
    bitSet(leds, index);
    updateShiftRegister();
  }
  else {
    digitalWrite(n, HIGH);
  }
}
void CheckForChanges() {
  if (irrecv.decode(&results)) {
    if (results.value == 0XFFFFFFFF)
      results.value = key_value;
    switch (results.value) {
      case 0xFFA25D:
        //Serial.println("OFF");
        resetFunc();
        break;
      case 0xFFE21D:
        //Serial.println("Func / Stop");
        cycle = false;
        break;
      case 0xFFE01F:
        //Serial.println(" - ");
        if (AnimSpeed > SpeedIncrement)
          AnimSpeed -= SpeedIncrement;
        break ;
      case 0xFF906F:
        //Serial.println(" + ");
        if (AnimSpeed < 20 * SpeedIncrement)
          AnimSpeed += SpeedIncrement;
        break ;
    }
    key_value = results.value;
    irrecv.resume();
  }
}
void TurnOff(int n) {
  CheckForChanges();
  if (n < 0) {
    int index = ((-1 * n) - 1);
    //Serial.println(index);
    bitClear(leds, index);
    updateShiftRegister();
  } else {
    digitalWrite(n, LOW);
  }
}
/*
  void StartMatrix() {
  Serial.println("Initializing Matrix... ");
  for (int i = 0; i <= 4; i++) {
    for (int j = 0; j <= 3; j ++) {
      ledarray[i][j] = z;
      if (ledarray[i][j] != 7)
        pinMode(ledarray[i][j], OUTPUT);
      z++;
    }
  }
  Serial.println("Finished initializing Matrix");
  }
  void CheckPos() {
  for (int i = 0; i <= 4; i++) {
    for (int j = 0; j <= 3; j ++) {
      Serial.print("On pos [ ");
      Serial.print(i);
      Serial.print(" , ");
      Serial.print(j);
      Serial.print(" ]");
      Serial.print(" is ");
      Serial.println(ledarray[i][j]);
    }
    Serial.println();
  }
  }
  void OutputMatrix() {
  for (int i = 0; i <= 5; i++) {
    for (int j = 0; j <= 4; j ++) {
      pinMode(ledarray[i][j], OUTPUT);
      //      Serial.print("pinMode(ledarray[ ");
      //      Serial.print( i );
      //      Serial.print(" ] [ ");
      //      Serial.print( j );
      //      Serial.println(" ], OUTPUT);");
    }
  }
  }
*/
void CheckSpeed(int value) {
  int index = value / SpeedIncrement;
  for (int i = 0; i <= 4; i ++) {
    for (int j = 0; j <= 3; j ++) {
      TurnOn(ledarray[i][j]);
      delay(10);
      if (index == 1) {
        delay(AnimSpeed);
        CleanScreen();
        return;
      }
      index --;
    }
  }
}

//Snake
void Snake1(int DelaySpeed) {
  CleanScreen();
  for (int i = 0; i <= 4; i++) {
    if ( i % 2 == 0) {
      for (int j = 3; j >= 0; j --) {
        TurnOn(ledarray[i][j]);
        delay(DelaySpeed);
      }
    } else {
      for (int j = 0; j <= 3; j ++) {
        TurnOn(ledarray[i][j]);
        delay(DelaySpeed);
      }
    }
  }
  ChooseRandomClean(DelaySpeed / 2);
}
void Snake1Clean(int DelaySpeed) {
  FillScreen();
  for (int i = 4; i >= 0; i--) {
    if ( i % 2 == 0) {
      for (int j = 0; j <= 3; j ++) {
        TurnOff(ledarray[i][j]);
        delay(DelaySpeed);
      }
    } else {
      for (int j = 3; j >= 0; j --) {
        TurnOff(ledarray[i][j]);
        delay(DelaySpeed);
      }
    }
  }
}
void Snake2(int DelaySpeed) {
  CleanScreen();
  for (int j = 3; j >= 0; j--) {
    if ( j % 2 == 0) {
      for (int i = 4; i >= 0; i --) {
        TurnOn(ledarray[i][j]);
        delay(DelaySpeed);
      }
    } else {
      for (int i = 0; i <= 4; i ++) {
        TurnOn(ledarray[i][j]);
        delay(DelaySpeed);
      }
    }
  }
  ChooseRandomClean(DelaySpeed / 2);
}
void Snake2Clean(int DelaySpeed) {
  FillScreen();
  for (int j = 0; j <= 3; j++) {
    if ( j % 2 == 0) {
      for (int i = 0; i <= 4; i ++) {
        TurnOff(ledarray[i][j]);
        delay(DelaySpeed);
      }
    } else {
      for (int i = 4; i >= 0; i --) {
        TurnOff(ledarray[i][j]);
        delay(DelaySpeed);
      }
    }
  }
}
void Snake3(int DelaySpeed) {
  CleanScreen();
  for (int i = 0; i <= 4; i++) {
    if ( i % 2 == 0) {
      for (int j = 0; j <= 4; j ++) {
        TurnOn(ledarray[i][j]);
        delay(DelaySpeed);
      }
    } else {
      for (int j = 4; j >= 0; j --) {
        TurnOn(ledarray[i][j]);
        delay(DelaySpeed);
      }
    }
  }
  ChooseRandomClean(DelaySpeed / 2);
}
void Snake3Clean(int DelaySpeed) {
  FillScreen();
  for (int i = 4; i >= 0 ; i--) {
    if ( i % 2 == 0) {
      for (int j = 3; j >= 0; j --) {
        TurnOff(ledarray[i][j]);
        delay(DelaySpeed);
      }
    } else {
      for (int j = 0; j <= 3; j ++) {
        TurnOff(ledarray[i][j]);
        delay(DelaySpeed);
      }
    }
  }
}
void Snake4(int DelaySpeed) {
  CleanScreen();
  for (int j = 0; j <= 3; j++) {
    if ( j % 2 == 0) {
      for (int i = 0; i <= 4; i ++) {
        TurnOn(ledarray[i][j]);
        delay(DelaySpeed);
      }
    } else {
      for (int i = 4; i >= 0 ; i --) {
        TurnOn(ledarray[i][j]);
        delay(DelaySpeed);
      }
    }
  }
  ChooseRandomClean(DelaySpeed / 2);
}
void Snake4Clean(int DelaySpeed) {
  FillScreen();
  for (int j = 3; j >= 0; j--) {
    if ( j % 2 == 0) {
      for (int i = 4; i >= 0; i --) {
        TurnOff(ledarray[i][j]);
        delay(DelaySpeed);
      }
    } else {
      for (int i = 0; i <= 4; i ++) {
        TurnOff(ledarray[i][j]);
        delay(DelaySpeed);
      }
    }
  }
}
void Snake5(int DelaySpeed) {
  CleanScreen();
  for (int i = 4; i >= 0 ; i--) {
    if ( i % 2 == 0) {
      for (int j = 3; j >= 0; j --) {
        TurnOn(ledarray[i][j]);
        delay(DelaySpeed);
      }
    } else {
      for (int j = 0; j <= 3; j ++) {
        TurnOn(ledarray[i][j]);
        delay(DelaySpeed);
      }
    }
  }
  ChooseRandomClean(DelaySpeed / 2);
}
void Snake5Clean(int DelaySpeed) {
  FillScreen();
  for (int i = 0; i <= 4; i++) {
    if ( i % 2 == 0) {
      for (int j = 0; j <= 4; j ++) {
        TurnOff(ledarray[i][j]);
        delay(DelaySpeed);
      }
    } else {
      for (int j = 4; j >= 0; j --) {
        TurnOff(ledarray[i][j]);
        delay(DelaySpeed);
      }
    }
  }
}
void Snake6(int DelaySpeed) {
  CleanScreen();
  for (int j = 3; j >= 0; j--) {
    if ( j % 2 == 0) {
      for (int i = 0; i <= 4; i ++) {
        TurnOn(ledarray[i][j]);
        delay(DelaySpeed);
      }
    } else {
      for (int i = 4; i >= 0; i --) {
        TurnOn(ledarray[i][j]);
        delay(DelaySpeed);
      }
    }
  }
  ChooseRandomClean(DelaySpeed / 2);
}
void Snake6Clean(int DelaySpeed) {
  FillScreen();
  for (int j = 0; j <= 3; j++) {
    if ( j % 2 == 0) {
      for (int i = 4; i >= 0; i --) {
        TurnOff(ledarray[i][j]);
        delay(DelaySpeed);
      }
    } else {
      for (int i = 0; i <= 4; i ++) {
        TurnOff(ledarray[i][j]);
        delay(DelaySpeed);
      }
    }
  }
}
void Snake7(int DelaySpeed) {
  CleanScreen();
  for (int j = 0; j <= 3; j++) {
    if ( j % 2 == 0) {
      for (int i = 4; i >= 0; i --) {
        TurnOn(ledarray[i][j]);
        delay(DelaySpeed);
      }
    } else {
      for (int i = 0; i <= 4; i ++) {
        TurnOn(ledarray[i][j]);
        delay(DelaySpeed);
      }
    }
  }
  ChooseRandomClean(DelaySpeed / 2);
}
void Snake7Clean(int DelaySpeed) {
  FillScreen();
  for (int j = 3; j >= 0; j--) {
    if ( j % 2 == 0) {
      for (int i = 0; i <= 4; i ++) {
        TurnOff(ledarray[i][j]);
        delay(DelaySpeed);
      }
    } else {
      for (int i = 4; i >= 0; i --) {
        TurnOff(ledarray[i][j]);
        delay(DelaySpeed);
      }
    }
  }
}
void Snake8(int DelaySpeed) {
  CleanScreen();
  for (int i = 4; i >= 0; i--) {
    if ( i % 2 == 0) {
      for (int j = 0; j <= 3; j ++) {
        TurnOn(ledarray[i][j]);
        delay(DelaySpeed);
      }
    } else {
      for (int j = 3; j >= 0; j --) {
        TurnOn(ledarray[i][j]);
        delay(DelaySpeed);
      }
    }
  }
  ChooseRandomClean(DelaySpeed / 2);
}
void Snake8Clean(int DelaySpeed) {
  FillScreen();
  for (int i = 0; i <= 4; i++) {
    if ( i % 2 == 0) {
      for (int j = 3; j >= 0; j --) {
        TurnOff(ledarray[i][j]);
        delay(DelaySpeed);
      }
    } else {
      for (int j = 0; j <= 3; j ++) {
        TurnOff(ledarray[i][j]);
        delay(DelaySpeed);
      }
    }
  }
}

//Symbols
void WriteSentence(String text) {
  text.toCharArray(buf, 50);
  for (int i = 0; i <= strlen(buf) - 1; i ++) {
    ShowSymbol(buf[i]);
    delay(1000);
  }
  WriteSentence(text);
}
void ShowSymbol(int ASCII) {
  switch (ASCII) {

    case 32:
      Space();
      break;
    case 33:
      Exclamation();
      break;
    case 34:
      QuotationMark();
      break;
    case 35:
      Hash();
      break;
    case 36:
      Dollar();
      break;
    case 37:
      Percent();
      break;
    case 38:
      AndSymb();
      break;
    case 39:
      Apostrophe();
      break;
    case 40:
      OpenParenthesis();
      break;
    case 41:
      ClosedParenthesis();
      break;
    case 42:
      Multiplication();
      break;
    case 43:
      Plus();
      break;
    case 44:
      Comma();
      break;
    case 45:
      Minus();
      break;
    case 46:
      Dot();
      break;
    case 47:
      Slash();
      break;
    case 48:
      Zero();
      break;
    case 49:
      One();
      break;
    case 50:
      Two();
      break;
    case 51:
      Three();
      break;
    case 52:
      Four();
      break;
    case 53:
      Five();
      break;
    case 54:
      Six();
      break;
    case 55:
      Seven();
      break;
    case 56:
      Eight();
      break;
    case 57:
      Nine();
      break;
    case 58:
      Colon();
      break;
    case 59:
      SemiColon();
      break;
    case 60:
      Smaller();
      break;
    case 61:
      Equal();
      break;
    case 62:
      Bigger();
      break;
    case 63:
      QuestionMark();
      break;
    case 64:
      AtSign();
      break;
    case 65:
      A();
      break;
    case 66:
      B();
      break;
    case 67:
      C();
      break;
    case 68:
      D();
      break;
    case 69:
      E();
      break;
    case 70:
      f();
      break;
    case 71:
      G();
      break;
    case 72:
      H();
      break;
    case 73:
      I();
      break;
    case 74:
      J();
      break;
    case 75:
      K();
      break;
    case 76:
      L();
      break;
    case 77:
      M();
      break;
    case 78:
      N();
      break;
    case 79:
      O();
      break;
    case 80:
      P();
      break;
    case 81:
      Q();
      break;
    case 82:
      R();
      break;
    case 83:
      S();
      break;
    case 84:
      T();
      break;
    case 85:
      U();
      break;
    case 86:
      V();
      break;
    case 87:
      W();
      break;
    case 88:
      X();
      break;
    case 89:
      Y();
      break;
    case 90:
      Z();
      break;
    case 91:
      OpenBrackets();
      break;
    case 92:
      OtherSlash();
      break;
    case 93:
      ClosedBrackets();
      break;
    case 94:
      UpArrow();
      break;
    case 95:
      UnderLine();
      break;
    case 96:
      Apostrophe();
      break;

    // 97 to 122 small letters

    case 97:
      SmallA();
      break;
    case 98:
      SmallB();
      break;
    case 99:
      SmallC();
      break;
    case 100:
      SmallD();
      break;
    case 101:
      SmallE();
      break;
    case 102:
      SmallF();
      break;
    case 103:
      SmallG();
      break;
    case 104:
      SmallH();
      break;
    case 105:
      SmallI();
      break;
    case 106:
      SmallJ();
      break;
    case 107:
      SmallK();
      break;
    case 108:
      SmallL();
      break;
    case 109:
      M();
      break;
    case 110:
      SmallN();
      break;
    case 111:
      SmallO();
      break;
    case 112:
      SmallP();
      break;
    case 113:
      SmallQ();
      break;
    case 114:
      SmallR();
      break;
    case 115:
      S();
      break;
    case 116:
      SmallT();
      break;
    case 117:
      SmallU();
      break;
    case 118:
      SmallV();
      break;
    case 119:
      W();
      break;
    case 120:
      SmallX();
      break;
    case 121:
      SmallY();
      break;
    case 122:
      Z();
      break;

    case 123:
      OpenCurlyBracket();
      break;
    case 124:
      ParallelLine();
      break;
    case 125:
      ClosedCurlyBracket();
      break;
    case 126:
      Aprox();
      break;

    default:
      Box();
      break;
  }
}
void Box() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][2]);
}
void ParallelLine() {
  CleanScreen();
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[1][1]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[4][1]);
}
void Space() {
  CleanScreen();
}
void Exclamation() {
  CleanScreen();
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[1][2]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[4][2]);
}
void QuotationMark() {
  CleanScreen();
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[1][1]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][3]);
}
void Hash() {
  CleanScreen();
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[1][1]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[1][2]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[4][3]);
}
void Dollar() {
  CleanScreen();
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][3]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][2]);
  TurnOn(ledarray[2][3]);
}
void Percent() {
  CleanScreen();
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][2]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[3][3]);
}
void AndSymb() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[1][1]);
  TurnOn(ledarray[1][2]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[2][0]);
}
void Apostrophe() {
  CleanScreen();
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[1][2]);
}
void OpenParenthesis() {
  CleanScreen();
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[4][1]);
}
void ClosedParenthesis() {
  CleanScreen();
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][2]);
}
void Multiplication() {
  CleanScreen();
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[1][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[3][3]);
}
void Plus() {
  CleanScreen();
  TurnOn(ledarray[1][2]);
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[2][3]);
}
void Minus() {
  CleanScreen();
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[2][3]);
}
void Dot() {
  CleanScreen();
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][3]);
}
void Comma() {
  CleanScreen();
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[4][2]);
}
void Slash() {
  CleanScreen();
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[1][3]);
}
void Zero() {
  CleanScreen();
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][3]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[1][1]);
}
void One() {
  CleanScreen();
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[1][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[1][2]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[4][2]);
}
void Two() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][3]);
}
void Three() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][0]);
}
void Four() {
  CleanScreen();
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[1][1]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[4][3]);
}
void Five() {
  CleanScreen();
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][0]);
}
void Six() {
  CleanScreen();
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][1]);
}
void Seven() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[4][1]);
}
void Eight() {
  CleanScreen();
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][3]);
}
void Nine() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][0]);
}
void Colon() {
  CleanScreen();
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[3][1]);
}
void SemiColon() {
  CleanScreen();
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[0][2]);
}
void Smaller() {
  CleanScreen();
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][2]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[4][3]);
}
void Equal() {
  CleanScreen();
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[1][1]);
  TurnOn(ledarray[1][2]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[1][3]);
}
void Bigger() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[1][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[4][0]);
}
void QuestionMark() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[4][1]);
}
void AtSign() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[1][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[1][2]);
  TurnOn(ledarray[4][2]);
}
void A() {
  CleanScreen();
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][3]);
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[4][0]);
}
void B() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][2]);
}
void C() {
  CleanScreen();
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][3]);
}
void D() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][2]);
}
void E() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][3]);
}
void f() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[4][0]);
}
void G() {
  CleanScreen();
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][3]);
}
void H() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[4][3]);
}
void I() {
  CleanScreen();
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[1][1]);
  TurnOn(ledarray[1][2]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][2]);
}
void J() {
  CleanScreen();
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][2]);
}
void K() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[1][2]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[4][3]);
}
void L() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][3]);
}
void M() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[1][1]);
  TurnOn(ledarray[1][2]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[4][3]);
}
void N() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[1][1]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[4][3]);
}
void O() {
  CleanScreen();
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][2]);
}
void P() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[4][0]);
}
void Q() {
  CleanScreen();
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[4][3]);
  TurnOn(ledarray[3][2]);
}
void R() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[4][3]);
}
void S() {
  CleanScreen();
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][0]);
}
void T() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][1]);
  TurnOn(ledarray[1][2]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][2]);
}
void U() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[0][3]);
}
void V() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[0][3]);
}
void W() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[4][3]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[0][3]);
}
void X() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[1][1]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][3]);
}
void Y() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][1]);
}
void Z() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][3]);
}
void SmallA() {
  CleanScreen();
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][3]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[2][2]);
}
void SmallB() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[2][1]);
}
void SmallC() {
  CleanScreen();
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[3][3]);
}
void SmallD() {
  CleanScreen();
  TurnOn(ledarray[4][3]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[2][2]);
}
void SmallE() {
  CleanScreen();
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][3]);
}
void SmallF() {
  CleanScreen();
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[3][2]);
}
void SmallG() {
  CleanScreen();
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
}
void SmallH() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][3]);
}
void SmallI() {
  CleanScreen();
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[1][1]);
}
void SmallJ() {
  CleanScreen();
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[3][0]);
}
void SmallK() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[1][2]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[4][2]);
}
void SmallL() {
  CleanScreen();
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[1][1]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[4][2]);
}
void SmallN() {
  CleanScreen();
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[1][1]);
  TurnOn(ledarray[1][2]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][3]);
}
void SmallO() {
  CleanScreen();
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[1][1]);
  TurnOn(ledarray[1][2]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[3][3]);
}
void SmallP() {
  CleanScreen();
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[3][1]);
}
void SmallQ() {
  CleanScreen();
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[4][3]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[2][0]);
}
void SmallR() {
  CleanScreen();
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[1][1]);
  TurnOn(ledarray[0][2]);
}
void SmallT() {
  CleanScreen();
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[1][1]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[1][2]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[3][3]);
}
void SmallU() {
  CleanScreen();
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][3]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[0][3]);
}
void SmallV() {
  CleanScreen();
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[1][0]);
}
void SmallW() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[2][2]);
}
void SmallX() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][3]);
}
void SmallY() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][3]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][1]);
}
void OpenBrackets() {
  CleanScreen();
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][2]);
}
void OtherSlash() {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[1][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[3][3]);
}
void ClosedBrackets() {
  CleanScreen();
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[1][3]);
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[3][3]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][1]);
}
void UpArrow() {
  CleanScreen();
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[1][3]);
}
void UnderLine() {
  CleanScreen();
  TurnOn(ledarray[4][0]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][3]);
}
void OpenCurlyBracket() {
  CleanScreen();
  TurnOn(ledarray[0][3]);
  TurnOn(ledarray[0][2]);
  TurnOn(ledarray[1][1]);
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[3][1]);
  TurnOn(ledarray[4][2]);
  TurnOn(ledarray[4][3]);
}
void ClosedCurlyBracket() {
  CleanScreen();
  TurnOn(ledarray[2][3]);
  TurnOn(ledarray[1][2]);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[4][1]);
  TurnOn(ledarray[4][0]);
}
void Aprox() {
  CleanScreen();
  TurnOn(ledarray[2][0]);
  TurnOn(ledarray[1][1]);
  TurnOn(ledarray[2][2]);
  TurnOn(ledarray[1][3]);
}


//HeartGame
void UglyHeartGame(int DelaySpeed) {
  //  CleanScreen();
  //
  //  // // First Run
  //
  //  //Heart Write Contour
  //  TurnOn(ledarray[2][2]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[1][3]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[0][2]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[1][1]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[2][0]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[3][1]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[4][2]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[3][3]);
  //  delay(DelaySpeed);
  //
  //  //Heart Write Interior
  //  TurnOn(ledarray[2][3]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[1][2]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[2][1]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[3][2]);
  //  delay(DelaySpeed);
  //
  //  //Heart Clear Interior
  //  TurnOff(ledarray[3][2]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[2][1]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[1][2]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[2][3]);
  //  delay(DelaySpeed);
  //
  //  //Heart Clean Contour
  //  TurnOff(ledarray[3][3]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[4][2]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[3][1]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[2][0]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[1][1]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[0][2]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[1][3]);
  //
  //  // //Second Run
  //
  //  //Heart Write Contour
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[3][3]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[4][2]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[3][1]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[2][0]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[1][1]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[0][2]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[1][3]);
  //  delay(DelaySpeed);
  //
  //  //Heart Write Interior
  //  TurnOn(ledarray[2][3]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[3][2]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[2][1]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[1][2]);
  //  delay(DelaySpeed);
  //
  //  //Heart Clear Interior
  //  TurnOff(ledarray[1][2]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[2][1]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[3][2]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[2][3]);
  //  delay(DelaySpeed);
  //
  //  //Heart Clean Contour
  //  TurnOff(ledarray[1][3]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[0][2]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[1][1]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[2][0]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[3][1]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[4][2]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[3][3]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[2][2]);
  //  delay(DelaySpeed);
}
void Heart1(int DelaySpeed) {
  CleanScreen();

  // // First Run

  //Heart Write Contour
  TurnOn(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][0]);
  delay(DelaySpeed);

  //Heart Write Interior
  TurnOn(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][1]);
  delay(DelaySpeed);


  //Heart Clean Contour
  TurnOff(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][0]);
  delay(DelaySpeed);

  //Heart Clear Interior
  TurnOff(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][1]);
  delay(DelaySpeed);

}
void Heart2(int DelaySpeed) {
  // //Second Run

  //Heart Write Contour
  TurnOn(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][0]);
  delay(DelaySpeed);

  //Heart Write Interior
  TurnOn(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][1]);
  delay(DelaySpeed);

  //Heart Clean Contour
  TurnOff(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][0]);
  delay(DelaySpeed);

  //Heart Clear Interior
  TurnOff(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][1]);
  delay(DelaySpeed);
}
void Heart3(int DelaySpeed) {
  //  CleanScreen();
  //
  //  // //Third Run
  //
  //  //Heart Write Exterior
  //  TurnOn(ledarray[1][3]);
  //  TurnOn(ledarray[3][3]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[0][3]);
  //  TurnOn(ledarray[4][3]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[0][2]);
  //  TurnOn(ledarray[4][2]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[0][0]);
  //  TurnOn(ledarray[4][0]);
  //  delay(DelaySpeed);
  //
  //  //Heart Write Interior
  //  TurnOn(ledarray[2][0]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[1][1]);
  //  TurnOn(ledarray[3][1]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[2][2]);
  //  delay(10 * DelaySpeed);
  //
  //
  //  //Heart Write Contour
  //  TurnOn(ledarray[2][3]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[1][2]);
  //  TurnOn(ledarray[3][2]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[0][1]);
  //  TurnOn(ledarray[4][1]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[1][0]);
  //  TurnOn(ledarray[3][0]);
  //  delay(DelaySpeed);
  //  TurnOn(ledarray[2][1]);
  //  delay(DelaySpeed);
  //
  //  //Heart Clean Exterior & Interior
  //  TurnOff(ledarray[1][3]);
  //  TurnOff(ledarray[3][3]);
  //  TurnOff(ledarray[0][3]);
  //  TurnOff(ledarray[4][3]);
  //  TurnOff(ledarray[0][2]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[2][2]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[4][2]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[1][1]);
  //  TurnOff(ledarray[3][1]);
  //  TurnOff(ledarray[0][0]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[2][0]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[4][0]);
  //  delay(DelaySpeed);
  //
  //  //Heart Clean Contour
  //  TurnOff(ledarray[1][0]);
  //  TurnOff(ledarray[3][0]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[0][1]);
  //  TurnOff(ledarray[4][1]);
  //  TurnOff(ledarray[2][1]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[1][2]);
  //  TurnOff(ledarray[3][2]);
  //  delay(DelaySpeed);
  //  TurnOff(ledarray[2][3]);
}
void Heart4(int DelaySpeed) {
  // // First Run

  //Heart Write Contour
  TurnOn(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][0]);
  TurnOn(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][2]);
  TurnOn(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][3]);
  delay(DelaySpeed);

  //Heart Clean Contour
  TurnOff(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][2]);
  TurnOff(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][1]);
  TurnOff(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][0]);
  TurnOff(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][1]);
  delay(DelaySpeed);
}
void Heart5(int DelaySpeed) {
  //Second Run

  //Heart Write Contour
  TurnOn(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][2]);
  TurnOn(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][1]);
  TurnOn(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][0]);
  TurnOn(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][1]);
  delay(DelaySpeed);

  //Heart Clean Contour
  TurnOff(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][0]);
  TurnOff(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][1]);
  TurnOff(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][2]);
  TurnOff(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][3]);
  delay(DelaySpeed);
}

//Faces
/*
  void CreepyFace(int DelaySpeed) {
    CleanScreen();
    TurnOn(ledarray[2][0]);
    TurnOn(ledarray[3][1]);
    TurnOn(ledarray[3][2]);
    TurnOn(ledarray[2][3]);
    TurnOn(ledarray[0][0]);
    TurnOn(ledarray[0][2]);
    delay(DelaySpeed);
    TurnOff(ledarray[0][0]);
    TurnOff(ledarray[0][2]);
    TurnOn(ledarray[0][3]);
    TurnOn(ledarray[0][1]);
    delay(DelaySpeed);
  }
  void CreepyFace2(int DelaySpeed) {
    CleanScreen();
    TurnOn(ledarray[0][2]);
    TurnOn(ledarray[1][3]);
    TurnOn(ledarray[2][3]);
    TurnOn(ledarray[3][3]);
    TurnOn(ledarray[4][2]);
    TurnOn(ledarray[1][0]);
    TurnOn(ledarray[3][0]);
    delay(DelaySpeed * 1.5);
    TurnOn(ledarray[2][0]);
    TurnOff(ledarray[1][0]);
    TurnOff(ledarray[3][0]);
    delay(DelaySpeed / 4);
    TurnOn(ledarray[1][0]);
    TurnOn(ledarray[3][0]);
    delay(DelaySpeed / 4);
    TurnOff(ledarray[2][0]);
    TurnOff(ledarray[1][0]);
    TurnOff(ledarray[3][0]);
    TurnOn(ledarray[0][0]);
    TurnOn(ledarray[4][0]);
    delay(DelaySpeed);
    TurnOff(ledarray[0][0]);
    TurnOn(ledarray[1][0]);
    delay(DelaySpeed);
    TurnOff(ledarray[1][0]);
    TurnOn(ledarray[2][0]);
    delay(DelaySpeed);
    TurnOff(ledarray[2][0]);
    TurnOn(ledarray[3][0]);
    delay(DelaySpeed);
    TurnOn(ledarray[2][0]);
    TurnOff(ledarray[4][0]);
    delay(DelaySpeed);
    TurnOff(ledarray[2][0]);
    TurnOn(ledarray[1][0]);
    delay(DelaySpeed * 1.5);
    TurnOff(ledarray[1][0]);
    TurnOn(ledarray[0][0]);
    delay(DelaySpeed);
    TurnOff(ledarray[3][0]);
    TurnOn(ledarray[2][0]);
    delay(DelaySpeed);
    TurnOff(ledarray[2][0]);
    TurnOn(ledarray[1][0]);
    delay(DelaySpeed);
    TurnOff(ledarray[0][0]);
    TurnOn(ledarray[2][0]);
    delay(DelaySpeed);
    TurnOff(ledarray[2][0]);
    TurnOn(ledarray[3][0]);
    delay(DelaySpeed * 2);
    CleanScreen();
  }
  void CreepyFace2Dance(int DelaySpeed) {
    TurnOn(ledarray[0][2]);
    delay(DelaySpeed);
    TurnOn(ledarray[1][3]);
    delay(DelaySpeed);
    TurnOn(ledarray[2][3]);
    delay(DelaySpeed);
    TurnOn(ledarray[3][3]);
    delay(DelaySpeed);
    TurnOn(ledarray[4][2]);
    delay(DelaySpeed);
    TurnOn(ledarray[1][0]);
    delay(DelaySpeed);
    TurnOn(ledarray[3][0]);
    delay(DelaySpeed);
    TurnOn(ledarray[2][0]);
    delay(DelaySpeed);
    TurnOff(ledarray[1][0]);
    TurnOff(ledarray[3][0]);
    delay(DelaySpeed);
    TurnOff(ledarray[2][0]);
    TurnOn(ledarray[4][0]);
    TurnOn(ledarray[0][0]);
    delay(DelaySpeed * 4);
    TurnOff(ledarray[4][0]);
    TurnOff(ledarray[0][0]);

    TurnOn(ledarray[2][0]);
    TurnOff(ledarray[0][2]);
    TurnOn(ledarray[1][0]);
    delay(DelaySpeed);
    TurnOff(ledarray[1][3]);
    TurnOn(ledarray[3][0]);
    delay(DelaySpeed);
    TurnOff(ledarray[2][3]);
    delay(DelaySpeed);
    TurnOff(ledarray[3][3]);
    TurnOff(ledarray[1][0]);
    TurnOff(ledarray[3][0]);
    delay(DelaySpeed);
    TurnOff(ledarray[4][2]);
    TurnOff(ledarray[2][0]);
  }
*/

//Spiral
void Spiral1(int DelaySpeed) {
  CleanScreen();
  TurnOn(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][1]);
  delay(DelaySpeed);

  for (int i = 1; i <= 3; i ++) {
    TurnOn(ledarray[i][2]);
    delay(DelaySpeed);
  }
  /*
    //  TurnOn(ledarray[1][2]);
    //  delay(DelaySpeed);
    //  TurnOn(ledarray[2][2]);
    //  delay(DelaySpeed);
    //  TurnOn(ledarray[3][2]);
    //  delay(DelaySpeed);
  */

  TurnOn(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][0]);
  delay(DelaySpeed);

  for (int i = 0; i <= 3; i ++) {
    TurnOn(ledarray[0][i]);
    delay(DelaySpeed);
  }

  /*
    //  TurnOn(ledarray[0][0]);
    //  delay(DelaySpeed);
    //  TurnOn(ledarray[0][1]);
    //  delay(DelaySpeed);
    //  TurnOn(ledarray[0][2]);
    //  delay(DelaySpeed);
    //  TurnOn(ledarray[0][3]);
    //  delay(DelaySpeed);
  */

  for (int i = 1; i <= 3; i ++) {
    TurnOn(ledarray[i][3]);
    delay(DelaySpeed);
  }

  /*
    TurnOn(ledarray[1][3]);
    delay(DelaySpeed);
    TurnOn(ledarray[2][3]);
    delay(DelaySpeed);
    TurnOn(ledarray[3][3]);
    delay(DelaySpeed);
  */

  for (int i = 3; i >= 0; i --) {
    TurnOn(ledarray[4][i]);
    delay(DelaySpeed);
  }

  /*
    TurnOn(ledarray[4][3]);
    delay(DelaySpeed);
    TurnOn(ledarray[4][2]);
    delay(DelaySpeed);
    TurnOn(ledarray[4][1]);
    delay(DelaySpeed);
    TurnOn(ledarray[4][0]);
    delay(DelaySpeed);
  */

  ChooseRandomClean(DelaySpeed);
}
void Spiral1Clean(int DelaySpeed) {
  TurnOff(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][0]);
  delay(DelaySpeed);
}
void Spiral2(int DelaySpeed) {
  CleanScreen();
  TurnOn(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][3]);
  delay(DelaySpeed);
  ChooseRandomClean(DelaySpeed);
}
void Spiral2Clean(int DelaySpeed) {
  TurnOff(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][3]);
  delay(DelaySpeed);
}
void Spiral3(int DelaySpeed) {
  CleanScreen();
  TurnOn(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][0]);
  TurnOn(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][3]);
  ChooseRandomClean(DelaySpeed);

}
void Spiral3Clean(int DelaySpeed) {
  TurnOff(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][0]);
  TurnOff(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][3]);
}
void Spiral4(int DelaySpeed) {
  CleanScreen();
  TurnOn(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][3]);
  delay(DelaySpeed);
  ChooseRandomClean(DelaySpeed);
}
void Spiral4Clean(int DelaySpeed) {
  TurnOff(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][3]);
  delay(DelaySpeed);
}
void Spiral5(int DelaySpeed) {
  CleanScreen();
  TurnOn(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][1]);
  delay(DelaySpeed);
  ChooseRandomClean(DelaySpeed);
}
void Spiral5Clean(int DelaySpeed) {
  TurnOff(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][1]);
  delay(DelaySpeed);
}
void Spiral6(int DelaySpeed) {
  CleanScreen();
  TurnOn(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][2]);
  delay(DelaySpeed);
  ChooseRandomClean(DelaySpeed);
}
void Spiral6Clean(int DelaySpeed) {
  TurnOff(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][2]);
  delay(DelaySpeed);
}
void Spiral7(int DelaySpeed) {
  CleanScreen();
  TurnOn(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][1]);
  delay(DelaySpeed);
  ChooseRandomClean(DelaySpeed);
}
void Spiral7Clean(int DelaySpeed) {
  TurnOff(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][1]);
  delay(DelaySpeed);
}
void Spiral8(int DelaySpeed) {
  CleanScreen();
  TurnOn(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][3]);
  delay(DelaySpeed);
  ChooseRandomClean(DelaySpeed);
}
void Spiral8Clean(int DelaySpeed) {
  TurnOff(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][3]);
  delay(DelaySpeed);
}
void Spiral9(int DelaySpeed) {
  CleanScreen();
  TurnOn(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][0]);
  delay(DelaySpeed);
  ChooseRandomClean(DelaySpeed);
}
void Spiral9Clean(int DelaySpeed) {
  TurnOff(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][0]);
  delay(DelaySpeed);
}
void Spiral10(int DelaySpeed) {
  CleanScreen();
  TurnOn(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][0]);
  delay(DelaySpeed);
  ChooseRandomClean(DelaySpeed);
}
void Spiral10Clean(int DelaySpeed) {
  TurnOff(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][0]);
  delay(DelaySpeed);
}
void Spiral11(int DelaySpeed) {
  CleanScreen();
  TurnOn(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][0]);
  delay(DelaySpeed);
  delay(DelaySpeed);
  TurnOn(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][0]);
  delay(DelaySpeed);
  ChooseRandomClean(DelaySpeed);
}
void Spiral11Clean(int DelaySpeed) {
  TurnOff(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][0]);
  delay(DelaySpeed);
  delay(DelaySpeed);
  TurnOff(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][1]);
  delay(DelaySpeed);
}
void Spiral12(int DelaySpeed) {
  CleanScreen();
  TurnOn(ledarray[0][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][1]);
  delay(DelaySpeed);
  delay(DelaySpeed);
  TurnOn(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][0]);
  delay(DelaySpeed);
  ChooseRandomClean(DelaySpeed);
}
void Spiral12Clean(int DelaySpeed) {
  TurnOff(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][0]);
  delay(DelaySpeed);
}
void Spiral13(int DelaySpeed) {
  CleanScreen();
  TurnOn(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][0]);
  delay(DelaySpeed);
  ChooseRandomClean(DelaySpeed);
}
void Spiral13Clean(int DelaySpeed) {
  TurnOff(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][0]);
  delay(DelaySpeed);
}
void Spiral14(int DelaySpeed) {
  CleanScreen();
  TurnOn(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][2]);
  delay(DelaySpeed);
  ChooseRandomClean(DelaySpeed);
}
void Spiral14Clean(int DelaySpeed) {
  TurnOff(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][0]);
  delay(DelaySpeed);
}
void Spiral15(int DelaySpeed) {
  CleanScreen();
  TurnOn(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[0][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOn(ledarray[1][2]);
  delay(DelaySpeed);
  TurnOn(ledarray[3][2]);
  delay(DelaySpeed);
  ChooseRandomClean(DelaySpeed);
}
void Spiral15Clean(int DelaySpeed) {
  TurnOff(ledarray[2][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[0][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][3]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[2][2]);
  delay(DelaySpeed);
  TurnOff(ledarray[4][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[3][0]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][1]);
  delay(DelaySpeed);
  TurnOff(ledarray[1][2]);
  delay(DelaySpeed);
}
