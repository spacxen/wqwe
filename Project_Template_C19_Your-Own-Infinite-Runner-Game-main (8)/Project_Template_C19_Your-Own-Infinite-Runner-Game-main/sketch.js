var pro
var egg , eggImg
var obstacles , obstaclesImg
var floor
var obstacle2 , ob2
var obstacle3 , ob3
var obGroup ;
var PLAY = 1;
var END = 0;
var gameState = PLAY ; 
var spr



function preload(){
//loading images
pro = loadImage("pb.gif")
eggImg = loadImage("SEv2.gif")
obstaclesImg = loadImage("yesse.gif")
ob2 = loadImage("we;pro.gif")
ob3 = loadImage("pile.gif")
}

function setup() {
 //create
 floor = createSprite(150,500,1000000000000,20)
 createCanvas(windowWidth-50,windowHeight-1)
 egg = createSprite(150,350,20,20)
egg.addImage(eggImg);
 egg.scale = 0.6;
 egg.setCollider("circle", 0,0,200);
 //egg.debug = true




 
 death() ;

 createEdgeSprites();

}

function draw() {
 //display
 background(pro);
if(gameState === PLAY){
        if(keyDown("UP_ARROW") ){
                egg.y = egg.y-5
                 }
                 if(keyDown("DOWN_ARROW") ){
                    egg.y = egg.y+5
                     }
                
                 if(keyDown("LEFT_ARROW") ){
                        egg.x = egg.x-5
                         }  
                         if(keyDown("RIGHT_ARROW") ){
                            egg.x = egg.x+5
                             }  
                             if(obGroup.isTouching(egg)){
                             gameState = END;
                              }

                              //idea  to make isTouching to Touches
                              //create a sprite to cover the parts that dont work
                              // create a function not a gamestate to reset

spr = createSprite(800000000000,800,500,500)
                              

                            
}

else if(gameState === END){
        egg.visible = false;
       obGroup.destroyEach();
       obGroup.setLifetimeEach(0);
       background(0);
       
       //spr = createSprite(100000000,100000000000,10000000000,100000000000)


}


 

 death()
 drawSprites()
 
}

function death(){
        if(frameCount % 100 === 0){
            
        
        obstacles = createSprite(windowWidth,350,20,20)
        obstacles.velocityX = -5
        obGroup = new Group();
        obGroup.add(obstacles)
        obGroup.lifetime = 300;

       var r = Math.round(random(1,3))
        
       if(r == 1){
        obstacles.addImage(obstaclesImg);
        obstacles.scale = 0.6
       }
       if(r == 2){
        obstacles.addImage(ob2);
        obstacles.scale = 0.6
       }
       if(r == 3){
        obstacles.addImage(ob3);
        obstacles.scale = 0.6

       }

  




        }

}





//e
/*
function obstacles() {
    if (frameCount % 60 === 0){
        var obstacle = createSprite(400,165,10,40);
        obstacle.velocityX = -6;

var rand = Math.round(random(1,6));
switch(rand) {
  case 1: obstacle.addImage(yesse.gif);
          break;
  case 2: obstacle.addImage(yesse.gif);
          break;
  case 3: obstacle.addImage(yesse.gif);
          break;
  case 4: obstacle.addImage(yesse.gif);
          break;
  case 5: obstacle.addImage(yesse.gif);
          break;
  case 6: obstacle.addImage(yesse.gif);
          break;
  default: break;
} 
}
}
*/

