var trackImg;
var track;
var boyImg, boy;
var left, right;


function preload(){
  //pre-load images
trackImg=loadImage("path.png")
boyImg=loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track=createSprite(200,200);
  track.addImage("path",trackImg);
  track.velocityY=4;
  track.scale= 1.2;

  boy=createSprite(200,300);
  boy.addAnimation("boy", boyImg);
  boy.scale= 0.1;

  left=createSprite(0, 200, 100, 400);
  right=createSprite(400, 200, 100, 400)
  right.visible=false;
  left.visible=false;


}

function draw() {
  background(0);
  boy.x=World.mouseX;
if(track.y > 400){
  track.y =height/2;
}
boy.collide(left);
boy.collide(right);
  drawSprites();
}