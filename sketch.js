
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
var roof
var rope1, rope2, rope3, rope4, rope5

function setup() {
	createCanvas(1200, 1000);
	rectMode();

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roofObject= new Roof(400, 250, 230, 20);

	bobObject1 = new bob(320, 575, 40)
	bobObject2 = new bob(360, 575, 40)
	bobObject3 = new bob(400, 575, 40)
	bobObject4 = new bob(440, 575, 40)
	bobObject5 = new bob(480, 575, 40)

	rope1 = new Rope(bobObject1.body, roofObject.body, -80, 0);
	rope2 = new Rope(bobObject2.body, roofObject.body, -40, 0);
	rope3 = new Rope(bobObject3.body, roofObject.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roofObject.body, 40, 0);
	rope5 = new Rope(bobObject5.body, roofObject.body, 80, 0)

	Engine.run(engine);
  
}

function keyPressed () {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-50, y:-45})
	}
}

function draw() {
  rectMode(CENTER);
  background(230);

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


  drawSprites();
 
}