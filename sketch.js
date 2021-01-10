var form,player,game,canvas;
var database;
var gameState  = 0;
var playerCount;
var allPlayers;
var cars,car1,car2,car3,car4;

function setup(){
    database = firebase.database();
    canvas = createCanvas(displayWidth-20,displayHeight-30);
    game = new GAME();
    game.getState();
    game.start();

}

function draw(){
    //background("white");
    if(playerCount === 4)
        game.update(1);

    if(gameState === 1){
        clear();
        game.play();
    }
}


//.ref = refer to a location of the database value;
//.on = it moniters the value of database;
//.set = used to set the values in the database;
//.update = used to update the values in the database;
//.val = to extract the values of the database;