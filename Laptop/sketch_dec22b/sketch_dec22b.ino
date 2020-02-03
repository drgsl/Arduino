#include <IRremote.h>

const int RECV_PIN = 7;
IRrecv irrecv(RECV_PIN);
decode_results results;
unsigned long key_value = 0;

int Led1 = 5;
int Led2 = 6;
int Buzzer = 3;

int vol = 0;

void setup() {
  Serial.begin(9600);
  irrecv.enableIRIn();
  irrecv.blink13(true);

  pinMode(Led1, OUTPUT);
  pinMode(Led2, OUTPUT);
  pinMode(Buzzer, OUTPUT);
}

void loop() {
  if (irrecv.decode(&results)) {

    if (results.value == 0XFFFFFFFF)
      results.value = key_value;

    switch (results.value) {
      case 0xFFA25D:
        Serial.println("CH-");
        break;
      case 0xFF629D:
        Serial.println("CH");
        break;
      case 0xFFE21D:
        Serial.println("CH+");
        break;
      case 0xFF22DD:
        Serial.println("|<<");
        analogWrite(Buzzer, 0);
        break;
      case 0xFF02FD:
        Serial.println(">>|");
        analogWrite(Buzzer, 255);
        delay(100);
        Serial.println(vol);
        break ;
      case 0xFFC23D:
        Serial.println(">|");
        break ;
      case 0xFFE01F:
        Serial.println("-");
        vol = (vol - 50) % 250;
        break ;
      case 0xFFA857:
        Serial.println("+");
        vol = (vol + 50) % 250;
        break ;
      case 0xFF906F:
        Serial.println("EQ");
        break ;
      case 0xFF6897:
        Serial.println("0");
        break ;
      case 0xFF9867:
        Serial.println("100+");
        break ;
      case 0xFFB04F:
        Serial.println("200+");
        break ;
      case 0xFF30CF:
        Serial.println("1");
        digitalWrite(Led1, LOW);
        break ;
      case 0xFF18E7:
        Serial.println("2");
        digitalWrite(Led2, LOW);
        break ;
      case 0xFF7A85:
        Serial.println("3");
        break ;
      case 0xFF10EF:
        Serial.println("4");
        digitalWrite(Led1, HIGH);
        break ;
      case 0xFF38C7:
        Serial.println("5");
        digitalWrite(Led2, HIGH);
        break ;
      case 0xFF5AA5:
        Serial.println("6");
        break ;
      case 0xFF42BD:
        Serial.println("7");
        break ;
      case 0xFF4AB5:
        Serial.println("8");
        break ;
      case 0xFF52AD:
        Serial.println("9");
        break ;
    }
    key_value = results.value;
    irrecv.resume();
  }
  analogWrite(Buzzer, 100);

}
