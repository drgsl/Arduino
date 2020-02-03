import processing.serial.*;
import controlP5.*;

ControlP5 cp5;
DropdownList d1;

String portName;
int serialListIndex;

Serial myPort;  // Create object from Serial class
String val;     // Data received from the serial port


PFont mono;

  String CurrentText = "Clock";

void setup()
{
  clear();
  size(900, 200);

  cp5 = new ControlP5(this);

  PFont pfont = createFont("Arial", 10, true); //Create a font
  ControlFont font = new ControlFont(pfont, 20); //font, font-size

  d1 = cp5.addDropdownList("myList-d1")
    .setPosition(0, 0)
    .setSize(100, 200)
    .setHeight(210)
    .setItemHeight(40)
    .setBarHeight(50)
    .setFont(font)
    .setColorBackground(color(60))
    .setColorActive(color(255, 128))
    ;

  d1.getCaptionLabel().set("PORT"); //set PORT before anything is selected

  portName = "COM6"; //Serial.list()[3]; //0 as default
  myPort = new Serial(this, portName, 57600);


  mono = createFont("advanced_dot_digital-7.ttf", 50);
}


void draw()
{

  background(0);

  if (d1.isMouseOver()) {
    d1.clear(); //Delete all the items
    for (int i=0; i<Serial.list().length; i++) {
      d1.addItem(Serial.list()[i], i); //add the items in the list
    }
  }
  if ( myPort.available() > 0) {  //read incoming data from serial port
    println(myPort.readStringUntil('\n')); //read until new input
  }    

  int len = width/3 - 100/3;
  color c = color(255, 191, 252);
  boolean Border0 = (mouseX > 100 && mouseX < len + 100);
  boolean Border1 = (mouseX > 100 + len && mouseX < 100 + 2*len);
  boolean Border2 = (mouseX > 2 * len + 100 && mouseX < width);

  if (Border0) {
    fill(c);
    if (mousePressed == true) {
      myPort.write('0');
      //println("Clock");
      CurrentText = "Clock";
    }
  } else {
    fill(255);
  }

  rect( 100, 0, len, height);



  if (Border1) {
    fill(c);
    if (mousePressed == true) {
      myPort.write('1');
      //println("Date");
      CurrentText = "Date";
    }
  } else {
    fill(255);
  }

  rect( 100 + len, 0, len, height);



  if (Border2) {
    fill(c);
    if (mousePressed == true) {
      myPort.write('2');
      //println("Temperature & Humidity");
      CurrentText = "Temperature \n & Humidity";
    }
  } else {
    fill(255);
  }

  rect( 100 + 2* len, 0, len, height);


  fill(0);
  textSize(150);
  textFont(mono);
  textAlign(CENTER, CENTER);
  text("Clock", 100 + len / 2, height/2);
  text("Date", 100 + len + len / 2, height/2);
  textSize(25);
  text("Temperature \n & Humidity", 100 + 2* len + len / 2, height/2);
  
  fill(255);
    textSize(10);
  text (CurrentText, 100 /2, height/2);
}

void controlEvent(ControlEvent theEvent) { //when something in the list is selected
  myPort.clear(); //delete the port
  myPort.stop(); //stop the port
  if (theEvent.isController() && d1.isMouseOver()) {
    portName = Serial.list()[int(theEvent.getController().getValue())]; //port name is set to the selected port in the dropDownMeny
    myPort = new Serial(this, portName, 57600); //Create a new connection
    println("Serial index set to: " + theEvent.getController().getValue());
    delay(2000);
  }
}



//void ReadFromArduinoSerial() {
//  if ( myPort.available() > 0) 
//  {  // If data is available,
//    val = myPort.readStringUntil('\n');         // read it and store it in val
//  } 
//  println(val); //print it out in the console
//}


//void WriteToArduinoSerial1() {
//  if (mousePressed == true) 
//  {                           //if we clicked in the window
//    myPort.write('1');         //send a 1
//    println("1");
//  } else 
//  {                           //otherwise
//    myPort.write('0');          //send a 0
//    println("0");
//  }
//}
