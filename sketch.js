const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisonHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
 ground= new Ground(width/2,height-10,width,20)
 for (var i = 0; i<= width;i = i + 80){
   divisions.push (new Division(i , height- divisonHeight/2, 10 , divisonHeight))
 }
 for (var p = 25; p<= width;p = p + 50){
  plinkos.push (new Plinko(p ,75))
}
for (var p = 50; p<= width;p = p + 50){
  plinkos.push (new Plinko(p ,175))
}
for (var p = 25; p<= width;p = p + 50){
  plinkos.push (new Plinko(p ,275))
}
for (var p = 50; p<= width;p = p + 50){
  plinkos.push (new Plinko(p ,375))
}

}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display()
  for (var i = 0; i< divisions.length; i++){
    divisions[i].display();
  }
  for (var p = 0; p< plinkos.length; p++){
    plinkos[p].display();
  }
  if (frameCount%60===0){
  particles.push(new Particle(random(width/2-30,width/2+30),10))
  }

  for (var t = 0; t< particles.length; t++){
    particles[t].display();
  }
}