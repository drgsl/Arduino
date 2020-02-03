int Pini[] = {3, 4, 5, 6, 7, 8, 9, 10, 11, 12};
int Pini2[] = {13, 16, 17, 18, 19};

// Arduino pin numbers
const int SW_pin = 2; // digital pin connected to switch output
const int X_pin = A0; // analog pin connected to X output
const int Y_pin = A1; // analog pin connected to Y output

void setup() {
  // put your setup code here, to run once:
  for (int i = 0; i < 10; i++) {
    pinMode(Pini[i], OUTPUT);
  }
  for (int i = 0; i < 5; i++) {
    pinMode(Pini2[i], OUTPUT);
  }
  pinMode(SW_pin, INPUT);
  digitalWrite(SW_pin, HIGH);
  Serial.begin(115200);
}

void loop() {

  Serial.print("Switch:  ");
  Serial.print(digitalRead(SW_pin));
  Serial.print("\n");
  Serial.print("X-axis: ");
  Serial.print(analogRead(X_pin));
  Serial.print("\n");
  Serial.print("Y-axis: ");
  Serial.println(analogRead(Y_pin));
  Serial.print("\n\n");

  // put your main code here, to run repeatedly:

  if (analogRead(Y_pin) <400) {
    if (analogRead(X_pin) > 600) {
      for (int i = 0; i < 10; i++) {
        digitalWrite(Pini[i], HIGH);
        if (digitalRead(SW_pin) == 0) {
          break;
        }
        delay(100);
        digitalWrite(Pini[i], LOW);
      }
    }

    if (analogRead(X_pin) < 400) {
      for (int i = 9; i >= 0; i--) {
        digitalWrite(Pini[i], HIGH);
        if (digitalRead(SW_pin) == 0) {
          break;
        }
        delay(100);
        digitalWrite(Pini[i], LOW);
      }
    }
  }



  if (analogRead(Y_pin) > 600) {
    if (analogRead(X_pin) > 600) {
      for (int i = 0; i < 5; i++) {
        digitalWrite(Pini2[i], HIGH);
        if (digitalRead(SW_pin) == 0) {
          break;
        }
        delay(200);
        digitalWrite(Pini2[i], LOW);
      }
    }

    if (analogRead(X_pin) < 400) {
      for (int i = 4; i >= 0; i--) {
        digitalWrite(Pini2[i], HIGH);
        if (digitalRead(SW_pin) == 0) {
          break;
        }
        delay(200);
        digitalWrite(Pini2[i], LOW);
      }
    }
  }
}
