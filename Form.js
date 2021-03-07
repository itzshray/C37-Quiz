class Form{
    constructor(){
        this.title = createElement('h1')
        this.title2 = createElement('h2')
        this.title3 = createElement('h2')
        this.title4 = createElement('h2')
        this.option1 = createElement('h2')
        this.option2 = createElement('h2')
        this.option3 = createElement('h2')
        this.option4 = createElement('h2')
        //this.greeting = createElement('h1')
        this.input=createInput()
        this.input2=createInput()
        this.button = createButton('submit')
        this.reset = createButton('reset')
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.title2.hide();
        this.input2.hide()
        this.option1.hide()
        this.option2.hide()
        this.option3.hide()
        this.option4.hide()
    }
    display(){
        this.title.html('Quiz Game')
        this.title2.html('Question: What starts and ends with the letter e, but has only 1 letter')
        this.title3.html('Name:')
        this.title4.html('Answer:')
        this.option1.html('1.Everyone')
        this.option2.html('2.Envelope')
        this.option3.html('3.Estimate')
        this.option4.html('4.Example')
        this.title3.position(displayWidth/2-200, displayHeight/2+7.5)
        this.title4.position(displayWidth/2-200, displayHeight/2+55)
        this.option1.position(displayWidth/2-200,displayHeight/2-140)
        this.option2.position(displayWidth/2-200,displayHeight/2-100)
        this.option3.position(displayWidth/2-200,displayHeight/2-60)
        this.option4.position(displayWidth/2-200,displayHeight/2-20)
        this.title.position(displayWidth/2-200,10)
        this.title2.position(displayWidth/2-200,displayHeight/2-200)
        this.input.position(displayWidth/2-200,displayHeight/2+50)
        this.input2.position(displayWidth/2-200,displayHeight/2+100)
        this.button.position(displayWidth/2-200,displayHeight/2+200)
        this.reset.position(displayWidth/2+200,40)
        this.button.mousePressed(
            ()=>{
                player.name=this.input.value()
                player.answer=this.input2.value()
                playerCount = playerCount+1
                player.index=playerCount
                player.update()
                player.updateCount(playerCount)
                
                

            }
        )
        this.reset.mousePressed(
            ()=>{
         database.ref('/').set({
             gameState:0,playerCount:0,players:null
         })
         location.reload();

            }
        )
}    
}