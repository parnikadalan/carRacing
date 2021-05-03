class Game{
    constructor(){

    }
    getState(){
        db.ref("gameState").on("value",function(data){
            gameState = data.val()
        })
    }
    
    updateState(state){
        db.ref("/").update({
            gameState: state
        })
    }

    start(){
        if(gameState === 0){
            player = new Player ()
            player.getPlayerCount()

            form = new Form()
            form.display()
        }
    }

    play(){
        form.hide()
        text('GAME START', 100, 100)
        Player.getPlayerInfo()

        if(allPlayers !== undefined){
            displayPosition = 130
            
        for(var plr in allPlayers){
            if (plr === "player"+player.index){
                fill("red")
            }
            else{
                fill(0)
            }
               text(allPlayers[plr].name + " : "+ allPlayers[plr].distance, 100, displayPosition) 
               displayPosition += 100
            
        }
        if(keyIsDown (UP_ARROW) && player.index == null){
        {   player.distance = -50
            player.update()
        }
        }
        }
    }
}