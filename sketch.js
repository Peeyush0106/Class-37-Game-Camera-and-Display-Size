var database;

// Important contents of the Game
var form, game, player;

var playerCount = 0;

var gameState = 0;

var allPlayers;

var car1, car2, car3, car4;
var cars;

function setup() {
    var canvas = createCanvas(displayWidth - 20, displayHeight - 20);
    canvas.position(-210, -100);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw() {
    background("red");
    if (playerCount === 4) {
        gameState = 1;
    }
    if (gameState === 1) {
        clear();
        game.play();
    }
}