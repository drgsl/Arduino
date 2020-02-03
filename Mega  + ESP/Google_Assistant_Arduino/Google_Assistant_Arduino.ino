String inputString = "";         // a String to hold incoming data
String buff;
bool stringComplete = false;  // whether the string is complete
bool id;
int f, buf;

char firstChar;
bool GotFirstChar = false;
void setup() {
  // initialize serial:
  Serial.begin(115200);
  // reserve 200 bytes for the inputString:
  inputString.reserve(200);
}
void loop() {
  // print the string when a newline arrives:
  if (stringComplete) {
    switch (firstChar) {
      case 'a':
        buf = inputString.toInt();
        Serial.println(buf);
        analogWrite(9, buf);
        break;
          case 'b':
        Serial.println(inputString);
        break;
          case 'c':
        Serial.println(inputString);
        break;
    }
    inputString = "";
    stringComplete = false;
    GotFirstChar = false;
  }
}
void serialEvent() {
  while (Serial.available()) {
    // get the new byte:
    char inChar = (char)Serial.read();
    if (!GotFirstChar) {
      firstChar = inChar;
      GotFirstChar = true;
    }
    else {
      // add it to the inputString:
      inputString += inChar;
      Serial.println("inputString :  " + inputString);
      // if the incoming character is a newline, set a flag so the main loop can
      // do something about it:
    }
    if (inChar == '\n') {
      stringComplete = true;
    }
  }
}

/*
   if (stringComplete) {
     while (f < 100)
     { if (inputString.substring(f) == "id")
       {
         id = true;
         //break;
       } f++;
     }
     if (id == true)
     {
       x = inputString.charAt(f + 4);
     }
     if (x == '4')
     { f = 0;
       while (f < 100)
       { if (inputString.substring(f) == "number")
         { f += 9;
           for (int i = 0; i < 3; i++)
           { if (inputString.charAt(f + i) == '"') i = 3;
             else buff += inputString.charAt(f + i);
           }
           Serial.println(buff);
           buf = buff.toInt();
                    Serial.println(buf);
           analogWrite(9, buf);
           break;
         }
         f++;
       }
     }
     // clear the string:
     inputString = "";
     stringComplete = false;
   }
*/
