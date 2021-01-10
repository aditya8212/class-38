class GAME{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();

        })
    }

    update(state){
        database.ref('/').update({
            'gameState':state
        })
    }

    start(){
        if(gameState === 0){
            player = new PLAYER();
            player.getCount()
            form = new FORM();
            form.display();

        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1,car2,car3,car4];

    }

    play(){
        form.hide1();
        //textSize(30);
        //text("game started",120,100);

        PLAYER.getPlayerInfo();

        if(allPlayers !== undefined){

            var index = 0;
            var x = 0;
            var y;
            //var dp = 130;
            for(var plr in allPlayers){
                index = index+1;
                x = x+200;
                y = displayHeight-allPlayers[plr].distance
                
                cars[index-1].x = x;
                cars[index-1].y = y;

                if(index=== +player.index){
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y
                }
                //dp=dp+20;
                //textSize(20);
                //text(allPlayers[plr].name + ":" + allPlayers[plr].distance,120,dp);

            }
        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance+=50;
            player.update();
        }

        drawSprites();
    }

}