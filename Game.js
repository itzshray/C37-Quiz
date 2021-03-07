class Game{
    constructor(){

    }
    getState(){
var gameStateref=database.ref('gameState')
gameStateref.on('value',function(data){
  gameState=data.val();  
})
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
     async start(){
        if(gameState===0){
            player=new Player()
            var playerCountRef=await database.ref('playerCount').once('value')
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount()
            }
            form=new Form()
            form.display();
    
        }
        
    }
    play(){
        background('pink')
        text("Results:",200,200)
        form.hide();
        textSize(21)
        Player.getPlayerInfo()
        if(allPlayers!==undefined){
        var position=200
        for(var x in allPlayers){
            var answer='2'
            if (answer===allPlayers[x].answer){
                fill ('green')
            }
            else{
                fill ('red')
            }
            text(allPlayers[x].name+": Answer: " + allPlayers[x].answer,200,position)
            position+=50
        }
               
            }
        }
        
    
}