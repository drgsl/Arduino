#pragma once

class Symbols
{
  public:
    Symbols(); // Constructor
    ~Symbols();
    void Print(char litera)
    {
      Serial.println(litera);
      //Main::TurnOn(3);
    }
};



Symbols::Symbols()
{
}


Symbols::~Symbols()
{
}
