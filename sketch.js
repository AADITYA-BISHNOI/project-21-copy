var thickness,bullet, wall;
var speed, weight;
var deformation;


function setup() {
  createCanvas(600, 800);

  speed = random(55, 90);
  weight = random(400, 1500);
  thickness = random(22,83);


  bullet = createSprite(200, 200, 20, 20);
  bullet.velocityX = speed ;
  //car.bounceOff("wall");
  

  wall = createSprite(500, 200,thickness, 80);
  wall.shapeColor = color(80,80,80);


}

function draw() {
  background(255, 255, 255);

  if (bullet.x - wall.x < wall.width / 2 + bullet.width / 2 &&
    wall.x - bullet.x < wall.width / 2 + bullet.width / 2) {
    
    bullet.velocityX = 0;
    
     damage=0.5*weight*speed*speed/(thickness * thickness * thickness);
    
    if (damage>10){
      wall.shapeColor="green";
    }
    
     if (damage<10){
      wall.shapeColor="red";
    }}

  createEdgeSprites();
  drawSprites();
}