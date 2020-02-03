int LED[] = {2, 3, 4, 5, 6, 7, 8, 9, 10};
void setup()
{
  for (int i = 0; i < 9; i++)
  {
    pinMode(LED[i], OUTPUT);
  }

  pinMode(12, OUTPUT);

}

void loop()
{
  for (int i = 0; i < 9; i++)
  {
    digitalWrite(LED[i], HIGH);
    delay(100);
    digitalWrite(LED[i], LOW);
    if (digitalRead(12) == HIGH )
    {
      if (i == 4)
      {
        for (i = 0; i < 9; i++)
        {
          digitalWrite(LED[i], HIGH);
        }
        delay(3000);
        for (i = 0; i < 9; i++)
        {
          digitalWrite(LED[i], LOW);
        }
        break;
      }
      else
      {
        delay(3000);
        break;
      }
    }
  }
}
