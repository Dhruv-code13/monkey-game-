var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200)
ground = createSprite(200,190,1000,15);
    ground.velocityX=-8
  monkey=createSprite(50,160,20,50)
  monkey.scale=0.1
 monkey.addAnimation("running", monkey_running)
  FoodGroup=new Group()
}


function draw() {
  background("cyan")
if(ground.x<0){
  ground.x=ground.width/2
}
  monkey.collide(ground)
  if(keyWentDown("space")){
    monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY+0.8
  stroke("white")
  textSize(10)
  fill("white")
  text("Score:"+score,500,50)
  
   stroke("black")
  textSize(10)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime:"+survivalTime,100,50)
  
  food()
  enemy()
  drawSprites();
}


function food(){
  if(World.frameCount%80===0){
    banana=createSprite(250,120,10,10)
    banana.y = Math.round(random(120,200))
    banana.addImage(bananaImage)
    banana.scale=0.09
    banana.lifetime = 100
    banana.velocityX = -3;
    FoodGroup.add(banana)
    
  }
  
}

function enemy(){
  if(World.frameCount%300===0){
    obstacle=createSprite(250,170,10,10)
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.1
    obstacle.velocityX=-3
     obstacle.lifetime = 100
    monkey.collide(obstacle)
    
  }
}










