int redPin = 5, bluePin = 3, greenPin = 6;
int selected;
int leds[] = {redPin, greenPin, bluePin};
String Colors[] = {"Red","Blue","Green","Pink","Yellow", "BlueishGreen"};

int sound;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  analogWrite(redPin, 0);
  analogWrite(greenPin, 0);
  analogWrite(bluePin, 0);
  randomSeed(analogRead(A1));
}

void loop() {
//  // put your main code here, to run repeatedly:
//  sound = digitalRead(A0);
//  Serial.println(sound);
//  if (sound == 1) {
//    ColorLeds(random(255), random(255), random(255));
//    delay(100);
//  }
//  if (sound == 0) {
//    //ColorLeds(selected);
//    //ColorLeds(random(50), random(50), random(50));
//        ColorLeds(0,0,0);
//  }


SoundTest();
}

void ColorLeds(int r, int g, int b) {
  analogWrite(redPin, r);
  analogWrite(greenPin, g);
  analogWrite(bluePin, b);
}

void ColorLeds(String ColorName) {
  if (ColorName == "Red") {
    ColorLeds(255, 0, 0);
  }
    if (ColorName == "Blue") {
    ColorLeds(0, 0, 255);
  }
    if (ColorName == "Green") {
    ColorLeds(0,255,0);
  }
    if (ColorName == "Yellow") {
    ColorLeds(255, 255, 0);
  }
    if (ColorName == "BlueishGreen") {
    ColorLeds(0, 255, 255);
  }
delay(20);
}

void SoundTest() {
  sound = digitalRead(A0);
  Serial.println(sound);
  if (sound == 1) {
    analogWrite(selected, 255);
  }
  if (sound == 0) {
    analogWrite(selected, 0);
    selected = leds[random(3)];
  }
}
