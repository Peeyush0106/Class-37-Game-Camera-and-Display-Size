class Form {
    constructor() {
        this.title = createElement('h2');
        this.input = createInput("").attribute("place-holder", "Name");
        this.button = createButton("Play");
        this.greeting = createElement('h2');
    }
    hideForm(){
        this.input.hide();
        this.button.hide();    
        this.title.hide();    
        this.greeting.hide();    
    }
    display() {
        this.title.html("Car Race Game");
        this.title.position(displayWidth - 750, 30);
        this.input.position(displayWidth - 800, displayHeight - 590);
        this.button.position(displayWidth - 600, displayHeight - 590);
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.updateProp(player.name);
            player.updateCount(player.index);
            this.greeting.html("Welcome " + player.name);
            this.greeting.position(displayWidth - 735, 100);
        });
    }
}