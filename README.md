# basic-socket-app
Simple NodeJS server to relay messages from a serial port device (e.g. Arduino) to a web page

## Credits
Much of what is here is based on code from this excellent tutorial by Adam Thomas:

[Communicating from an Arduino to an HTML/JavaScript Webpage]
(https://www.youtube.com/watch?v=gQYsUjT-IBo)

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
