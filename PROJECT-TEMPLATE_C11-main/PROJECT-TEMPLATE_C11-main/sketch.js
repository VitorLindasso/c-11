var seaImg,sea,chipImg,chip;

function preload(){
  seaImg = loadImage ("sea.png");
  chipImg = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  

  

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale = 0.3;
  chip = createSprite (130,20,30,200);
  chip.addAnimation ("gay",chipImg);
  chip.scale = 0.25;
  
}

function draw() {
  background("blue");
  sea.velocityX = -5;
    drawSprites();

 
}
