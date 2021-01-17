
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
const Render = Matter.Render;

var stone,M1,M2,M3,M4,M5,M6,M7,M8,M9,M10,boy,tree,launcher1;
var launchingForce = 100;

function preload()
{
	boyImage = loadImage("sprites/boy.png");
	treeImage  = loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world = engine.world;

	
	
	

	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1300,
			height:600,
			wireframes:false
		}
	})
	


	stone = new Stone(80,400,0.5,0.5);
	M1 = new Mango(735,260,20,20);
	M2 = new Mango(700,250,20,20);
	M3 = new Mango(720,200,20,20);
	M4 = new Mango(650,200,20,20);
	M5 = new Mango(740,300,20,20);
	M6 = new Mango(800,260,20,20);
	M7 = new Mango(820,250,20,20);
	M8 = new Mango(600,270,20,20);
	M9 = new Mango(750,100,20,20);
	M10 = new Mango(630,300,20,20);

	var boy = Bodies.rectangle(100,600,50,150);


	var tree = Bodies.rectangle(700,450,50,450);

	launcher1 = new Launcher(stone.body,{x:235,y:620});

	Engine.run(engine);
  
}


function draw() {
	background(230);;

   rectMode(CENTER);
  imageMode(CENTER);
 
  image(boyImage,100,550,150,150);
  image(treeImage,700,350,400,550);

  stone.display();
  M1.display();
  M2.display();
  M3.display();
  M4.display();
  M5.display();
  M6.display();
  M7.display();
  M8.display();
  M9.display();
  M10.display();
  launcher1.display();

  detectollision(stone,M1);
  detectollision(stone,M2);
  detectollision(stone,M3);
  detectollision(stone,M4);
  detectollision(stone,M5);
  detectollision(stone,M6);
  detectollision(stone,M7);
  detectollision(stone,M8);
  detectollision(stone,M9);
  detectollision(stone,M10);
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher1.fly();
   
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lmango){
	
  mangoPosition=lmango.body.position
  stonePosition=lstone.body.position
  
  var distance=dist(stonePosition.x, stonePosition.y, mangoPosition.x, mangoPosition.y)
 
  	if(distance<=lmango.r+lstone.r)
    {
     
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

