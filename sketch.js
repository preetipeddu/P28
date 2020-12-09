
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree;
var ground;
var stone;
var mango1, mango2, mango3, mango4, mango5, mango6;
var boy, boyImg;
var launcher;

function preload(){
  
  boyImg = loadImage('boy.png');
 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(525,650);
	ground = new Ground(400,650,800,30);
	stone = new Stone(150,400,40);
	mango1 = new Mango(380,330,40);
	mango2 = new Mango(430,240,40);
	mango3 = new Mango(500,180,40);
  mango4 = new Mango(600,190,40);
  mango5 = new Mango(680,240,40);
  mango6 = new Mango(700,330,40);
  
  launcher = new Launcher(stone.body,{x:120,y:560});


  //image(boyImg, 100, 650)
	
	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(255);


  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boyImg ,100,520,100,150);


  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  // boy.display();
  launcher.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);

  
  

   
  drawSprites();
 
}

function detectCollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }
    

  }


function keyPressed(){
 if(keyCode === 32){
	 Matter.Body.setPosition(stone.body, {x:100,y:420});
	 
 }
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
   
}

function mouseReleased(){
   launcher.fly();
  
}



