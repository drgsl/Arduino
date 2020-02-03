/*Multi-Dimensional Array AKA Matrix
 
 This sketch demonstartes the use of a multi-dimensional array
 
 to control 9 LEDs formed into a matrice.
 
 The circuit:
 
 * 9 LEDs connected from pins 2 through 10 (through 220-Ohm resistors) to ground
 
 shaped into a 3 by 3 matrix.
 
 Created 11 October 2012
 
 By Michael James
 
 https://programmingelectronics.com
 
 This example code is in the public domain.
 
 */

//the matrix will hold the pin assignments for the led

int pinMatrix[4][4] = {

  {2,  3,  4  },

  {5,  6,  7  },

  {8,  9, 10  },

  {11, 12, 13 }
};

int total = 4;

void setup() {

  //use a nested for loop to initialize all the pins

  for(int i = 0; i < total; i++){

    for(int j = 0; j < total; j++){

      pinMode(pinMatrix[i][j], OUTPUT);

    }//close for i

  }//close for j

} //close setup()

void loop() {

  //this nested for loop will turn each LED on and off in sequence
//
//  for(int i = 0; i < total; i++){
//
//    for(int j = 0; j < total; j++){
//
//      digitalWrite(pinMatrix[i][j], HIGH);
//
//      delay(100);
//
//      digitalWrite(pinMatrix[i][j], LOW);
//
//    }//close for i
//
//  }//close for j

} //close loop()
