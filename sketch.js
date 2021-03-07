var canva;
var playerCount,database,game,game,form,player;
var gameState=0
var allPlayers=[]

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database=firebase.database();
  game=new Game();
  game.getState();
  game.start();
}


function draw(){
  background("pink");
if (playerCount===2){
  game.update(1)
}
if (gameState==1){
  clear();
  game.play();
}

  
}
