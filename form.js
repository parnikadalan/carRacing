class Form{
    constructor(){
        this.input = createInput("name")
        this.button = createButton("join")
        this.greeting = createElement("h3")
    }

    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
    display(){
        var title = createElement("h1")
        title.html("car racing game")
        title.position(100,50)
        
        this.input.position(100,150)
        
        this.button.position(100,200)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            
            player.name = this.input.value()
            playerCount = playerCount + 1
            player.index = playerCount
            player.update()
            player.updatePlayerCount(playerCount)
            
            this.greeting.html("hello "+ player.name)
            this.greeting.position(130,160)
        })

    }
}