// basic_socket_demo - for CP2 Fall 2023
//
// this "listens" for data that is forwarded by a node JS server.
// it uses socket.io, a JavaScript library.
//
// author: Rolf Widenfelt (c) 2023


let RAD = 50;

let global_hue = 100;

var socket = io();

socket.on('data', function(data){

  //print(data);
  global_hue = data;  // can use parseInt(data) if this doesn't work

});


function setup() {
  createCanvas(340, 340);
  textAlign(CENTER);
}

function draw() {
  colorMode(RGB);
  background(220);
  colorMode(HSB);

  let cx = width/2;
  let cy = height/2;
  
  // draw a colored circle with a text value in it
  noStroke();
  fill(global_hue, 100, 100);
  ellipse(cx, cy, RAD*2);
  
  stroke('black');
  noFill();
  text(str(global_hue), cx, cy);
}


