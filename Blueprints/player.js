class Player {
    constructor() {
        this.distance = 0;
        this.index = null;
        this.name = null;
    }
    getCount() {
        var count = database.ref("playerCount");
        count.on("value", function (data) {
            playerCount = data.val();
        });
    }
    updateCount(count) {
        database.ref("/").update({
            playerCount: count
        });
    }
    updateProp() {
        var playerIndex = "Players/Player" + this.index;
        database.ref(playerIndex).update({
            Name: this.name,
            Distance: this.distance
        });
    }
    static getPlayerInfo() {
        database.ref("Players").on("value", (data) => {
            allPlayers = data.val();
        });
    }
}