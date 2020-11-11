var fixedRect, movingRect,car,wall,car2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car =createSprite(100,200,20,20);
  wall=createSprite(500,200,20,70);
  car2 =createSprite(700,200,20,20);
  car.velocityX=2;
  car2.velocityX= -2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    text("both are touching",500,200);
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    text("both are not touching",500,200);
  }

  bounceOff(car,wall);
  collide(car2,wall);
 

  drawSprites();
}



