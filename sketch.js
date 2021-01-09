
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var dustbin1,dustbin2,dustbin3;

var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.4
    paper1=new paper(100, 600,10);
    ground=new dustbin(400,680,800,20);
    
	
    dustbin1=new dustbin(550, 625, 20, 100);
	dustbin2=new dustbin(610 , 660, 100,20);
	dustbin3=new dustbin(670,625,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper1.display();
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
 
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper1.body, paper1.body.position, {x:15,y:-13});
    }
}
    






