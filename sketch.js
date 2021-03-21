var bgImage, bg, obstaclesGroup, obstacleImage;
var player, player_running, ground;

function preload(){
bgImage = loadImage("images/Imported piskel.gif");
obstacleImage = loadImage("images/hurdle.png")
player_running = loadAnimation("images/runnerboy.png", "images/runnerboy-1.png", "images/runnerboy-3.png", "images/runnerboy-2.png");
}

function setup(){
var canvas = createCanvas(800, 400);

bg = createSprite(500,200,800,400);
bg.addImage(bgImage);
bg.scale = 3.7;
bg.x=bg.width/2;
bg.velocityX=-4;

player = createSprite(100, 320, 100, 100);
player.addAnimation("running",player_running);

ground = createSprite(100,400,800,40);
ground.visible = false;

obstacles = new Group();
}

function draw(){
background(0);

if(bg.x<200){
    bg.x=bg.width/2; 
  }

  if (keyDown("space") || keyDown("UP_ARROW") && player.y > 275){
    player.velocityY = -15;
  }
  player.velocityY = player.velocityY + 0.8;

  player.collide(ground);

  spawnObstacles();
drawSprites();
}

function spawnObstacles(){
  if (frameCount % 120 === 0) {
    var hurdle = createSprite(800,320,100,100);
    hurdle.addImage(obstacleImage);
    hurdle.scale = 0.3;
    hurdle.velocityX = -6;
  }
}



