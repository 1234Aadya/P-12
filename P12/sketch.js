var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaves,appleImg,leavesImg,redImg,red;

function preload(){

  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  
  background(0);
  rabbit.x=World.mouseX;
  
  edges = createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,3))
  if(frameCount % 80 ==0){
  if(select_sprites==1){
    createApples();
  }
  else if(select_sprites==2){
    createLeaves();
  }
  else{
    createRed();
  }

  }

  drawSprites();

}

function createApples(){

  apple = createSprite(random(50,350),40,10,10);
  apple = addImage(appleImg);
  apple.scale = 0.2;
  apple.velocityY = 4;
  apple.lifetime = 200;
  
}

function createLeaves(){

  leaves = createSprite(random(50,350),40,10,10);
  leaves = addImage(leavesImg);
  leaves.scale = 0.1;
  leaves.velocityY = 2;
  leaves.lifetime = 200;

}

function createRed(){

  red = createSprite(random(50,350),40,10,10);
  red = addImage(redImg);
  red.scale = 0.1;
  red.velocityY = 2;
  red.lifetime = 200;

}
