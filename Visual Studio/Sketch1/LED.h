#pragma once
class LED
{
public:
	LED();
	~LED();
	static void Printeaza();
};

LED::LED()
{
}


LED::~LED()
{
}

void LED::Printeaza()
{
	Serial.println("IT WORKED");
}
