// basic-analog-out
// this reads a value from pin A0 and outputs it to the serial port, repeatedly
// author: Rolf Widenfelt 2023

// note: the baud rate set with Serial.begin should match the value in the receiving code

// recommended circuit:
// you can wire up any kind of sensor to the Arduino pin A0 that you like.
// a simple thing to do is to connect a potentiometer where the "slider" pin
// is attached to A0, while the outer pins of the "pot" are attached to +5V and GND.

void setup() {
  Serial.begin(115200);
}

void loop() {
  int analogValue = analogRead(A0);
  Serial.println(analogValue);

  delay(200);
}
