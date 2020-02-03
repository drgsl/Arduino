#include <LEDMatrixDriver.hpp>
#include <ThreeWire.h>
#include <RtcDS1302.h>
#include <dht.h>

#define countof(a) (sizeof(a) / sizeof(a[0]))

dht DHT;
#define DHT11_PIN 7
#define Button_PIN 8

// CONNECTIONS FOR RTC:
// DS1302 CLK/SCLK --> 5
// DS1302 DAT/IO --> 4
// DS1302 RST/CE --> 2
// DS1302 VCC --> 3.3v - 5v
// DS1302 GND --> GND

ThreeWire myWire(4, 5, 2); // IO, SCLK, CE
RtcDS1302<ThreeWire> Rtc(myWire);

// Define the ChipSelect pin for the led matrix (Dont use the SS or MISO pin of your Arduino!)
// Other pins are Arduino specific SPI pins (MOSI=DIN, SCK=CLK of the LEDMatrix) see https://www.arduino.cc/en/Reference/SPI

const uint8_t LEDMATRIX_CS_PIN = 9;

// Number of 8x8 segments you are connecting
const int LEDMATRIX_SEGMENTS = 6;
const int LEDMATRIX_WIDTH    = LEDMATRIX_SEGMENTS * 8;

// The LEDMatrixDriver class instance
LEDMatrixDriver lmd(LEDMATRIX_SEGMENTS, LEDMATRIX_CS_PIN);

byte font[95][8] = { {0, 0, 0, 0, 0, 0, 0, 0}, // SPACE
  {0x10, 0x18, 0x18, 0x18, 0x18, 0x00, 0x18, 0x18}, // EXCL
  {0x28, 0x28, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00}, // QUOT
  {0x00, 0x0a, 0x7f, 0x14, 0x28, 0xfe, 0x50, 0x00}, // #
  {0x10, 0x38, 0x54, 0x70, 0x1c, 0x54, 0x38, 0x10}, // $
  {0x00, 0x60, 0x66, 0x08, 0x10, 0x66, 0x06, 0x00}, // %
  {0, 0, 0, 0, 0, 0, 0, 0}, // &
  {0x00, 0x10, 0x18, 0x18, 0x08, 0x00, 0x00, 0x00}, // '
  {0x02, 0x04, 0x08, 0x08, 0x08, 0x08, 0x08, 0x04}, // (
  {0x40, 0x20, 0x10, 0x10, 0x10, 0x10, 0x10, 0x20}, // )
  {0x00, 0x10, 0x54, 0x38, 0x10, 0x38, 0x54, 0x10}, // *
  {0x00, 0x08, 0x08, 0x08, 0x7f, 0x08, 0x08, 0x08}, // +
  {0x00, 0x00, 0x00, 0x00, 0x00, 0x18, 0x18, 0x08}, // COMMA
  {0x00, 0x00, 0x00, 0x00, 0x7e, 0x00, 0x00, 0x00}, // -
  {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x06, 0x06}, // DOT
  {0x00, 0x04, 0x04, 0x08, 0x10, 0x20, 0x40, 0x40}, // /
  {0x00, 0x38, 0x44, 0x4c, 0x54, 0x64, 0x44, 0x38}, // 0
  {0x04, 0x0c, 0x14, 0x24, 0x04, 0x04, 0x04, 0x04}, // 1
  {0x00, 0x30, 0x48, 0x04, 0x04, 0x38, 0x40, 0x7c}, // 2
  {0x00, 0x38, 0x04, 0x04, 0x18, 0x04, 0x44, 0x38}, // 3
  {0x00, 0x04, 0x0c, 0x14, 0x24, 0x7e, 0x04, 0x04}, // 4
  {0x00, 0x7c, 0x40, 0x40, 0x78, 0x04, 0x04, 0x38}, // 5
  {0x00, 0x38, 0x40, 0x40, 0x78, 0x44, 0x44, 0x38}, // 6
  {0x00, 0x7c, 0x04, 0x04, 0x08, 0x08, 0x10, 0x10}, // 7
  {0x00, 0x3c, 0x44, 0x44, 0x38, 0x44, 0x44, 0x78}, // 8
  {0x00, 0x38, 0x44, 0x44, 0x3c, 0x04, 0x04, 0x78}, // 9
  {0x00, 0x18, 0x18, 0x00, 0x00, 0x18, 0x18, 0x00}, // :
  {0x00, 0x18, 0x18, 0x00, 0x00, 0x18, 0x18, 0x08}, // ;
  {0x00, 0x10, 0x20, 0x40, 0x80, 0x40, 0x20, 0x10}, // <
  {0x00, 0x00, 0x7e, 0x00, 0x00, 0xfc, 0x00, 0x00}, // =
  {0x00, 0x08, 0x04, 0x02, 0x01, 0x02, 0x04, 0x08}, // >
  {0x00, 0x38, 0x44, 0x04, 0x08, 0x10, 0x00, 0x10}, // ?
  {0x00, 0x30, 0x48, 0xba, 0xba, 0x84, 0x78, 0x00}, // @
  {0x00, 0x1c, 0x22, 0x42, 0x42, 0x7e, 0x42, 0x42}, // A
  {0x00, 0x78, 0x44, 0x44, 0x78, 0x44, 0x44, 0x7c}, // B
  {0x00, 0x3c, 0x44, 0x40, 0x40, 0x40, 0x44, 0x7c}, // C
  {0x00, 0x7c, 0x42, 0x42, 0x42, 0x42, 0x44, 0x78}, // D
  {0x00, 0x78, 0x40, 0x40, 0x70, 0x40, 0x40, 0x7c}, // E
  {0x00, 0x7c, 0x40, 0x40, 0x78, 0x40, 0x40, 0x40}, // F
  {0x00, 0x3c, 0x40, 0x40, 0x5c, 0x44, 0x44, 0x78}, // G
  {0x00, 0x42, 0x42, 0x42, 0x7e, 0x42, 0x42, 0x42}, // H
  {0x00, 0x7c, 0x10, 0x10, 0x10, 0x10, 0x10, 0x7e}, // I
  {0x00, 0x7e, 0x02, 0x02, 0x02, 0x02, 0x04, 0x38}, // J
  {0x00, 0x44, 0x48, 0x50, 0x60, 0x50, 0x48, 0x44}, // K
  {0x00, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x7c}, // L
  {0x00, 0x82, 0xc6, 0xaa, 0x92, 0x82, 0x82, 0x82}, // M
  {0x00, 0x42, 0x42, 0x62, 0x52, 0x4a, 0x46, 0x42}, // N
  {0x00, 0x3c, 0x42, 0x42, 0x42, 0x42, 0x44, 0x38}, // O
  {0x00, 0x78, 0x44, 0x44, 0x48, 0x70, 0x40, 0x40}, // P
  {0x00, 0x3c, 0x42, 0x42, 0x52, 0x4a, 0x44, 0x3a}, // Q
  {0x00, 0x78, 0x44, 0x44, 0x78, 0x50, 0x48, 0x44}, // R
  {0x00, 0x38, 0x40, 0x40, 0x38, 0x04, 0x04, 0x78}, // S
  {0x00, 0x7e, 0x90, 0x10, 0x10, 0x10, 0x10, 0x10}, // T
  {0x00, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x3e}, // U
  {0x00, 0x42, 0x42, 0x42, 0x42, 0x44, 0x28, 0x10}, // V
  {0x80, 0x82, 0x82, 0x92, 0x92, 0x92, 0x94, 0x78}, // W
  {0x00, 0x42, 0x42, 0x24, 0x18, 0x24, 0x42, 0x42}, // X
  {0x00, 0x44, 0x44, 0x28, 0x10, 0x10, 0x10, 0x10}, // Y
  {0x00, 0x7c, 0x04, 0x08, 0x7c, 0x20, 0x40, 0xfe}, // Z
  // (the font does not contain any lower case letters. you can add your own.)
};    // {}, //

const int AnimDelay = 100;
int x = 0, y = 0; // start top left
//char text[] = " ERROR, THE TEXT DIDN'T CHANGE " ;

int Mode = 0;
char datestring[20];
char temp[20];
char hum[20];

void setup() {
  // init the display
  lmd.setEnabled(true);
  lmd.setIntensity(0);   // 0 = low, 10 = high
  Serial.begin(57600);
  //pinMode(Button_PIN, INPUT);
  SetupRTC();

}

void loop() {
  Refresh_Datestring();
  CheckModeUpdate();
  //Debug_datestring();
  BaseModes();
}



void RollDateTime() {
  int len = strlen(datestring);
  drawString(datestring, len, x, 0);
  // In case you wonder why we don't have to call lmd.clear() in every loop: The font has a opaque (black) background...

  // Toggle display of the new framebuffer
  lmd.display();

  // Wait to let the human read the display
  delay(AnimDelay);

  // Advance to next coordinate
  if ( --x < len * -8 ) {
    x = LEDMATRIX_WIDTH;
  }
}

void RollDate() {
  int len = 10;
  drawString(datestring, len, x, 0);
  // In case you wonder why we don't have to call lmd.clear() in every loop: The font has a opaque (black) background...

  // Toggle display of the new framebuffer
  lmd.display();

  // Wait to let the human read the display
  delay(AnimDelay);

  // Advance to next coordinate
  if ( --x < len * -8 ) {
    x = LEDMATRIX_WIDTH;
  }
}

void RollTime() {
  RtcDateTime now = Rtc.GetDateTime();
  snprintf_P(datestring,
             countof(datestring),
             PSTR("%02u:%02u:%02u"),
             now.Hour(),
             now.Minute(),
             now.Second() );

  // Draw the text to the current position
  int len = strlen(datestring);
  drawString(datestring, len, x, 0);
  // In case you wonder why we don't have to call lmd.clear() in every loop: The font has a opaque (black) background...

  // Toggle display of the new framebuffer
  lmd.display();

  // Wait to let the human read the display
  delay(AnimDelay);

  // Advance to next coordinate
  if ( --x < len * -8 ) {
    x = LEDMATRIX_WIDTH;
  }
}

void KeepDatePrecise() {
  for (int i = 16; i > -4; i--) {
    drawSprite( font[datestring[0]  - 32],  0 - i, 0, 8, 8 );
    drawSprite( font[datestring[1]  - 32],  8 - i, 0, 8, 8 );
    drawSprite( font[datestring[2]  - 32], 16 - i, 0, 8, 8 );
    drawSprite( font[datestring[3]  - 32], 24 - i, 0, 8, 8 );
    drawSprite( font[datestring[4]  - 32], 32 - i, 0, 8, 8 );
    drawSprite( font[datestring[5]  - 32], 40 - i, 0, 8, 8 );
    // drawSprite( font[datestring[6]  - 32], 48 - i, 0, 8, 8 );
    //  drawSprite( font[datestring[7]  - 32], 56 - i, 0, 8, 8 );
    drawSprite( font[datestring[8]  - 32], 48 - i, 0, 8, 8 );
    drawSprite( font[datestring[9]  - 32], 56 - i, 0, 8, 8 );
    
    lmd.display();
    CheckModeUpdate();
    delay(AnimDelay / 3);
  }

  for (int i = -4; i < 16; i++) {
    drawSprite( font[datestring[0]  - 32],  0 - i, 0, 8, 8 );
    drawSprite( font[datestring[1]  - 32],  8 - i, 0, 8, 8 );
    drawSprite( font[datestring[2]  - 32], 16 - i, 0, 8, 8 );
    drawSprite( font[datestring[3]  - 32], 24 - i, 0, 8, 8 );
    drawSprite( font[datestring[4]  - 32], 32 - i, 0, 8, 8 );
    drawSprite( font[datestring[5]  - 32], 40 - i, 0, 8, 8 );
    // drawSprite( font[datestring[6]  - 32], 48 - i, 0, 8, 8 );
    //  drawSprite( font[datestring[7]  - 32], 56 - i, 0, 8, 8 );
    drawSprite( font[datestring[8]  - 32], 48 - i, 0, 8, 8 );
    drawSprite( font[datestring[9]  - 32], 56 - i, 0, 8, 8 );

    lmd.display();
        CheckModeUpdate();
    delay(AnimDelay / 3);
  }
}

void KeepTimePrecise() {
  for (int i = 16; i > -4; i--) {
    Refresh_Datestring();
    drawSprite( font[datestring[11] - 32],  0 - i, 0, 8, 8 );
    drawSprite( font[datestring[12] - 32],  8 - i, 0, 8, 8 );
    drawSprite( font[datestring[13] - 32], 16 - i, 0, 8, 8 );
    drawSprite( font[datestring[14] - 32], 24 - i, 0, 8, 8 );
    drawSprite( font[datestring[15] - 32], 32 - i, 0, 8, 8 );
    drawSprite( font[datestring[16] - 32], 40 - i, 0, 8, 8 );
    drawSprite( font[datestring[17] - 32], 48 - i, 0, 8, 8 );
    drawSprite( font[datestring[18] - 32], 56 - i, 0, 8, 8 );

    lmd.display();
        CheckModeUpdate();
    delay(AnimDelay);

  }
  for (int i = -4; i < 16; i++) {
    Refresh_Datestring();
    drawSprite( font[datestring[11] - 32],  0 - i, 0, 8, 8 );
    drawSprite( font[datestring[12] - 32],  8 - i, 0, 8, 8 );
    drawSprite( font[datestring[13] - 32], 16 - i, 0, 8, 8 );
    drawSprite( font[datestring[14] - 32], 24 - i, 0, 8, 8 );
    drawSprite( font[datestring[15] - 32], 32 - i, 0, 8, 8 );
    drawSprite( font[datestring[16] - 32], 40 - i, 0, 8, 8 );
    drawSprite( font[datestring[17] - 32], 48 - i, 0, 8, 8 );
    drawSprite( font[datestring[18] - 32], 56 - i, 0, 8, 8 );

    lmd.display();
        CheckModeUpdate();
    delay(AnimDelay);
  }
}

void KeepDateSimple() {
  int offset = 5;
  drawSprite( font[datestring[0]  - 32],  0 + offset, 0, 8, 8 );
  drawSprite( font[datestring[1]  - 32],  8 + offset, 0, 8, 8 );
  drawSprite( font[datestring[2]  - 32], 16 + offset, 0, 8, 8 );
  drawSprite( font[datestring[3]  - 32], 24 + offset, 0, 8, 8 );
  drawSprite( font[datestring[4]  - 32], 32 + offset, 0, 8, 8 );
  lmd.display();
  delay(AnimDelay);
}

void KeepTimeSimple() {
  int offset = 5;
  drawSprite( font[datestring[11] - 32],  0 + offset, 0, 8, 8 );
  drawSprite( font[datestring[12] - 32],  8 + offset, 0, 8, 8 );
  drawSprite( font[datestring[13] - 32], 16 + offset, 0, 8, 8 );
  drawSprite( font[datestring[14] - 32], 24 + offset, 0, 8, 8 );
  drawSprite( font[datestring[15] - 32], 32 + offset, 0, 8, 8 );
  lmd.display();
  delay(AnimDelay);
}

void KeepTemperature() {
  DHT.read11(DHT11_PIN);
  if (DHT.temperature > 0)
    dtostrf (DHT.temperature, 4, 2, temp);

  int offset = 4;
  drawSprite( font['T'      - 32],  0 + offset, 0, 8, 8 );
  drawSprite( font['='      - 32],  8 + offset, 0, 8, 8 );
  drawSprite( font[temp[0]  - 32],  16 + offset, 0, 8, 8 );
  drawSprite( font[temp[1]  - 32],  24 + offset, 0, 8, 8 );
  drawSprite( font['*'      - 32],  32 + offset, 0, 8, 8 );
  //  drawSprite( font['C'      - 32],  40 + offset, 0, 8, 8 );

  //  int offset = 0;
  //  drawSprite( font[temp[0]  - 32],  0 + offset, 0, 8, 8 );
  //  drawSprite( font[temp[1]  - 32],  8 + offset, 0, 8, 8 );
  //  drawSprite( font[temp[2]  - 32],  16 + offset, 0, 8, 8 );
  //  drawSprite( font[temp[3]  - 32],  24 + offset, 0, 8, 8 );
  //  drawSprite( font[temp[4]  - 32],  32 + offset, 0, 8, 8 );
  //  drawSprite( font['*'      - 32],  40 + offset, 0, 8, 8 );

  lmd.display();
  delay(AnimDelay);
}

void KeepHumidity() {
  DHT.read11(DHT11_PIN);
  if (DHT.humidity > 0)
    dtostrf (DHT.humidity, 4, 2, hum);

  int offset = 4;
  drawSprite( font['H'     - 32],  0 + offset, 0, 8, 8 );
  drawSprite( font['='     - 32],  8 + offset, 0, 8, 8 );
  drawSprite( font[hum[0]  - 32],  16 + offset, 0, 8, 8 );
  drawSprite( font[hum[1]  - 32],  24 + offset, 0, 8, 8 );
  drawSprite( font['%'     - 32],  32 + offset, 0, 8, 8 );

  //  int offset = 0;
  //  drawSprite( font[hum[0]  - 32],  0 + offset, 0, 8, 8 );
  //  drawSprite( font[hum[1]  - 32],  8 + offset, 0, 8, 8 );
  //  drawSprite( font[hum[2]  - 32],  16 + offset, 0, 8, 8 );
  //  drawSprite( font[hum[3]  - 32],  24 + offset, 0, 8, 8 );
  //  drawSprite( font[hum[4]  - 32],  32 + offset, 0, 8, 8 );
  //  drawSprite( font['%'     - 32],  40 + offset, 0, 8, 8 );

  lmd.display();
  delay(AnimDelay);
}

void KeepTemperatureAndHumidity() {
  DHT.read11(DHT11_PIN);
  if (DHT.humidity > 0)
    dtostrf (DHT.humidity, 4, 2, hum);

  if (DHT.temperature > 0)
    dtostrf (DHT.temperature, 4, 2, temp);

  int offset = 0;
  drawSprite( font[temp[0]  - 32],  0 + offset, 0, 8, 8 );
  drawSprite( font[temp[1]  - 32],  8 + offset, 0, 8, 8 );
  drawSprite( font['*'      - 32],  16 + offset, 0, 8, 8 );

  drawSprite( font[hum[0]  - 32],  24 + offset, 0, 8, 8 );
  drawSprite( font[hum[1]  - 32],  32 + offset, 0, 8, 8 );
  drawSprite( font['%'     - 32],  40 + offset, 0, 8, 8 );

  lmd.display();
  delay(AnimDelay);
}




void drawString(char* text, int len, int x, int y ) {
  for ( int idx = 0; idx < len; idx ++ )
  {
    int c = text[idx] - 32;

    // stop if char is outside visible area
    if ( x + idx * 8  > LEDMATRIX_WIDTH )
      return;

    // only draw if char is visible
    if ( 8 + x + idx * 8 > 0 )
      drawSprite( font[c], x + idx * 8, y, 8, 8 );
  }
}
//This draws a sprite to the given position using the width and height supplied (usually 8x8)
void drawSprite( byte* sprite, int x, int y, int width, int height ) {
  // The mask is used to get the column bit from the sprite row
  byte mask = B10000000;

  for ( int iy = 0; iy < height; iy++ )
  {
    for ( int ix = 0; ix < width; ix++ )
    {
      lmd.setPixel(x + ix, y + iy, (bool)(sprite[iy] & mask ));

      // shift the mask by one pixel to the right
      mask = mask >> 1;
    }

    // reset column mask
    mask = B10000000;
  }
}

void BaseModes(){
    switch (Mode) {
    case 0:
      KeepTimeSimple();
      break;
    case 1:
      KeepDateSimple();
      break;
    case 2:
      KeepTemperatureAndHumidity();
      break;

    default:
      Mode = 0;
      break;
  }
}
void AllModes(){
    switch (Mode) {
    case 0:
      KeepTimePrecise();
      break;
    case 1:
      KeepDatePrecise();
      break;
    case 2:
      KeepTimeSimple();
      break;
    case 3:
      KeepDateSimple();
      break;
    case 4:
      RollDateTime();
      break;
    case 5:
      RollDate();
      break;
    case 6:
      RollTime();
      break;

    case 7:
      KeepTemperature();
      break;
    case 8:
      KeepHumidity();
      break;
    case 9:
      KeepTemperatureAndHumidity();
      break;

    default:
      Mode = 0;
      break;
  }
}

void CheckModeUpdate() {
  //Serial.println(digitalRead(Button_PIN));
    lmd.clear();
    
  if (!digitalRead(Button_PIN)) {
    Mode +=1;
    delay(100);
  }
}

void SetupRTC() {

  Serial.print("compiled: ");
  Serial.print(__DATE__);
  Serial.println(__TIME__);

  Rtc.Begin();

  RtcDateTime compiled = RtcDateTime(__DATE__, __TIME__);
  printDateTime(compiled);
  Serial.println();

  if (!Rtc.IsDateTimeValid())
  {
    // Common Causes:
    //    1) first time you ran and the device wasn't running yet
    //    2) the battery on the device is low or even missing

    Serial.println("RTC lost confidence in the DateTime!");
    Rtc.SetDateTime(compiled);
  }

  if (Rtc.GetIsWriteProtected())
  {
    Serial.println("RTC was write protected, enabling writing now");
    Rtc.SetIsWriteProtected(false);
  }

  if (!Rtc.GetIsRunning())
  {
    Serial.println("RTC was not actively running, starting now");
    Rtc.SetIsRunning(true);
  }

  RtcDateTime now = Rtc.GetDateTime();
  if (now < compiled)
  {
    Serial.println("RTC is older than compile time!  (Updating DateTime)");
    Rtc.SetDateTime(compiled);
  }
  else if (now > compiled)
  {
    Serial.println("RTC is newer than compile time. (this is expected)");
  }
  else if (now == compiled)
  {
    Serial.println("RTC is the same as compile time! (not expected but all is fine)");
  }
}
char printDateTime(const RtcDateTime& dt) {
  char datestring[20];

  snprintf_P(datestring,
             countof(datestring),
             PSTR("%02u/%02u/%04u %02u:%02u:%02u"),
             dt.Month(),
             dt.Day(),
             dt.Year(),
             dt.Hour(),
             dt.Minute(),
             dt.Second() );
  Serial.print(datestring);
  return datestring;
}
void Refresh_Datestring() {
  RtcDateTime now = Rtc.GetDateTime();
  snprintf_P(datestring,
             countof(datestring),
             PSTR("%02u/%02u/%04u %02u:%02u:%02u"),
             now.Day(),
             now.Month(),
             now.Year(),
             now.Hour(),
             now.Minute(),
             now.Second() );

}


void Debug_datestring() {
  int len = strlen(datestring);

  for (int i = 0; i < len; i++) {
    Serial.print(i);
    Serial.print (" : ");
    Serial.println(datestring[i]);
  }
  Serial.println();
}
