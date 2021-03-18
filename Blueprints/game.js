class Game {
    constructor() {
    }
    getState() {
        var state = database.ref("gameState");
        state.on("value", function (data) {
            gameState = data.val();
        });
    }
    updateState(state) {
        database.ref("/").update({
            gameState: state
        });
    }
    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100, 200);
        car2 = createSprite(300, 200);
        car3 = createSprite(500, 200);
        car4 = createSprite(700, 200);
    }
    play() {
        form.hideForm();
        textSize(20);
        fill("blue");
        text("Game starts", 120, 100);

        Player.getPlayerInfo();
        if (allPlayers !== undefined) {
            var displayPosition = 130;
            // for (var i = 0; i < allPlayers.length; i++) 
            for (var p in allPlayers) {
                if (p === "Player" + player.index) {
                    fill("red");
                }
                else {
                    fill("black");
                }
                displayPosition += 20;
                push();
                textSize(15);
                text(allPlayers[p].Name + ": " + allPlayers[p].Distance, 120, displayPosition);
                pop();
            }
        }
        if (player.index !== null && keyIsDown(UP_ARROW)) {
            player.distance += 50;
            player.updateProp();
        }
    }
}