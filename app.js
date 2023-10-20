/* basic-socket-app.js - a super basic webserver */

/* originally based on code from Adam Thomas */
/* modified by Rolf Widenfelt - 2023 */


var http = require('http');
var fs = require('fs');

var indexpage = fs.readFileSync('index.html');

var SerialPort = require("serialport");

const parsers = SerialPort.parsers;
const parser = new parsers.Readline({
    delimiter: '\r\n'
});

/* CONFIGURATION NEEDED */
/* set "arduino_device" to the "port" that your Arduino is using. */
/* if unsure, check the Arduino IDE under Tools/Port. */
/* also, make sure you aren't running the Serial Monitor at the same time. */

arduino_device = '/dev/cu.usbmodem146301';

var port = new SerialPort(arduino_device, {
    baudRate: 115200,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

port.pipe(parser);

// create a simple web server.
// note: this is overly simplified to just handle three files:
// - index.html
// - sketch.js
// - style.css
//
var app = http.createServer(function(req, res) {

    if (req.url == '/' || req.url == '/index.html') { //check the URL of the current request
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(indexpage);
    } else if (req.url == "/sketch.js") {
        let page = fs.readFileSync('sketch.js');
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.end(page);
    } else if (req.url == "/style.css") {
        let page = fs.readFileSync('style.css');
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.end(page);
    } else {
        res.statusCode = 404;
        res.end('Invalid Request!');
    }
});


var io = require('socket.io').listen(app);

io.on('connection', function(data) {

    console.log('Node.js is listening!');

});


parser.on('data', function(data){
    console.log("->", data);
    io.emit('data', data);
});

app.listen(3000);  // access this server with http://localhost:3000/
