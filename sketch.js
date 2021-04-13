/* man:sprite-animation 
rocks : ground.js-array-colour
ores : bird.js - array- colour
mining device- slingshot.js
score:
 */

/* character-treasurer
npc-bomb
story-clear the cave
goals- hit every rock with the same colour
rules-if the colour of the rocks are not same, u lose
balance-u can hit the rocks or u may not
adaptivity-get a extra life for hitting the golden rock
chance vs skill- they randomness of rock
feedback-score */

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var PLAY = 1;
var END = 0;
var gameState= PLAY;

var blueOreImg,blueStoneImg,greenOreImg,greenStoneImg,goldOreImg;
var goldStoneImg,redOreImg,redStoneImg,yellowOreImg,yellowOreImg;
var bgImage,blueGroup,greenGroup,redGroup,yellowGroup;
var score = 0;

function preload() {
  blueOreImg = loadImage("BLUE ore.png"); 
  redOreImg = loadImage("RED ore.png");
  greenOreImg = loadImage("GREEN ore.png"); 
  yellowOreImg = loadImage("YEllOW ore.png");
  goldOreImg = loadImage("GOLD ore.png");

  redStoneImg = loadImage("RED stone.png");
  blueStoneImg = loadImage("BLUE stone.png");
  greenStoneImg = loadImage("GREEN stone.png");
  goldStoneImg = loadImage("GOLD stone.png");
  yellowStoneImg = loadImage("YELLOW stone.png");

  bgImage = loadImage("BACKGROUND.png");
}

function setup(){
    var canvas = createCanvas(350,900);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    blueOre1= new blueOre(100,0);
    blueOre2= new blueOre(250,0);
    blueOre3= new blueOre(0,50);
    blueOre4= new blueOre(100,50);
    blueOre5= new blueOre(200,50);
    blueOre6= new blueOre(100,100);
    blueOre7= new blueOre(300,100);
    blueOre8= new blueOre(100,150);
    blueOre9= new blueOre(250,150);
    blueOre10= new blueOre(150,200);
    blueOre11= new blueOre(0,250);
    blueOre12= new blueOre(50,300);
    blueOre13= new blueOre(300,300);
    blueOre14= new blueOre(150,350);
    blueOre15= new blueOre(50,400);

    redOre1= new redOre(150,0);
    redOre2= new redOre(50,50);
    redOre3= new redOre(300,50);
    redOre4= new redOre(250,100);
    redOre5= new redOre(50,150);
    redOre6= new redOre(150,150);
    redOre7= new redOre(0,200);
    redOre8= new redOre(100,200);
    redOre9= new redOre(200,200);
    redOre10= new redOre(300,200);
    redOre11= new redOre(150,250);
    redOre12= new redOre(200,300);
    redOre13= new redOre(0,350);
    redOre14= new redOre(250,350);
    redOre15= new redOre(100,400);

    greenOre1= new greenOre(50,0);
    greenOre2= new greenOre(150,50);
    greenOre3= new greenOre(0,100);
    greenOre4= new greenOre(200,100);
    greenOre5= new greenOre(0,150);
    greenOre6= new greenOre(100,150);
    greenOre7= new greenOre(250,200);
    greenOre8= new greenOre(50,250);
    greenOre9= new greenOre(300,250);
    greenOre10= new greenOre(100,300);
    greenOre11= new greenOre(150,300);
    greenOre12= new greenOre(250,300);
    greenOre13= new greenOre(300,350);
    greenOre14= new greenOre(150,400);
    greenOre15= new greenOre(250,400);

    yellowOre1= new yellowOre(0,0);
    yellowOre2= new yellowOre(200,0);
    yellowOre3= new yellowOre(250,50);
    yellowOre4= new yellowOre(50,100);
    yellowOre5= new yellowOre(200,150);
    yellowOre6= new yellowOre(300,150);
    yellowOre7= new yellowOre(50,200);
    yellowOre8= new yellowOre(100,250);
    yellowOre9= new yellowOre(200,250);
    yellowOre10= new yellowOre(0,300);
    yellowOre11= new yellowOre(100,350);
    yellowOre12= new yellowOre(200,350);
    yellowOre13= new yellowOre(0,400);
    yellowOre14= new yellowOre(200,400);
    yellowOre15= new yellowOre(300,400);

    goldOre1= new goldOre(150,100);
    goldOre2= new goldOre(250,250);
    goldOre3= new goldOre(50,350);

    

    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();
    console.log(bird.body.speed);    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 1){
       bird.trajectory = [];
       Matter.Body.setPosition(bird.body,{x:200, y:50});
       slingshot.attach(bird.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}