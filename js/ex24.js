const readline = require('readline-sync');

class Game {
    constructor () {
        this.hp = Math.floor(Math.random() * 10) + 1;
    }

    say(prompt) {
        console.log(prompt);
    }

    die(msg) {
        this.say(msg);
        process.exit(1);
    }

    ask(prompt) {
        console.log(`You have ${this.hp} hit points.`);
        if (this.hp <= 0) {
            this.die("You died!");
        } else {
            return readline.question(prompt + ' ');
            // prompts the user for a question and returns the user's answer
        }
    }

    addRoom(room) {
        this[room.name] = room;
        // this adds the room name as an attribute of the Game object and stores the whole room object inside it
        room.game = this;
        // stores the whole Game object itself inside the attribute of the given room object.
    }

    play(name) {
        this[name].enter();
        // uses the name to select the Room that should be played from all the rooms inside the Game object and enters it.
    }

    hit(amount) {
        this.hp -= amount;
    }
}

class Room {
    constructor(name) {
        this.name = name;
    }
    
    enter() {
        console.log("Implement me!");
    }
}

class Door extends Room {
    enter() {
        // they have to open the door and solve the puzzle to get the gold
        puzzle = `
You hear an alien voice coming from nowhere and everywhere:
"Neither silver, nor copper's gleam,
Cherished by both pauper and queen.
Solve this riddle and pass the door,
What treasure lies ahead, explore."

...you dont'hear the voice again after that.\nMaybe...it's a riddle? You decide to scream your answer:
`
    }
}

class Spider extends Room {
    enter() {
        // they enter here and get -10 hp, they can leave if they survive
    }
}

class Gold extends Room {
    enter() {
        // end of the game, payer wins if they get the gold
    }
}

class Rope extends Room {
    enter () {
        // they are at the bottom of the well
        // they can either take the door to the gold or take a wrong turn to the spider
    }
}

class Well extends Room {
    enter() {
        this.game.say("You are walking through the woods and see a well.");
        this.game.say("Walking up to it and looking down you see a shiny thing at the bottom.");
        let next = this.game.ask("What do you do next?");

        if (next == "climb") {
            this.game.say("You climb down the rope");
            this.game.rope.enter;
        } else if (next == "jump") {
            this.game.say("Yikes! Let's see if you survive!");
            this.game.hit(5);
            this.game.rope.enter();
        } else {
            this.game.say("You can't do that here.");
            this.game.well.enter();
        }
    }
}

let game = new Game();
game.addRoom(new Well("well"));
game.addRoom(new Rope("rope"));
game.addRoom(new Gold("gold"));
game.addRoom(new Spider("spider"));
game.addRoom(new Door("door"));
console.log(Object.entries(game));
game.play("well");