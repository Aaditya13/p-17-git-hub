var bow;
var ballonBlue;
var ballonRed;
var ballonGreen;
var select_ballon;
var arrow,arrow1,score=0;
var arrowG,redG,greenG,blueG;
function preload(){
 ballon = loadImage("blue_balloon0-1.png")
 ballona=loadImage("red_balloon0.png")
 ballonb=loadImage("green_balloon0.png")
 bow1=loadImage("bow0.png")
 place1=loadImage("background0.png")
 arrow1=loadImage("arrow0.png")
}

function setup() {
 createCanvas(500,400);
  
 background=createSprite(0,0,500,400);
 background.addImage(place1)
 background.scale=2.5;

 bow=createSprite(450,mouseY,20,20)
 bow.addImage(bow1);
 var rand =  Math.round(random(100,400))
 redG=new Group();
 blueG=new Group();
 greenG=new Group();
 arrowG=new Group();
}

function draw() {
 background.velocityX=-2;
 if(background.x<0){
  background.x=background.width/2
  }
 


  var select_ballon= Math.round(random(1,3))
    if(frameCount%100===0){
    if(select_ballon===1){
        greenBallon();
    }else if(select_ballon===2){
      redBallon();
    }else if(select_ballon===3){
             blueBallon();
    }
  }
if (arrowG.isTouching(greenG)){
  arrowG.destroyEach();
  greenG.destroyEach();
  score=score+1
}else if (arrowG.isTouching(redG)){
  arrowG.destroyEach();
  redG.destroyEach();
    score=score+1
}else if (arrowG.isTouching(blueG)){
  arrowG.destroyEach();
  blueG.destroyEach();
    score=score+1
}
 
 bow.y=mouseY;
  if(keyDown("space")){
  goArrow();
  }
 drawSprites();
  text("SCORE:"+score,425,30);
}

function goArrow(){
 arrow=createSprite(450,bow.y,20,20)
 arrow.addImage(arrow1);
 arrow.scale=0.3;
 arrow.velocityX=-5;
  arrow.lifetime=100;
  arrowG.add(arrow);
}
function redBallon(){

  ballonRed=createSprite(50,Math.round(random(100,360)),20,20)
  ballonRed.addImage(ballona);
  ballonRed.scale=0.1;
   ballonRed.velocityX=2;
   ballonRed.lifetime=230;
  redG.add(ballonRed);
}
function blueBallon(){
  
  ballonBlue=createSprite(50,Math.round(random(100,360)),20,20)
  ballonBlue.addImage(ballon);
  ballonBlue.scale=0.1;
    ballonBlue.velocityX=2;
    ballonBlue.lifetime=250;
  blueG.add(ballonBlue);
  
}
function greenBallon(){

  ballonGreen=createSprite(50,Math.round(random(100,360)),20,20)
  ballonGreen.addImage(ballonb);
  ballonGreen.scale=0.1;
    ballonGreen.velocityX=2;
    ballonGreen.lifetime=210;
  greenG.add(ballonGreen);
  
}




