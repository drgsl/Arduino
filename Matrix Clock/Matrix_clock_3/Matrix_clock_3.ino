/*
* 32 x 8 LED matrix date-clock-temperature-humidity display by ericBcreator
*
* components: 
* - DS1302 real time clock
* - AM2320 temperature and humidity sensor
* - PIR Motion Sensor 
* - 4 x MAX7219 8x8 LED matrix
* - Arduino Nano
*
* last update 20171024 by ericBcreator
*
* This code is free for personal use, not for commercial purposes.
* Please leave this header intact.
*
* contact: ericBcreator@gmail.com
*/

//
// Include libraries
//

#include <stdio.h>
#include <DS1302.h>                         // library for DS1302 RealTimeClock 
#include <LedControlMS.h>                   // library for 8x8 LED matrix

#include <LowPower.h>                       // library to turn the Arduino into sleep mode when no motion is detected

#include <Wire.h>         
#include <AM2320.h>                         // library for AM2320 temperature-humidity sensor
AM2320 th;                                  // pins connections: 1 to 5V, 2 (SDA) to A4, 3 to GND and 4 (SCL) A5

//
// Define pins
//

#define TEMPPIN A6                          // temperature sensor pin

#define PIRPIN 2                            // PIR sensor interrupt pin (2 or 3 for Arduino Nano)

#define CLOCKCEPIN 5                        // DS1302 Chip Enable pin
#define CLOCKIOPIN 6                        // DS1302 Input/Output pin
#define CLOCKCLKPIN 7                       // DS1302 Serial Clock pin

#define LCLOADPIN 10                        // LC LOAD pin
#define LCCLKPIN 11                         // LC CLK pin
#define LCDINPIN 12                         // LC DataIn pin

//
// Setup objects
//

// DataIn, CLK, LOAD, numOfDevices (fixed at 4)
LedControl lc = LedControl(LCDINPIN, LCCLKPIN, LCLOADPIN, 4);

// Create a DS1302 clock object
DS1302 rtc(CLOCKCEPIN, CLOCKIOPIN, CLOCKCLKPIN);

//
// Initialize variables
//

int ledBrightness = 0;                      // 0 -15
int numOfTimeLoops = 5;                     // num of 2 second loops the time will display
int delayTimeStatic = 4000;                 // display time for the static texts
int animDelay = 55;                         // delay time during animations
int clearLedDisplay = false;                // not used
int ledUpdateDelay = 20;                    // delay time between drawing LED columns
int nextLineDelay = 1500;                   // delay time between multiple line displays
int numOfLoopsUntilSleep = 5;               // number of times the main loop will run before going into sleep mode

int destMatrix, destCol;
int animType = 0;
int sleeping = true;

volatile int sleepLoopCounter = 0;

const char * DS1302ErrorMessage = "*RTC ERROR";
const char * AM2320ErrorMessage = "*TEMPERROR";

//
// Setup
//

void setup() {
  //setTime(); // run once to initialize the date and time of the rtc
  
  int devices = lc.getDeviceCount();
  for(int address = 0; address < devices; address++) {
    lc.shutdown(address, false);
    // Set the brightness
    lc.setIntensity(address, ledBrightness);
    lc.clearDisplay(address);
  }

  pinMode (PIRPIN, INPUT);
  digitalWrite (PIRPIN, LOW);
  attachInterrupt(digitalPinToInterrupt(PIRPIN), PIRmotionDetected, RISING); 

  // for debugging
  //Serial.begin(9600);

  powerOnTest();                            // check the sensors
}

//
// Main loop
//

void loop() {
  if (sleepLoopCounter == 0 && sleeping == true) {
    displayAnim();
    sleeping = false;
  }

  if (sleepLoopCounter < numOfLoopsUntilSleep) {
    sleepLoopCounter++;
    displayDate();
    displayTime();
    displayTemp();
    displayAnim();
  }
  else if (sleepLoopCounter == numOfLoopsUntilSleep) {
    displayAnimClear();
    sleeping = true;
    sleepLoopCounter++;
    
    // Enter power down state with ADC and BOD module disabled. 
    // When the PIR detects motion, an interrupt calls the PIRmotionDetected() function and the script continue
    LowPower.powerDown(SLEEP_8S, ADC_OFF, BOD_OFF); 
  }
}

//
// Functions
//

void setTime() {
  // Initialize a new chip by turning off write protection and clearing the
  // clock halt flag. These methods needn't always be called. See the DS1302
  // datasheet for details.
  rtc.writeProtect(false);
  rtc.halt(false);

  // Make a new time object to set the date and time.
  // yy, mm, dd, hr, min, sec, day of week
  Time t(2017, 10, 20, 16, 51, 00, Time::kFriday);

  // Set the time and date on the chip.
  rtc.time(t);
}

void powerOnTest() {
  Time t = rtc.time();
  if (dayAsString(t.day) == DS1302ErrorMessage ) {
      displayStringCondensed(0, DS1302ErrorMessage );  
  }

  switch(th.Read())
    case 1 or 2:
      displayStringCondensed(0, AM2320ErrorMessage);  
}

void PIRmotionDetected() {
  if (digitalRead(PIRPIN) == HIGH) {
    //Serial.println("Motion detected");
  
    sleepLoopCounter = 0;
  
    lc.setLed(3,0,0,true);
    lc.setLed(3,0,0,false);
  }
}

void displayDate() {
  Time t = rtc.time();

  String day = dayAsString(t.day);
  char dayString[20];
  snprintf(dayString, sizeof(dayString), "%s ", day.c_str());
  displayStringCondensed(1, dayString);  
  delayAndClearLed();

  String month = monthAsString(t.mon);
  char dateString[8];
  snprintf(dateString, sizeof(dateString), "%02d||%s", t.date, month.c_str());
  displayStringCondensed(1, dateString);  
  delayAndClearLed();

  char yearString[5];
  snprintf(yearString, sizeof(yearString), "%04d", t.yr);
  displayStringCondensed(4, yearString);  
  delayAndClearLed();
}

void displayTime() {
  for (int i = 0; i <= numOfTimeLoops; i++) {    
    Time t = rtc.time();
    char timeString[9];
    snprintf(timeString, sizeof(timeString), "%02d||||%02d", t.hr, t.min);
    displayStringCondensed(2, timeString);  

    lc.setLed(1,5,0,false);
    lc.setLed(1,2,0,false);
    delay(1000);
    lc.setLed(1,5,0,true);
    lc.setLed(1,2,0,true);
    delay(1000);
  }  

  if (clearLedDisplay) 
    lc.clearAll();
}

void displayTemp () {
  int intValue, fracValue;
  
  if(th.Read() == 0) {
    char tempString[10];
    intValue = th.t;
    fracValue = th.t * 10 - intValue * 10;
    
    snprintf(tempString, sizeof(tempString), "%02d.|%01d||C", intValue, fracValue);
    displayStringCondensed(2, tempString);
    delayAndClearLed();
  }
  else
    displayStringCondensed(0, AM2320ErrorMessage);  

  if(th.Read() == 0) {
    char humString[10];    
    intValue = th.h;

    snprintf(humString, sizeof(humString), "%02d||/ ", intValue);
    displayStringCondensed(7, humString);
    delayAndClearLed();
  }
  else
    displayStringCondensed(0, AM2320ErrorMessage);  
}

void displayAnim() {
  switch (animType) {
    case 0: 
      for (int row = 0; row <= 7; row++) {
        for (int matrix = 0; matrix <= 3; matrix++) {
          lc.setRow(matrix, 7 - row, B11111111);
        }
        delay(animDelay);
      }
      break;
      
    case 1:
      for (int row = 0; row <= 7; row++) {
        for (int matrix = 0; matrix <= 3; matrix++) {
          lc.setRow(matrix, row, B11111111);
        }
        delay(animDelay);
      }
      break;
  }

  animType++;
  if (animType > 1)   
    animType = 0;
  
  if (clearLedDisplay) 
    lc.clearAll();
}

void displayAnimClear() {
  for (int row = 0; row <= 7; row++) {
    for (int matrix = 0; matrix <= 3; matrix++) {
      lc.setRow(matrix, 7 - row, B00000000);
    }
    delay(animDelay);
  }
}

void displayStringCondensed (int startCol, char * displayString) {
  int i;
  char c;
  destMatrix = 0;
  destCol = 7 - startCol;

  for (i = 7; i > (7 - startCol); i--)                      // clear first columns if the startCol > 0
    lc.setColumn(destMatrix, i, B00000000);

  while (displayString[0] != 0) {
    c = displayString[0];

    if (destMatrix == 4 || displayString[0] == '~') {       // next line when we're out of matrices or a newline character is sent: ~
      clearLastColumns();
      destMatrix = 0;
      destCol = 7 - startCol;

      if (displayString[0] == '~') {
        displayString++;
        c = displayString[0];
      }
      delay(nextLineDelay);
    }

    if (displayString[0] == '|') {                          // display one blank column
      lc.setColumn(destMatrix, destCol, B00000000);
      increaseColCounter();
    }
    else if (displayString[0] == '.') {                     // display a point in a single column
      lc.setColumn(destMatrix, destCol, B10000000);
      increaseColCounter();
    }
    else if (displayString[0] == '!') {                     // display a !
      lc.setColumn(destMatrix, destCol, B10111111);
      increaseColCounter();
    }
    else if (displayString[0] == '/') {                     // display a % sign, % sign won't work because of the snprintf function
      lc.setColumn(destMatrix, destCol, B11000011);
      increaseColCounter();
      lc.setColumn(destMatrix, destCol, B00110011);
      increaseColCounter();
      lc.setColumn(destMatrix, destCol, B11001100);
      increaseColCounter();
      lc.setColumn(destMatrix, destCol, B11000011);
      increaseColCounter();
    }
    else if (displayString[0] == '*') {                     // display a *
      lc.setColumn(destMatrix, destCol, B00100010);
      increaseColCounter();
      lc.setColumn(destMatrix, destCol, B00010100);
      increaseColCounter();
      lc.setColumn(destMatrix, destCol, B01111111);
      increaseColCounter();
      lc.setColumn(destMatrix, destCol, B00010100);
      increaseColCounter();
      lc.setColumn(destMatrix, destCol, B00100010);
      increaseColCounter();
      lc.setColumn(destMatrix, destCol, B00000000);
      increaseColCounter();
    }
    else {
      if (destMatrix == 3 && destCol < 4) {                 // the character does not fit so enforce a new line
        clearLastColumns();
        destMatrix = 0;
        destCol = 7 - startCol;
        displayString--;
        delay(nextLineDelay);
      }
      else {
        int pos = lc.getCharArrayPosition(c);
    
        for (i = 0; i < 6; i++) {
          lc.setColumn(destMatrix, destCol, alphabetBitmap[pos][i]);          
          increaseColCounter();
        }
      }
    }
    
    displayString++;
  } 

  clearLastColumns();
}

void increaseColCounter() {
  destCol--;
  
  if (destCol < 0) {
    destMatrix++;
    destCol = 7;
  }
  
  delay(ledUpdateDelay);
}

void clearLastColumns() {
  for (int i = destMatrix * 8 + destCol; i < 4 * 8; i++) {
    lc.setColumn(destMatrix, destCol, B00000000);
    increaseColCounter();
  }
}

void delayAndClearLed() {
  delay(delayTimeStatic);

  if (clearLedDisplay) 
    lc.clearAll();
}

String dayAsString(const Time::Day day) {
  switch (day) { 
    case Time::kSunday:    return "|||Sun- day";
    case Time::kMonday:    return "|||Mon- day";
    case Time::kTuesday:   return "Tues- day";
    case Time::kWednesday: return "|||Wed-ness- day";
    case Time::kThursday:  return "Thurs|||-day";
    case Time::kFriday:    return "|||Fri- day";
    case Time::kSaturday:  return "Satur|||-day";
  }
  return DS1302ErrorMessage ;
}

String monthAsString(int month) {
  switch (month) {
    case 1:  return "Jan";
    case 2:  return "Feb";
    case 3:  return "Mar";
    case 4:  return "Apr";
    case 5:  return "May";
    case 6:  return "Jun";
    case 7:  return "Jul";
    case 8:  return "Aug";
    case 9:  return "Sep";
    case 10: return "Oct";
    case 11: return "Nov";
    case 12: return "Dec";
  }
  return DS1302ErrorMessage ;
}
