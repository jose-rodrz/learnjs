const readline = require('readline-sync');

class Game {
    constructor () {
        this.hp = Math.floor(Math.random() * 10) + 1;
        this.rooms = {};
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
        this.rooms[room.name] = room;
        room.game = this;
    }

    play(name) {
        this.rooms[name].enter();
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
        let puzzle = `
You hear an alien voice coming from nowhere and everywhere:
"Neither silver, nor copper's gleam,
Cherished by both pauper and queen.
Solve this riddle and pass the door,
What treasure lies ahead, explore."

...you dont'hear the voice again after that.\nMaybe...it's a riddle? You decide to scream your answer:`

    let answer = game.ask(puzzle)
    if (answer == "gold") {
        game.rooms.gold.enter();
    } else {
        game.say("Wrong answer...try again!");
        game.rooms.door.enter();
    }
    }
}

class Spider extends Room {
    enter() {
        game.hit(5);
        let scenario = "You go into the path and find out it's a dark tunnel.\nYou keep walking and see something shiny...you get closer...and it's a giant spider!\nIt bites you and...";

        if (game.hp <= 0) {
            game.die(scenario + "you die.\nYou are dead and have lost the game.");
        }
        else {
            game.say(scenario + "you pass out for a moment but when you regain consciousness the giant spider is gone and there's nothing to do besides going back.");
            game.rooms.rope.enter();   
        }
    }
}

class Gold extends Room {
    enter() {
        game.say("Your answer was correct...you hear a click and the door opens.\nYou go through the door and pickup the gold.\n*****You've won the game!!!!*****");
    }
}

class Rope extends Room {
    enter () {
        if (this.hp <= 0) {
            game.die("You didn't survive. You are dead!");
        } else {
            game.say("You survived!");
        }
        
        let txt = "You are at the bottom of the well.\nYou see a door in front of you and a path to the side. Which way do you want to go?"
        let way = game.ask(txt);
    
        if (way == "door") {
            game.rooms.door.enter();
        } else if (way == "path") {
            game.rooms.spider.enter();
        } else {
            game.say("That's not an option here. Try again!");
            game.say("-----------------------")
            game.rooms.rope.enter();
        }
    }
}

class Well extends Room {
    enter() {
        this.game.say("You are walking through the woods and see a well.");
        this.game.say("Walking up to it and looking down you see a shiny thing at the bottom.");
        let next = this.game.ask("What do you do next?");

        if (next == "climb") {
            this.game.say("You climb down the rope");
            this.game.rooms.rope.enter();
        } else if (next == "jump") {
            this.game.say("Yikes! Let's see if you survive!");
            this.game.hit(5);
            this.game.rooms.rope.enter();
        } else {
            this.game.say("You can't do that here.");
            this.game.rooms.well.enter();
        }
    }
}

let game = new Game("well", "rope", "gold", "spider", "door");
game.addRoom(new Well("well"));
game.addRoom(new Rope("rope"));
game.addRoom(new Gold("gold"));
game.addRoom(new Spider("spider"));
game.addRoom(new Door("door"));
//console.log(Object.entries(game));
game.play("well");