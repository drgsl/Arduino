// Adafruit Circuit Playground - Two tone sounds    Support Open Source, buy at Adafruit
//   2016-08-05 Version 1  by Mike Barela for Adafruit Industries
#define NOTE_B0  31
#define NOTE_C1  33
#define NOTE_CS1 35
#define NOTE_D1  37
#define NOTE_DS1 39
#define NOTE_E1  41
#define NOTE_F1  44
#define NOTE_FS1 46
#define NOTE_G1  49
#define NOTE_GS1 52
#define NOTE_A1  55
#define NOTE_AS1 58
#define NOTE_B1  62
#define NOTE_C2  65
#define NOTE_CS2 69
#define NOTE_D2  73
#define NOTE_DS2 78
#define NOTE_E2  82
#define NOTE_F2  87
#define NOTE_FS2 93
#define NOTE_G2  98
#define NOTE_GS2 104
#define NOTE_A2  110
#define NOTE_AS2 117
#define NOTE_B2  123
#define NOTE_C3  131
#define NOTE_CS3 139
#define NOTE_D3  147
#define NOTE_DS3 156
#define NOTE_E3  165
#define NOTE_F3  175
#define NOTE_FS3 185
#define NOTE_G3  196
#define NOTE_GS3 208
#define NOTE_A3  220
#define NOTE_AS3 233
#define NOTE_B3  247
#define NOTE_C4  262
#define NOTE_CS4 277
#define NOTE_D4  294
#define NOTE_DS4 311
#define NOTE_E4  330
#define NOTE_F4  349
#define NOTE_FS4 370
#define NOTE_G4  392
#define NOTE_GS4 415
#define NOTE_A4  440
#define NOTE_AS4 466
#define NOTE_B4  494
#define NOTE_C5  523
#define NOTE_CS5 554
#define NOTE_D5  587
#define NOTE_DS5 622
#define NOTE_E5  659
#define NOTE_F5  698
#define NOTE_FS5 740
#define NOTE_G5  784
#define NOTE_GS5 831
#define NOTE_A5  880
#define NOTE_AS5 932
#define NOTE_B5  988
#define NOTE_C6  1047
#define NOTE_CS6 1109
#define NOTE_D6  1175
#define NOTE_DS6 1245
#define NOTE_E6  1319
#define NOTE_F6  1397
#define NOTE_FS6 1480
#define NOTE_G6  1568
#define NOTE_GS6 1661
#define NOTE_A6  1760
#define NOTE_AS6 1865
#define NOTE_B6  1976
#define NOTE_C7  2093
#define NOTE_CS7 2217
#define NOTE_D7  2349
#define NOTE_DS7 2489
#define NOTE_E7  2637
#define NOTE_F7  2794
#define NOTE_FS7 2960
#define NOTE_G7  3136
#define NOTE_GS7 3322
#define NOTE_A7  3520
#define NOTE_AS7 3729
#define NOTE_B7  3951
#define NOTE_C8  4186
#define NOTE_CS8 4435
#define NOTE_D8  4699
#define NOTE_DS8 4978

const uint8_t spTHE[]       PROGMEM = {0x08,0xE8,0x3E,0x55,0x01,0xC3,0x86,0x27,0xAF,0x72,0x0D,0x4D,0x97,0xD5,0xBC,0x64,0x3C,0xF2,0x5C,0x51,0xF1,0x93,0x36,0x8F,0x4F,0x59,0x2A,0x42,0x7A,0x32,0xC3,0x64,0xFF,0x3F};
const uint8_t spSIX[]        = {0x0E,0xD8,0xAE,0xDD,0x03,0x0E,0x38,0xA6,0xD2,0x01,0xD3,0xB4,0x2C,0xAD,0x6A,0x35,0x9D,0xB1,0x7D,0xDC,0xEE,0xC4,0x65,0xD7,0xF1,0x72,0x47,0x24,0xB3,0x19,0xD9,0xD9,0x05,0x70,0x40,0x49,0xEA,0x02,0x98,0xBE,0x42,0x01,0xDF,0xA4,0x69,0x40,0x00,0xDF,0x95,0xFC,0x3F};


#include <Adafruit_CircuitPlayground.h>




 
const int numNotes = 8;                     // number of notes we are playing
int melody[] = {                            // specific notes in the melody
  NOTE_C4, NOTE_G3, NOTE_G3, NOTE_A3, NOTE_G3, 0, NOTE_B3, NOTE_C4 };
 
int noteDurations[] = {     // note durations: 4 = quarter note, 8 = eighth note, etc.:
  4, 8, 8, 4, 4, 4, 4, 4 };

 
 
const int speaker = 12;       // The CP microcontroller pin for the speaker
const int leftButton = 4;    // The CP microcontroller pin for the left button
const int rightButton = 19;  // The CP microcontroller pin for the right button
 
void setup() {
  pinMode(speaker, OUTPUT);     // We will write out to the speaker
  pinMode(leftButton, INPUT);   // We'll read in from the buttons
  pinMode(rightButton,INPUT);
}
 
void loop() {
MakeMusic();
}
 
// the sound producing function (a brute force way to do it)
void makeTone (unsigned char speakerPin, int frequencyInHertz, long timeInMilliseconds) {
  int x;   
  long delayAmount = (long)(1000000/frequencyInHertz);
  long loopTime = (long)((timeInMilliseconds*1000)/(delayAmount*2));
  for (x=0; x<loopTime; x++) {        // the wave will be symetrical (same time high & low)
     digitalWrite(speakerPin,HIGH);   // Set the pin high
     delayMicroseconds(delayAmount);  // and make the tall part of the wave
     digitalWrite(speakerPin,LOW);    // switch the pin back to low
     delayMicroseconds(delayAmount);  // and make the bottom part of the wave
  }  
}


void MakeMusic(){
   if(CircuitPlayground.rightButton()) {   // play when we press the right button
    for (int thisNote = 0; thisNote < numNotes; thisNote++) { // play notes of the melody
      // to calculate the note duration, take one second divided by the note type.
      //e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
      int noteDuration = 1000 / noteDurations[thisNote];
      makeTone(speaker,spSIX[thisNote], noteDuration);
 
      // to distinguish the notes, set a minimum time between them.
      //   the note's duration + 30% seems to work well:
      int pauseBetweenNotes = noteDuration * 1.30;
      delay(pauseBetweenNotes);
    }
  }
}

void MakeNoise(){
  //  for (int i=5000; i>0; i--) {             
//    makeTone(speaker,i,1);
//  }
  if(digitalRead(leftButton)) {   // if reading the left button returns true
    makeTone(speaker,440,100);    // output a 440 Hz sound for a tenth of a second
  }
  else if(digitalRead(rightButton)) { // if reading the right button returns true
    makeTone(speaker,1760,100);   // output a 1760 Hz sound for a tenth of a second                    
  }
}
