var img;
var img2;
var tet1;
var tet2;
var tet3;
var tet4;
var tet5;
var tet6;
var tet7;
var t;
var e;
var r;
var i;
var s;
var company;
var initials ='nc'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://i.imgur.com/LIsUyKR.png');
  img2 = loadImage('https://i.imgur.com/LJX9Z0p.gif');
  tet1 = loadImage('https://i.imgur.com/58mfxZ4.png');
  tet2 = loadImage('https://i.imgur.com/WTVzaUX.png');
  tet3 = loadImage('https://i.imgur.com/DIc2Efk.png');
  tet4 = loadImage('https://i.imgur.com/CUed5tS.png');
  tet5 = loadImage('https://i.imgur.com/CKmSnCj.png');
  tet6 = loadImage('https://i.imgur.com/pIuA3Ul.png');
  tet7 = loadImage('https://i.imgur.com/w5g96WG.png');
  t = loadImage('https://i.imgur.com/PUg39LG.png');
  e = loadImage('https://i.imgur.com/WJ8ZKFi.png');
  r = loadImage('https://i.imgur.com/keZOVzO.png');
  i = loadImage('https://i.imgur.com/qXrKtLV.png');
  s = loadImage('https://i.imgur.com/etVjXc6.png');
  company = loadImage('https://i.imgur.com/I2ZY209.png');
  
}

function setup() {
createCanvas(600, 400);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' || toolChoice == '1') { // 1 places the tetris piece we pre-loaded
    image(tet5, mouseX, mouseY);
    
  } else if (toolChoice == '2' || toolChoice == '2') { // 2 places the tetris piece we pre-loaded
    image(tet4, mouseX, mouseY);

    stroke(30);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '3' || toolChoice == '3') { // 3 places the tetris piece we pre-loaded
    image(tet1, mouseX, mouseY);
    
  } else if (toolChoice == '4' || toolChoice == '4') { // 4 places the tetris piece we pre-loaded
    image(tet2, mouseX, mouseY);
    
  } else if (toolChoice == '5' || toolChoice == '5') { // 5 places the tetris piece we pre-loaded
    image(tet3, mouseX, mouseY);
    
    
    
    
    // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

    stroke(200);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '7') {

    fill(100, 200, 100);
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '8') {

    fill(300, 100, 0, 80);
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '9') {

    fill(300, 100, 0, 80);
    rect(mouseX, mouseY, 40, 40);
  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);
    
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY);
  } else if (toolChoice == 'f' || toolChoice == 'F') { // f places the gif we pre-loaded
    image(img2, mouseX, mouseY);
     
     
  } else if (toolChoice == 't' || toolChoice == 'T') { // t places the letter
    image(t, mouseX, mouseY);
        
  } else if (toolChoice == 'e' || toolChoice == 'E') { // e places the letter
    image(e, mouseX, mouseY);
        
  } else if (toolChoice == 'r' || toolChoice == 'R') { // r places the letter
    image(r, mouseX, mouseY);
        
  } else if (toolChoice == 'i' || toolChoice == 'I') { // i places the letter
    image(i, mouseX, mouseY);
        
  } else if (toolChoice == 's' || toolChoice == 'S') { // s places the letter
    image(s, mouseX, mouseY);
        
  } else if (toolChoice == 'c' || toolChoice == 'C') { // c places the company symbol thing
    image(company, mouseX, mouseY);
        
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
