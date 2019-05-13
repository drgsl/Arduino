#include <IRremote.h>

int latchPin = 5;
int clockPin = 6;
int dataPin = 4;
int  z = 0;

const int RECV_PIN = 7;
IRrecv irrecv(RECV_PIN);
decode_results results;
unsigned long key_value = 0;

byte leds = 0;

int ledarray[5][6] = { {0, 1, 2 , 3}, { -8, -7, -6, -5}, { -4, -3, -2, -1}, {8, 9, 10, 11}, {12, 14, 15, 16}}; //= { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19};
bool Buttons[4][8];

int AnimSpeed = 500;
int SpeedIncrement = 50;

struct RainDrop {
  float spd = 0;
  int x = 0;
  int y = 0;
};

RainDrop rain[5];

void setup()
{
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
  ReadIR();
}
void Rain(int DelaySpeed) {
  //  for (int i = 0; i <= 3; i ++) {
  //    UpdateRain(rain[i]);
  //  }

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
  //CleanScreen();
  Rain(DelaySpeed);
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
void ShowRain(RainDrop &raindrop) {
  TurnOn(ledarray[raindrop.y][raindrop.x]);
}

void ClearRain(RainDrop &raindrop) {
  TurnOff(ledarray[raindrop.y][raindrop.x]);
}

void(* resetFunc) (void) = 0;//declare reset function at address 0

void ReadIR() {

  if (irrecv.decode(&results)) {
    if (results.value == 0XFFFFFFFF)
      results.value = key_value;
    switch (results.value) {
      case 0xFFA25D:
        Serial.println("OFF");
        resetFunc();
        break;
      case 0xFF629D:
        Serial.println("Vol + ");
        break;
      case 0xFFE21D:
        Serial.println("Func / Stop");
        break;
      case 0xFF22DD:
        Serial.println("|<<");
        break;
      case 0xFF02FD:
        Serial.println(">|");
        break ;
      case 0xFFC23D:
        Serial.println(">>|");
        break ;
      case 0xFFE01F:
        Serial.println(" - ");
        if (AnimSpeed > SpeedIncrement)
          AnimSpeed -= SpeedIncrement;
        CheckSpeed(AnimSpeed);
        break ;
      case 0xFFA857:
        Serial.println("Vol - ");
        break ;
      case 0xFF906F:
        Serial.println(" + ");
        if (AnimSpeed < 20 * SpeedIncrement)
          AnimSpeed += SpeedIncrement;
        CheckSpeed(AnimSpeed);
        break ;
      case 0xFF6897:
        Serial.println("0");
        Rain(AnimSpeed);
        CleanScreen();
        break ;
      case 0xFF9867:
        Serial.println(" EQ ");
        break ;
      case 0xFFB04F:
        Serial.println(" St / Rept ");
        break ;
      case 0xFF30CF:
        Serial.println("1");
        CleanScreen();
        break ;
      case 0xFF18E7:
        Serial.println("2");
        Diagonals(AnimSpeed);
        CleanScreen();
        break ;
      case 0xFF7A85:
        Serial.println("3");
        Snake(AnimSpeed / 10);
        break;
      case 0xFF10EF:
        Serial.println("4");
        break ;
      case 0xFF38C7:
        Serial.println("5");
        break ;
      case 0xFF5AA5:
        Serial.println("6");
        break ;
      case 0xFF42BD:
        Serial.println("7");
        break ;
      case 0xFF4AB5:
        Serial.println("8");
        break ;
      case 0xFF52AD:
        Serial.println("9");
        break ;
    }
    key_value = results.value;
    irrecv.resume();
  }
}

void Snake(int DelaySpeed) {

  //Up Left
  Snake1(DelaySpeed);
  Snake2(DelaySpeed);

  //Up Right
  Snake3(DelaySpeed);
  Snake4(DelaySpeed);

  //Down Left
  Snake5(DelaySpeed);
  Snake6(DelaySpeed);

  //Down Right
  Snake7(DelaySpeed);
  Snake8(DelaySpeed);

  //Call Again
  Snake (DelaySpeed);
}

void CheckSpeed(int value) {
  int index = value / 50;
  for (int i = 0; i <= 4; i ++) {
    for (int j = 0; j <= 3; j ++) {
      TurnOn(ledarray[i][j]);
      delay(10);
      if (index == 1) {
        delay(50);
        CleanScreen();
        return;
      }
      index --;
    }
  }
}

void StartRgb() {
  for (int j  = 0; j <= 3; j ++) {
    TurnOn(ledarray[4][j]);
  }
}

void Diagonals(int DelaySpeed) {

  //Diagonala Principala

  Diagonals0(DelaySpeed);
  Diagonals1(DelaySpeed);

  Diagonals2(DelaySpeed);
  Diagonals3(DelaySpeed);
  Diagonals2Clean(DelaySpeed);
  Diagonals3Clean(DelaySpeed);

  Diagonals4(DelaySpeed);
  Diagonals5(DelaySpeed);
  DifDiag(0, true, 0);
  Diagonals4Clean(DelaySpeed);
  Diagonals5Clean(DelaySpeed);
  delay(DelaySpeed);
  DifDiag(0, false, 0);

  Diagonals4(DelaySpeed);
  DifDiag(0, true, 0);
  delay(DelaySpeed);
  Diagonals6(DelaySpeed);
  Diagonals6Clean(DelaySpeed);
  delay(DelaySpeed);
  DifDiag(0, false, 0);
  Diagonals7Clean(DelaySpeed);


  Diagonals8(DelaySpeed);
  delay(DelaySpeed);
  DifDiag(0, true, 0);
  delay(DelaySpeed);
  Diagonals7(DelaySpeed);
  Diagonals4Clean(DelaySpeed);
  Diagonals0Clean(DelaySpeed);

  Diagonals(DelaySpeed);
}

void Diagonals0(int DelaySpeed) {

  CleanScreen();
  for (int i = 0; i <= 3; i ++) {
    delay(DelaySpeed);
    DifDiag(i, true, 0);
  }
  Diagonals0Clean(DelaySpeed);
}

void Diagonals0Clean(int DelaySpeed) {

  for (int i = 0; i <= 3; i ++) {
    delay(DelaySpeed);
    DifDiag(i, false, 0);
  }
}


void Diagonals1(int DelaySpeed) {

  CleanScreen();

  for (int i = 3; i >= 0; i --) {
    delay(DelaySpeed);
    DifDiag(i, true, 0);
  }
  Diagonals1Clean(DelaySpeed);
}

void Diagonals1Clean(int DelaySpeed) {

  FillSquare();

  for (int i = 3; i >= 0; i --) {
    delay(DelaySpeed);
    DifDiag(i, false, 0);
  }
}

void Diagonals2(int DelaySpeed) {

  CleanScreen();

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

  CleanScreen();

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

//
//void Diagonals1(int DelaySpeed) {
//
//  CleanScreen();
//  SumDiag(3, true);
//  delay(DelaySpeed);
//
//  int z = 1;
//  for (int i = 4; i <= 6; i ++) {
//    SumDiag(i, true);
//    SumDiag(i - 2 * z, true);
//    z++;
//    delay(DelaySpeed);
//  }
//   Diagonals1Clean(DelaySpeed);
//
//}
//
//void Diagonals1Clean(int DelaySpeed) {
//
//  FillSquare();
//  SumDiag(3, false);
//  delay(DelaySpeed);
//
//  int z = 1;
//  for (int i = 4; i <= 6; i ++) {
//    SumDiag(i, false);
//    SumDiag(i - 2 * z, false);
//    z++;
//    delay(DelaySpeed);
//  }
//}

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
  CheckOFF();
  if (n < 0) {
    int index = ((-1 * n) - 1);
    //Serial.println(index);
    bitSet(leds, index);
    updateShiftRegister();
  } else {
    digitalWrite(n, HIGH);
  }
}

void CheckOFF() {
  if (irrecv.decode(&results)) {
    if (results.value == 0XFFFFFFFF)
      results.value = key_value;
    switch (results.value) {
      case 0xFFA25D:
        Serial.println("OFF");
        resetFunc();
        break;
    }
    key_value = results.value;
    irrecv.resume();
  }
}

void TurnOff(int n) {
  CheckOFF();
  if (n < 0) {
    int index = ((-1 * n) - 1);
    //Serial.println(index);
    bitClear(leds, index);
    updateShiftRegister();
  } else {
    digitalWrite(n, LOW);
  }
}


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
  Snake1Clean(DelaySpeed / 2);
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
  Snake2Clean(DelaySpeed / 2);
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
  Snake3Clean(DelaySpeed / 2);
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
  Snake4Clean(DelaySpeed / 2);
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
  Snake5Clean(DelaySpeed / 2);
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
  Snake6Clean(DelaySpeed / 2);
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
  Snake7Clean(DelaySpeed / 2);
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
  Snake8Clean(DelaySpeed / 2);
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