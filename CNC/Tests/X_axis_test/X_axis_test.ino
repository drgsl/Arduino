/*
  Mini Traceur Arduino (CNC Plotter)
  Test X Axis
  Projets DIY 02/2016
*/
#include <Stepper.h>      // Include the stepper Motor librarie 

const int pasParRotation = 20;          // Number of steps by turn. Standard value for CD/DVD
 
// Indicate X axis stepper motor Pins 
Stepper myStepperX(pasParRotation, 8,9,10,11); 
 
void setup() {
 myStepperX.setSpeed(1000);    // Stepper motor speed
 // Indicate the number of steps the drive need to do. 
 // CD/DVD drive can do about 250 steps max.
 // Negative number to reverse direction of the movement
 myStepperX.step(-250);            // Measure the distance the pencil move to calculate X calibration value  
 //delay(100);
}
 
void loop() {}
