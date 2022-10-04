/* basic-socket */

/* setup super basic webserver */
var http = require('http');
var fs = require('fs');

var indexpage = fs.readFileSync('index.html');

var SerialPort = require("serialport");

const parsers = SerialPort.parsers;
const parser = new parsers.Readline({
    delimiter: '\r\n'
});

/* for an Arduino on my macmini, port is '/dev/cu.usbmodem142201' */

var port = new SerialPort('/dev/cu.usbmodem142201',{
    baudRate: 115200,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

port.pipe(parser);


var app = http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(indexpage);
});


var io = require('socket.io').listen(app);

io.on('connection', function(data) {

    console.log('Node.js is listening!');

});


parser.on('data', function(data){
    // console.log(data);
    io.emit('data', data);
});

app.listen(3000);
