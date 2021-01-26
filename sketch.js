
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var wall1,wall2,wall3;
var ball

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(350,690,900,10)
	ball = new Paper(300,680,10,10)
	wall1 = new Can(545,650,20,80)
	wall2 = new Can(700,650,20,80)
	wall3 = new Can(622,680,173,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  wall1.display();
  wall2.display();
  wall3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:85,y:-85});
	}
}

