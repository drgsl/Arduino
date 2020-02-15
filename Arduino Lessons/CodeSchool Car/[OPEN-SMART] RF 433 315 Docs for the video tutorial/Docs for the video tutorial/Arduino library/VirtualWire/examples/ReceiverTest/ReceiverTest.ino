#include <VirtualWire.h>

int RF_RX_PIN = 2;//connect the sent module to D11 to use
//you can change it to the idle port you want.

String comdata = "";
unsigned char buf[20];
unsigned char buflen = 20;

void setup()
{
  Serial.begin(9600);
  Serial.println("Setup Started");
  vw_set_rx_pin(RF_RX_PIN);  // Setup receive pin.
  vw_setup(2000); // Transmission speed in bits per second.
  vw_rx_start(); // Start the PLL receiver.
  Serial.println("Setup Done");

}

void loop()
{

  if (vw_get_message(buf, &buflen)) // non-blocking I/O
  {
    // Message with a good checksum received, dump HEX
    Serial.print("Got: ");

    for (int i = 0; i < buflen; ++i)
    {
      comdata += buf[i];
      comdata += ' ';
      //Serial.print(" ");
      //Serial.print(buf[i]);
    }
    Serial.println(comdata);
          Separate();
          comdata = " ";
  }
}

void Separate() {
  String wrd = "";
  for (int i = 0; i<comdata.length(); i++) {
    if (comdata[i] == ' ') {
      Serial.println(wrd);
      wrd = "";
    } else {
      wrd += comdata[i];
    }
    //Serial.println(wrd);
  }
}
