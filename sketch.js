var car, wall, thickness;
var speed, weight;
var car2, wall2;
var car3, wall3;
var car4, wall4;
var speed2, weight2, thickness2;
var speed3, weight3, thickness3;
var speed4, weight4, thickness4;

function setup() {
  createCanvas(1600,1000);
  speed=random(223,321);
  speed2=random(223,321);
  speed3=random(223,321);
  speed4=random(223,321);
  weight=random(30,50);
  weight2=random(30,50);
  weight3=random(30,50);
  weight4=random(30,50);
  thickness=random(10648,571787);
  thickness2=random(10648,571787);
  thickness3=random(10648,571787);
  thickness4=random(10648,571787);
  car=createSprite(50,200,50,50);
  car2=createSprite(50,400,50,50);
  car3=createSprite(50,600,50,50);
  car4=createSprite(50,800,50,50);
  wall=createSprite(1500,200,50,100);
  wall.shapeColor="white";
  wall2=createSprite(1500,400,50,100);
  wall2.shapeColor="white";
  wall3=createSprite(1500,600,50,100);
  wall3.shapeColor="white";
  wall4=createSprite(1500,800,50,100);
  wall4.shapeColor="white";
  car.velocityX = speed;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  car4.velocityX = speed4;
  
  
}

function draw() {
  background("black");  
  
  if (wall.x-car.x < (car.width+wall.width)/2)
    {
      car.velocityX=0;
      var defor = 0.5*weight*speed*speed/thickness;
      if(defor<10)
      {
        wall.shapeColor="green";
      }
      if(defor>=10)
      {
        wall.shapeColor="red";
      }
    }
    if (wall2.x-car2.x < (car2.width+wall2.width)/2)
    {
      car2.velocityX=0;
      var defor2 = 0.5*weight2*speed2*speed2/thickness2;
      if(defor2<10)
      {
        wall2.shapeColor="green";
      }
      if(defor2>=10)
      {
        wall2.shapeColor="red";
      }
    }
    if (wall3.x-car3.x < (car3.width+wall3.width)/2)
    {
      car3.velocityX=0;
      var defor3 = 0.5*weight3*speed3*speed3/thickness3;
      if(defor3<10)
      {
        wall3.shapeColor="green";
      }
      
      if(defor3>=10)
      {
        wall3.shapeColor="red";
      }
    }
    if (wall4.x-car4.x < (car4.width+wall4.width)/2)
    {
      car4.velocityX=0;
      var defor4 = 0.5*weight4*speed4*speed4/thickness4;
      if(defor4<10)
      {
        wall4.shapeColor="green";
      }
      if(defor4>=10)
      {
        wall4.shapeColor="red";
      }
    }
    if (keyDown("r"))
    {
      car.x = 50;
      car2.x = 50;
      car3.x = 50;
      car4.x = 50;
      car.velocityX = speed;
      car2.velocityX = speed2;
      car3.velocityX = speed3;
      car4.velocityX = speed4;
      wall.shapeColor="gray";
      wall2.shapeColor="gray";
      wall3.shapeColor="gray";
      wall4.shapeColor="gray";
      speed=random(55,90);
  speed2=random(55,90);
  speed3=random(55,90);
  speed4=random(55,90);
  weight=random(400,1500);
  weight2=random(400,1500);
  weight3=random(400,1500);
  weight4=random(400,1500);
    }
  drawSprites();
}