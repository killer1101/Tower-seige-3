const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, holder, ball, ground;

var stand1;
var ball;
var slingShot;
var polygon_image;
var gameState = "onsling";
var backgroundImg;

function preload(){
  polygon_image = loadImage("polygon.png");
  getBackgroundImg();
}
function setup() {
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  base = new Ground(370,300,250,10);
  ground = new Ground(500,400,1000,100)
  


  block1 = new blocks(320,275,30,40);
  block2 = new blocks(340,275,30,40);
  block3 = new blocks(370,275,30,40);
  block4 = new blocks(400,275,30,40);
  block5 = new blocks(430,275,30,40);


  block6 = new blocks(330,235,30,40);
  block7 = new blocks(360,235,30,40);
  block8 = new blocks(390,235,30,40);
  block9 = new blocks(420,235,30,40);


  block10 = new blocks(345,195,30,40);
  block11 = new blocks(375,195,30,40);
  block12 = new blocks(405,195,30,40);
  

  block13 = new blocks(375,155,35,40);

  Poly = new polygon(200,200,40,40)
  rope = new SlingShot(Poly.body,{x: 200, y: 200})

}
function draw() {
  if(backgroundImg){
  background(backgroundImg); 
  }

  textSize(20);
  fill("Green");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();
  base.display();
 
  fill("blue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("Purple");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill("Green");
  block10.display();
  block11.display();
  block12.display();
  
  fill("Gold");
  block13.display();

  Poly.display();


  rope.display();
  

  imageMode(CENTER)
 
}

function mouseDragged(){
  if (gameState !== "launched") {
  Matter.Body.setPosition(Poly.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  rope.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
      rope.attach(Poly.body);
      gameState = "onSling";
  }
}

async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  
  var datetime = responseJSON.datetime;
  
  var hour = datetime.slice(11,13);
  if(hour >=6 && hour <=17) {
    //day Image
    backgroundImg = loadImage("bg.png");
    console.log("loading day image")
    
  }
  else
  {
    //night Image
    backgroundImg = loadImage("bg_2.jpg")
    console.log("loading night image")
  }
} 