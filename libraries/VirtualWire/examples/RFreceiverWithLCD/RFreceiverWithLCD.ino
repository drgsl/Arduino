//Grove - 315(433) RF link kit Demo v1.0


#include <VirtualWire.h>
#include <Wire.h> 
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x38,20,4); 
int RF_RX_PIN = 2;//connect the receive module to D2 to use ..
 
void setup()
{
  
   lcd.init();                      // initialize the lcd 
  // Serial.begin(9600);
  // Print a message to the LCD.
  lcd.backlight();
  lcd.print("RF receiver get:");
  vw_set_rx_pin(RF_RX_PIN);  // Setup receive pin.
  vw_setup(2000); // Transmission speed in bits per second.
  vw_rx_start(); // Start the PLL receiver.
}
 int8_t row=1;
void loop()
{
  lcd.setCursor(0,0);
  String comdata = "";
  uint8_t buf[VW_MAX_MESSAGE_LEN];
  uint8_t buflen = VW_MAX_MESSAGE_LEN;
  if(vw_get_message(buf, &buflen)) // non-blocking I/O
  {
    int i;
    // Message with a good checksum received, dump HEX
   
    for(i = 0; i < buflen; ++i)
    {
      comdata += (char)buf[i];
    //  Serial.print(" ");
	//  Serial.print(buf[i]);
    }
    
  lcd.setCursor(0, row);
	lcd.print(comdata);
    lcd.print(" ");
   if(row > 2){
    row = 0;
  lcd.clear();
  }

  }
}

