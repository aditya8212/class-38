class FORM{
    constructor(){
        this.input = createInput("Name");
        this.button= createButton("play");
        this.gree = createElement('h3');
        this.title =  createElement('h2')
    }

    hide1(){
        this.button.hide();
        this.gree.hide();
        this.input.hide();
        this.title.hide();
    }
    
    display(){
        this.title.html("Car Racing")
        this.title.position(displayWidth/2-50,0);
        
        this.input.position(displayWidth/2-40,displayHeight/2-60);
        
        this.button.position(displayWidth/2+30,displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount+1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            
            this.gree.html("hello "+player.name);
            this.gree.position(displayWidth/2-50,displayHeight/4);
        })


    }

}