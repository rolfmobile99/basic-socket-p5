# basic-socket-p5
Simple NodeJS server to relay messages from a serial port device (e.g. Arduino) to a P5 sketch (webpage)

![breadboard](images/pot-to-arduino-breadboard-sm.png) ![P5 output](images/basic-socket-p5-output.png)

## Credits
Much of the socket.io-related code is from this excellent tutorial by Adam Thomas:

[Communicating from an Arduino to an HTML/JavaScript Webpage]
(https://www.youtube.com/watch?v=gQYsUjT-IBo)

## Overview

This setup allows a simple analog input on an Arduino to control
some aspect of a P5 sketch.  In this case, just the color of a filled circle.
It is just a simple demonstration. You are encouraged to add more features.


## Dependencies

This project requires **node** to run.
Instructions for installing it are here:
```
https://nodejs.dev/en/
```

Once **node** is installed, you will need to fetch the necessary packages, which are
described in `package.json`.
Run **npm** in the same directory where the files are:
```
npm install
```

If that works, then you are ready to run this demo.

## Instructions

Start your Arduino with the sketch called **basic-analog-out**.
Of course, the USB cable needs to stay connected to your computer.

Then, start node server with:
```
node app.js
```

Then, start a web browser to view the results:
Visit this URL:
```
http://localhost:3000/
```
