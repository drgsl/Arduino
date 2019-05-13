#pragma once
class LEDMatrix
{
public:
	LEDMatrix();
	~LEDMatrix();
	static void Snake1 (int DelaySpeed);
};



LEDMatrix::LEDMatrix()
{
}


LEDMatrix::~LEDMatrix()
{
}

void LEDMatrix::Snake1(int DelaySpeed) {
	//CleanScreen();
	for (int i = 0; i <= 4; i++) {
		if (i % 2 == 0) {
			for (int j = 3; j >= 0; j--) {
				TurnOn(ledarray[i][j]);
				delay(DelaySpeed);
			}
		}
		else {
			for (int j = 0; j <= 3; j++) {
				TurnOn(ledarray[i][j]);
				delay(DelaySpeed);
			}
		}
	}
	Snake1Clean(DelaySpeed / 2);
}


void Snake1Clean(int DelaySpeed) {
	for (int i = 4; i >= 0; i--) {
		if (i % 2 == 0) {
			for (int j = 0; j <= 3; j++) {
				TurnOff(ledarray[i][j]);
				delay(DelaySpeed);
			}
		}
		else {
			for (int j = 3; j >= 0; j--) {
				TurnOff(ledarray[i][j]);
				delay(DelaySpeed);
			}
		}
	}
	Snake1(DelaySpeed * 2);
}

void TurnOn(int n) {

	if (n < 0) {
		int index = ((-1 * n) - 1);
		//Serial.println(index);
		bitSet(leds, index);
		updateShiftRegister();
	}
	else {
		digitalWrite(n, HIGH);
	}
}

void TurnOff(int n) {
	if (n < 0) {
		int index = ((-1 * n) - 1);
		//Serial.println(index);
		bitClear(leds, index);
		updateShiftRegister();
	}
	else {
		digitalWrite(n, LOW);
	}
}


void updateShiftRegister() {
	digitalWrite(latchPin, LOW);
	shiftOut(dataPin, clockPin, LSBFIRST, leds);
	digitalWrite(latchPin, HIGH);
}
