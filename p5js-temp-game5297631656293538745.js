// Catch the heckin ball!

var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";
var ballSize2 = 20;
var ballSize3 = 10;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
}

function draw() {
  background(220);
  if(gameState == "L1"){
    levelOne();
  }
  if(gameState == "L2"){
    levelTwo();
  }
  if(gameState == "L3"){
    levelThree();
  }
    if(gameState == "F"){
    LevelFinish();
  }  
  
  text(("Score: " + score),width/2,40);
}

function levelOne(){
  background(0,100,200);
  text("First Level", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
    if(score>=1){
    gameState = "L2";
}
  
    
  line(ballx,bally,mouseX,mouseY);
  ellipse(ballx,bally, ballSize, ballSize);
  
}
  
function levelTwo(){
  background(100);
  text("Second Level- a bit harder...", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/4){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
    if(score>=2){
    gameState = "L3";
}
  
    
  line(ballx,bally,mouseX,mouseY);
  ellipse(ballx,bally, ballSize2, ballSize2);
    
  
}

function levelThree(){
  background(0);  
  text("The Final Level", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/10){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
    if(score>=3){
    gameState = "F";
}
  
    
  line(ballx,bally,mouseX,mouseY);
  ellipse(ballx,bally, ballSize3, ballSize3);
    
  
}

function levelFinish(){
  background(200); 
  text("Success! No more levels", width/2,height-20);
  var distToBall = dist(20,20,mouseX,mouseY);
  if(distToBall < ballSize/10){
    ballx = 20;
    bally = 20;
    score = score + 1;
  }
  
    if(score>=4){
    gameState = "L4";
}
  
    
  line(ballx,bally,mouseX,mouseY);
  ellipse(ballx,bally, ballSize3, ballSize3);
    
  
}
