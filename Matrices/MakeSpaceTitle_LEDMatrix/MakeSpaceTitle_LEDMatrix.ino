//We always have to include the library
#include <LedControlMS.h>

/*
 Now we need a LedControl to work with.
 ***** These pin numbers will probably not work with your hardware *****
 pin 12 is connected to the DataIn 
 pin 11 is connected to the CLK 
 pin 10 is connected to LOAD 
 We have only a single MAX72XX.
 */
#define NBR_MTX 4 
LedControl lc=LedControl(12,11,10, NBR_MTX, 1);


/* we always wait a bit between updates of the display */
String scrollString= "MAKESPACE MADRID    ";
int stringLength=scrollString.length();
char ch0, ch1, ch2, ch3;
int nextCharIndex=0;


void setup() {
  /*
   The MAX72XX is in power-saving mode on startup,
   we have to do a wakeup call
   */
  Serial.begin (9600);
  Serial.println("Setup");
  Serial.println(scrollString);
  Serial.println(stringLength);

  for (int i=0; i< NBR_MTX; i++){
    lc.shutdown(i,false);
  /* Set the brightness to a low value */
    lc.setIntensity(i,1);
  /* and clear the display */
    lc.clearDisplay(i);
  }
  delay(100);
  lc.clearAll();
  ch0= scrollString[0];
  ch1= scrollString[1];
  ch2= scrollString[2];
  ch3= scrollString[3];
  nextCharIndex=4;
}

void loop(){
  lc.displayChar(0, lc.getCharArrayPosition(ch0));
  lc.displayChar(1, lc.getCharArrayPosition(ch1));
  lc.displayChar(2, lc.getCharArrayPosition(ch2));
  lc.displayChar(3, lc.getCharArrayPosition(ch3));
  ch0=ch1;
  ch1=ch2;
  ch2=ch3;
  ch3=scrollString[nextCharIndex++];
  if (nextCharIndex>=stringLength) nextCharIndex=0;
  delay(300);
  lc.clearAll();
  delay(25);
}
