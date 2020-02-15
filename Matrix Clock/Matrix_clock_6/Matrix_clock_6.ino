#include <LEDMatrixDriver.hpp>
#include <ThreeWire.h>
#include <RtcDS1302.h>
#include <dht.h>

#define countof(a) (sizeof(a) / sizeof(a[0]))

dht DHT;
#define DHT11_PIN 7
//#define Button_PIN 8

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

byte font[122][8] = { {0, 0, 0, 0, 0, 0, 0, 0}, // SPACE
  {0x10, 0x18, 0x18, 0x18, 0x18, 0x00, 0x18, 0x18}, // EXCL
  {0x28, 0x28, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00}, // QUOT
  {0x00, 0x0a, 0x7f, 0x14, 0x28, 0xfe, 0x50, 0x00}, // #
  {0x10, 0x38, 0x54, 0x70, 0x1c, 0x54, 0x38, 0x10}, // $
  {B00000000, B11000000, B11001100, B00011000, B00110000, B01100000, B11001100, B00001100}, // %
  {0, 0, 0, 0, 0, 0, 0, 0}, // &
  {0x00, 0x10, 0x18, 0x18, 0x08, 0x00, 0x00, 0x00}, // '
  {0x02, 0x04, 0x08, 0x08, 0x08, 0x08, 0x08, 0x04}, // (
  {0x40, 0x20, 0x10, 0x10, 0x10, 0x10, 0x10, 0x20}, // )
  {B01110000, B11011000, B11011000, B01110000, B00000000, B00000000, B00000000, B00000000}, // *
  {0x00, 0x08, 0x08, 0x08, 0x7f, 0x08, 0x08, 0x08}, // +
  {0x00, 0x00, 0x00, 0x00, 0x00, 0x18, 0x18, 0x08}, // COMMA
  {0x00, 0x00, 0x00, 0x00, 0x7e, 0x00, 0x00, 0x00}, // -
  {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B11000000, B11000000}, // DOT
  {0x00, 0x04, 0x04, 0x08, 0x10, 0x20, 0x40, 0x40}, // /
  {B00000000, B01111000, B11001100, B11011100, B11101100, B11001100, B11001100, B01111000}, // 0
  {B00000000, B00110000, B00110000, B01110000, B00110000, B00110000, B00110000, B11111100}, // 1
  {B00000000, B01111000, B11001100, B00001100, B00011000, B01100000, B11000000, B11111100}, // 2
  {B00000000, B01111000, B11001100, B00001100, B00111000, B00001100, B11001100, B01111000}, // 3
  {B00000000, B00011000, B00111000, B01011000, B10011000, B11111100, B00011000, B00011000}, // 4
  {B00000000, B11111100, B11000000, B11111000, B00001100, B00001100, B11001100, B01111000}, // 5
  {B00000000, B01111000, B11001100, B11000000, B11111000, B11001100, B11001100, B01111000}, // 6
  {B00000000, B11111100, B11001100, B00011000, B00011000, B00110000, B00110000, B00110000}, // 7
  {B00000000, B01111000, B11001100, B11001100, B01111000, B11001100, B11001100, B01111000}, // 8
  {B00000000, B01111000, B11001100, B11001100, B01111100, B00001100, B11001100, B01111000}, // 9
  {B00000000, B00000000, B11000000, B11000000, B00000000, B11000000, B11000000, B00000000}, // :
  {0x00, 0x18, 0x18, 0x00, 0x00, 0x18, 0x18, 0x08}, // ;
  {0x00, 0x10, 0x20, 0x40, 0x80, 0x40, 0x20, 0x10}, // <
  {0x00, 0x00, 0x7e, 0x00, 0x00, 0xfc, 0x00, 0x00}, // =
  {0x00, 0x08, 0x04, 0x02, 0x01, 0x02, 0x04, 0x08}, // >
  {0x00, 0x38, 0x44, 0x04, 0x08, 0x10, 0x00, 0x10}, // ?
  {0x00, 0x30, 0x48, 0xba, 0xba, 0x84, 0x78, 0x00}, // @
  {
    B00000000,
    B00110000,
    B01111000,
    B11001100,
    B11001100,
    B11111100,
    B11001100,
    B11001100
  },
  {
    B00000000,
    B11111100,
    B01100110,
    B01100110,
    B01111100,
    B01100110,
    B01100110,
    B11111100
  },
  {
    B00000000,
    B00111100,
    B01100110,
    B11000000,
    B11000000,
    B11000000,
    B01100110,
    B00111100
  },
  {
    B00000000,
    B11111000,
    B01101100,
    B01100110,
    B01100110,
    B01100110,
    B01101100,
    B11111000
  },
  {
    B00000000,
    B11111110,
    B01100010,
    B01101000,
    B01111000,
    B01101000,
    B01100010,
    B11111110
  },
  {
    B00000000,
    B11111110,
    B01100010,
    B01101000,
    B01111000,
    B01101000,
    B01100000,
    B11110000
  },
  {
    B00000000,
    B00111100,
    B01100110,
    B11000000,
    B11000000,
    B11001110,
    B01100110,
    B00111110
  },
  {
    B00000000,
    B11001100,
    B11001100,
    B11001100,
    B11111100,
    B11001100,
    B11001100,
    B11001100
  },
  {
    B00000000,
    B11110000,
    B01100000,
    B01100000,
    B01100000,
    B01100000,
    B01100000,
    B11110000
  },
  {
    B00000000,
    B00011110,
    B00001100,
    B00001100,
    B00001100,
    B11001100,
    B11001100,
    B01111000
  },
  {
    B00000000,
    B11100110,
    B01100110,
    B01101100,
    B01111000,
    B01101100,
    B01100110,
    B11100110
  },
  {
    B00000000,
    B11110000,
    B01100000,
    B01100000,
    B01100000,
    B01100010,
    B01100110,
    B11111110
  },
  {
    B00000000,
    B11000110,
    B11101110,
    B11111110,
    B11111110,
    B11010110,
    B11000110,
    B11000110
  },
  {
    B00000000,
    B11000110,
    B11100110,
    B11110110,
    B11011110,
    B11001110,
    B11000110,
    B11000110
  },
  {
    B00000000,
    B00111000,
    B01101100,
    B11000110,
    B11000110,
    B11000110,
    B01101100,
    B00111000
  },
  {
    B00000000,
    B11111100,
    B01100110,
    B01100110,
    B01111100,
    B01100000,
    B01100000,
    B11110000
  },
  {
    B00000000,
    B01111000,
    B11001100,
    B11001100,
    B11001100,
    B11011100,
    B01111000,
    B00011100
  },
  {
    B00000000,
    B11111100,
    B01100110,
    B01100110,
    B01111100,
    B01101100,
    B01100110,
    B11100110
  },
  {
    B00000000,
    B01111000,
    B11001100,
    B11100000,
    B01110000,
    B00011100,
    B11001100,
    B01111000
  },
  {
    B00000000,
    B11111100,
    B10110100,
    B00110000,
    B00110000,
    B00110000,
    B00110000,
    B01111000
  },
  {
    B00000000,
    B11001100,
    B11001100,
    B11001100,
    B11001100,
    B11001100,
    B11001100,
    B11111100
  },
  {
    B00000000,
    B11001100,
    B11001100,
    B11001100,
    B11001100,
    B11001100,
    B01111000,
    B00110000
  },
  {
    B00000000,
    B11000110,
    B11000110,
    B11000110,
    B11010110,
    B11111110,
    B11101110,
    B11000110
  },
  {
    B00000000,
    B11000110,
    B11000110,
    B01101100,
    B00111000,
    B00111000,
    B01101100,
    B11000110
  },
  {
    B00000000,
    B11001100,
    B11001100,
    B11001100,
    B01111000,
    B00110000,
    B00110000,
    B01111000
  },
  {
    B00000000,
    B11111110,
    B11000110,
    B10001100,
    B00011000,
    B00110010,
    B01100110,
    B11111110
  },
  {
    B00000000,
    B11110000,
    B11000000,
    B11000000,
    B11000000,
    B11000000,
    B11000000,
    B11110000
  }, // [
  {
    B00000000,
    B00000000,
    B11000000,
    B01100000,
    B00110000,
    B00011000,
    B00001100,
    B00000000
  }, // \\

  {
    B00000000,
    B11110000,
    B00110000,
    B00110000,
    B00110000,
    B00110000,
    B00110000,
    B11110000
  }, // ]
  {
    B00000000,
    B00010000,
    B00101000,
    B01000100,
    B10000010,
    B00000000,
    B00000000,
    B00000000
  }, // ^
  {
    B00000000,
    B00000000,
    B00000000,
    B00000000,
    B00000000,
    B00000000,
    B00000000,
    B11110000
  }, // _
  {
    B11000000,
    B11000000,
    B01100000,
    B00000000,
    B00000000,
    B00000000,
    B00000000,
    B00000000
  }, // '
  {
    B00000000,
    B00000000,
    B00000000,
    B01111000,
    B00001100,
    B01111100,
    B11001100,
    B01110110
  }, {
    B00000000,
    B11100000,
    B01100000,
    B01100000,
    B01111100,
    B01100110,
    B01100110,
    B11011100
  }, {
    B00000000,
    B00000000,
    B00000000,
    B01111000,
    B11001100,
    B11000000,
    B11001100,
    B01111000
  }, {
    B00000000,
    B00011100,
    B00001100,
    B00001100,
    B01111100,
    B11001100,
    B11001100,
    B01110110
  }, {
    B00000000,
    B00000000,
    B00000000,
    B01111000,
    B11001100,
    B11111100,
    B11000000,
    B01111000
  }, {
    B00000000,
    B00111000,
    B01101100,
    B01100000,
    B11110000,
    B01100000,
    B01100000,
    B11110000
  }, {
    B00000000,
    B00000000,
    B01110110,
    B11001100,
    B11001100,
    B01111100,
    B00001100,
    B11111000
  }, {
    B00000000,
    B11100000,
    B01100000,
    B01101100,
    B01110110,
    B01100110,
    B01100110,
    B11100110
  }, {
    B00000000,
    B01100000,
    B00000000,
    B11100000,
    B01100000,
    B01100000,
    B01100000,
    B11110000
  }, {
    B00001100,
    B00000000,
    B00001100,
    B00001100,
    B00001100,
    B11001100,
    B11001100,
    B01111000
  }, {
    B00000000,
    B11100000,
    B01100000,
    B01100110,
    B01101100,
    B01111000,
    B01101100,
    B11100110
  }, {
    B00000000,
    B11100000,
    B01100000,
    B01100000,
    B01100000,
    B01100000,
    B01100000,
    B11110000
  }, {
    B00000000,
    B00000000,
    B00000000,
    B11001100,
    B11111110,
    B11111110,
    B11010110,
    B11000110
  }, {
    B00000000,
    B00000000,
    B00000000,
    B11111000,
    B11001100,
    B11001100,
    B11001100,
    B11001100
  }, {
    B00000000,
    B00000000,
    B00000000,
    B01111000,
    B11001100,
    B11001100,
    B11001100,
    B01111000
  }, {
    B00000000,
    B00000000,
    B11011100,
    B01100110,
    B01100110,
    B01111100,
    B01100000,
    B11110000
  }, {
    B00000000,
    B00000000,
    B01110110,
    B11001100,
    B11001100,
    B01111100,
    B00001100,
    B00011110
  }, {
    B00000000,
    B00000000,
    B00000000,
    B11011100,
    B01110110,
    B01100110,
    B01100000,
    B11110000
  }, {
    B00000000,
    B00000000,
    B00000000,
    B01111100,
    B11000000,
    B01111000,
    B00001100,
    B11111000
  }, {
    B00000000,
    B00100000,
    B01100000,
    B11111000,
    B01100000,
    B01100000,
    B01101000,
    B00110000
  }, {
    B00000000,
    B00000000,
    B00000000,
    B11001100,
    B11001100,
    B11001100,
    B11001100,
    B01110110
  }, {
    B00000000,
    B00000000,
    B00000000,
    B11001100,
    B11001100,
    B11001100,
    B01111000,
    B00110000
  }, {
    B00000000,
    B00000000,
    B00000000,
    B11000110,
    B11010110,
    B11111110,
    B11111110,
    B01101100
  }, {
    B00000000,
    B00000000,
    B00000000,
    B11000110,
    B01101100,
    B00111000,
    B01101100,
    B11000110
  }, {
    B00000000,
    B00000000,
    B11001100,
    B11001100,
    B11001100,
    B01111100,
    B00001100,
    B11111000
  }, {
    B00000000,
    B00000000,
    B00000000,
    B11111100,
    B10011000,
    B00110000,
    B01100100,
    B11111100
  }


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
  //pinMode(Button_PIN, INPUT);
  Serial.begin(57600);
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

void KeepTimePerf() {
  int offset = 0;
  drawSprite( font[datestring[11] - 32],  0 + offset, 0, 8, 8 ); // hour 1st
  drawSprite( font[datestring[12] - 32],  7 + offset, 0, 8, 8 ); // hour 2nd

  drawSprite( font[datestring[13] - 32], 14 + offset, 0, 8, 8 ); // : 1st

  drawSprite( font[datestring[14] - 32], 17 + offset, 0, 8, 8 ); // minute 1st
  drawSprite( font[datestring[15] - 32], 24 + offset, 0, 8, 8 ); // minute 2nd

  drawSprite( font[datestring[16] - 32], 31 + offset, 0, 8, 8 ); // : 2nd

  drawSprite( font[datestring[17] - 32], 34 + offset, 0, 8, 8 ); // second 1st
  drawSprite( font[datestring[18] - 32], 41 + offset, 0, 8, 8 ); // second 2nd
  lmd.display();
  //delay(AnimDelay);
}

void KeepDatePerf() {
  int offset = 0;
  drawSprite( font[datestring[0]  - 32],  0 + offset, 0, 8, 8 );
  drawSprite( font[datestring[1]  - 32],  7 + offset, 0, 8, 8 );

  drawSprite( font['.'            - 32], 14 + offset, 0, 8, 8 );

  drawSprite( font[datestring[3]  - 32], 17 + offset, 0, 8, 8 );
  drawSprite( font[datestring[4]  - 32], 24 + offset, 0, 8, 8 );

  drawSprite( font['.'            - 32], 31 + offset, 0, 8, 8 );

  // drawSprite( font[datestring[6]  - 32], 48 + offset, 0, 8, 8 );
  // drawSprite( font[datestring[7]  - 32], 56 + offset, 0, 8, 8 );

  drawSprite( font[datestring[8]  - 32], 34 + offset, 0, 8, 8 );
  drawSprite( font[datestring[9]  - 32], 41 + offset, 0, 8, 8 );
  lmd.display();
  delay(AnimDelay);
}

void KeepTempHumPerf() {
  DHT.read11(DHT11_PIN);
  if (DHT.humidity > 0)
    dtostrf (DHT.humidity, 4, 2, hum);

  if (DHT.temperature > 0)
    dtostrf (DHT.temperature, 4, 2, temp);

  int offset = 0;
  drawSprite( font[temp[0]  - 32],  0 + offset, 0, 8, 8 );
  drawSprite( font[temp[1]  - 32],  7 + offset, 0, 8, 8 );

  drawSprite( font['*'      - 32],  14 + offset, 0, 8, 8 );
  drawSprite( font['c'      - 32],  19 + offset, 0, 8, 8 );

  drawSprite( font[hum[0]  - 32],  28 + offset, 0, 8, 8 );
  drawSprite( font[hum[1]  - 32],  35 + offset, 0, 8, 8 );
  drawSprite( font['%'     - 32],  42 + offset, 0, 8, 8 );
  lmd.display();
  //Serial.println(heatIndexFast(DHT.temperature, DHT.humidity));
  delay(AnimDelay);
}

void KeepTimePerfUpdate() {

  int offset = 0;

  if (datestring[12] >= '3' && datestring[14] >= '5' && datestring[15]  >= '9' && datestring[17] >= '5' && datestring[18]  >= '9') {
    drawSprite( font[datestring[11] - 32],  0 + offset, -1, 8, 8 ); // hour 1st
  } else {
    drawSprite( font[datestring[11] - 32],  0 + offset, 0, 8, 8 ); // hour 1st
  }

  if (datestring[14] >= '5' && datestring[15]  >= '9' && datestring[17] >= '5' && datestring[18]  >= '9') {
    drawSprite( font[datestring[12] - 32],  7 + offset, -1, 8, 8 ); // hour 2nd
  } else {
    drawSprite( font[datestring[12] - 32],  7 + offset, 0, 8, 8 ); // hour 2nd
  }

  drawSprite( font[datestring[13] - 32], 14 + offset, 0, 8, 8 ); // : 1st

  if (datestring[15]  >= '9' && datestring[17] >= '5' && datestring[18]  >= '9') {
    drawSprite( font[datestring[14] - 32], 17 + offset, -1, 8, 8 ); // minute 1st
  } else {
    drawSprite( font[datestring[14] - 32], 17 + offset, 0, 8, 8 ); // minute 1st
  }
  if (datestring[17] >= '5' && datestring[18]  >= '9') {
    drawSprite( font[datestring[15] - 32], 24 + offset, -1, 8, 8 ); // minute 2nd
  } else {
    drawSprite( font[datestring[15] - 32], 24 + offset, 0, 8, 8 ); // minute 2nd
  }

  drawSprite( font[datestring[16] - 32], 31 + offset, 0, 8, 8 ); // : 2nd

  if (datestring[18]  >= '9') {
    drawSprite( font[datestring[17] - 32], 34 + offset, -1, 8, 8 ); // second 1st
  } else {
    drawSprite( font[datestring[17] - 32], 34 + offset, 0, 8, 8 ); // second 1st
  }
  drawSprite( font[datestring[18] - 32], 41 + offset, 0, 8, 8 ); // second 2nd

  lmd.display();
  //delay(AnimDelay);
}

void KeepDayOfTheWeek() {
  RtcDateTime now = Rtc.GetDateTime();
  int weekDay = now.DayOfWeek();
  Serial.println(weekDay);
  switch (weekDay) {
    case 1:
      drawString("Lun", 0, 0 , 0, 8);
      drawSprite( font['i' - 32],   23, 0, 8, 8 );
      break;
    case 2:
      drawString("Mart", 0, 0 , 0, 8);
      drawSprite( font['i' - 32], 30, 0, 8, 8 );
      break;
    case 3:
      drawString("M", 0, 0 , 0, 8);
      drawSprite( font['i' - 32],   8, 0, 8, 8 );
      drawSprite( font['e' - 32],  13, 0, 8, 8 );
//      drawString("rc", 20, 0 , 0, 8);
//      drawString("uri", 35, 0 , 0, 8);
      break;
    case 4:
      drawString("Joi", 0, 0 , 0, 7);
      break;
    case 5:
      drawString("Vi", 0, 0 , 0, 7);
      drawSprite( font['n' - 32],  12, 0, 8, 8 );
      drawString("er", 19, 0 , 0, 7);
      drawSprite( font['i' - 32],   34, 0, 8, 8 );
      break;
    case 6:
    drawSprite( font['S' - 32],   0, 0, 8, 8 );
    drawString("am", 7, 0 , 0, 8);
//    drawString("bat", 23, 0 , 0, 8);
//    drawSprite( font['a' - 32],  45, 0, 8, 8 );

      break;
    case 0:
      drawString("Dum" , 0, 0 , 0, 8);
//      drawSprite( font['i' - 32],  24, 0, 8, 8 );
//      drawSprite( font['n' - 32],  29, 0, 8, 8 );
//      drawSprite( font['i' - 32],  36, 0, 8, 8 );
//      drawSprite( font['c' - 32],  41, 0, 8, 8 );
//      drawSprite( font['a' - 32],  48, 0, 8, 8 );
      break;
  }
  lmd.display();
      lmd.clear();
}

void drawString(char* text, int x, int y, int offset, int charLength) {
  int ci = 0;
  for (int i = 0 ; i <= strlen(text) * 6; i += charLength) {
    drawSprite( font[text[ci] - 32],  x + i + offset, y, 8, 8 );
    Serial.println(text[ci]);
    ci++;
  }

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

void BaseModes() {
  switch (Mode) {
    case 0:
      KeepTimePerfUpdate();
      break;
    case 1:
      KeepDatePerf();
      break;
    case 2:
      KeepTempHumPerf();
      break;

    default:
      Mode = 0;
      break;
  }
}
void AllModes() {
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
  //  //Serial.println(digitalRead(Button_PIN));
  //  lmd.clear();
  //
  //  if (!digitalRead(Button_PIN)) {
  //    Mode += 1;
  //    delay(500);
  //  }

  if (Serial.available())
  { // If data is available to read,
    Mode = Serial.read() - '0'; // read it and store it in val
  }
  lmd.clear();
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
    Serial.println("RTC is newer than compile time. (this is expected)";
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

  //  RtcDateTime now = Rtc.GetDateTime();
  //  snprintf_P(datestring,
  //             countof(datestring),
  //             PSTR("%02u/%02u/%04u %02u:%02u:%02u"),
  //             now.Day(),
  //             now.Month(),
  //             now.Year(),
  //             48,
  //             48,
  //             48 ) ;
}


double heatIndexFast(double T, double R) {
  double c1 = -42.38, c2 = 2.049, c3 = 10.14, c4 = -0.2248;

  double A = c2 * T + c1;
  double B = (c4 * T + c3) * R;

  return (A + B) / 10;
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
