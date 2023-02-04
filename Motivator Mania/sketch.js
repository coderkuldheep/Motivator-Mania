
var backgroundImg;
var N_speaker;
var P_speaker;
var walker;




function preload(){
  
  backgroundImg = loadImage("assets/Bg.png");
  N_speaker = loadImage("assets/N_speaker.png")
  P_speaker = loadImage("assets/P_speaker.png")
  walker = loadImage("assets/Walker_1.png, assets/Walker_2.png, assets/Walker_3.png")


}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}


function draw() {
  background(255,255,255);  
  drawSprites();
}