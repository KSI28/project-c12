var garden,rabbit,apple;
var gardenImg,rabbitImg;
var select_sprites = Math.round(Math.random(1,2));

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}


//function createApple()
//{
//apple = createSprite(random(50,350),40,10,10);
//}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

// Create Sprites for apple and leaf


if(frameCount%80 == 0)
{
  if (select_sprites == 1) {
apple = createSprite(Math.random(50,350),40,10,10);
apple.scale = 0.05;
apple.addImage(appleImg);

apple.velocityY = 2;
apple.lifetime =80;
 // }

 leaf = createSprite(180,200,180,200);
leaf.scale = 0.05;
leaf.addImage(leafImg);

leaf.velocityY = 2;
leaf.lifetime =80;
  }

}

}



function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  if (mouseIsPressed){
  rabbit.velocityX = 4;
}
}

