var gameState = "levelone"
var knightrunning,knightrunningImage;
var background1,backgroundImage;
var stone,stoneImage
var invisibleGround;
var stonegroup;
var score;
var life;

 function preload(){
    backgroundImage = loadImage("bg1.png")
    knightImage =loadImage("knifing 1.png");
    knightrunningImage=loadAnimation("running1.png","running2.png","running3.png")
    stoneImage = loadImage("stone.png")
    lifeImage = loadImage("life.jpg")

}
 function setup(){
      createCanvas(600,600)

     /* background1=createSprite(0,0,600,600)
      background1.addImage(backgroundImage)
      background1.scale=2*/

      invisibleGround=createSprite(0,600,600,0)
      invisibleGround.visible=false
      knightrunning=createSprite(150,450,50,50)
      knightrunning.addAnimation("run",knightrunningImage)
     knightrunning.scale=0.09

    
    stoneGroup = createGroup();
 }

   

 function draw(){
   //background(0)

   //  background1.velocityX = -4
    /* if(background1.x<0){
        background1.x=background1.width/2
     }*/
     //LEVEL ONE
     if(gameState=="levelone"){
      background(rgb(198,135,103));
      image(backgroundImage,0,0,600,600);

      image(lifeImage,430,100,25,25);
      image(lifeImage,460,100,25,25);
      image(lifeImage,490,100,25,25);
   
      fill("black")
      textSize(40)
      text("Level One",200,50)

      score=0
      fill("black")
      textSize(20)
      text("score"+score,100,50)

     if (score >= 1000){
       gameState="leveltwo"
     }
     if(keyDown("space")&& knightrunning.y >= 100) {
      knightrunning.velocityY = -10;
     }
     knightrunning.velocityY = knightrunning.velocityY + 0.8

      if(stoneGroup.isTouching(knightrunning)&& life == 0){
        gameState="end"
     }
    
}

    knightrunning.collide(invisibleGround)

     spawnstone();
    drawSprites()
 }


  function spawnstone(){

    if(frameCount % 70 === 0){
    var stone = createSprite(600,470,40,40);
    stone.addImage(stoneImage)
    stone.scale=0.1
    stone.velocityX = -(6 + score)
    stoneGroup.add(stone);
     
    }
  }  
 
