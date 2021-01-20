const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball, ground
var engine,world


function setup() {
  createCanvas(800,400);
engine = Engine.create();
world = engine.world;
var options = {
 restitution: 1.0
}
ball = Bodies.circle(40,40,20,options);
var groundoptions = {
  isStatic: true
}
ground = Bodies.rectangle(400,390,800,4, groundoptions);

World.add(world,ground);
World.add(world,ball);
 
}

function draw() {
  background(255,255,255);  
 Engine.update(engine);
 rectMode(CENTER);
 rect(ground.position.x,ground.position.y, 800,4);
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);

}