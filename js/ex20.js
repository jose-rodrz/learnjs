const readline = require('readline-sync');

const say = (prompt) => {
    console.log(prompt);
}

const die = (message) => {
    say(message);
    process.exit(1);
}

const ask = (hp, prompt) => {
    console.log(`[[You have ${hp} hit points.]]`);
    if (hp <= 0) {
        die('You died!');
    } else {
        return readline.question(prompt + ' ');
    }
}

const door = (hp) => {
    puzzle = "Puzzle text";
    let answer = ask(hp, puzzle);

    if (answer == "correct") {
        gold(hp);
    } else {
        say("Wrong answer...try again!");
        door(hp);
    }

}

const spider = (hp) => {
    // -10 hp, they can leave if they survive
    // substract 10 hp then if they survive go back to the bottom of the well.
}

const gold = (hp) => {
    say("Your answer was correct...you hear a click and the door opens.\nYou go through the door and pickup the gold.\n*****You've won the game!!!!*****");
}

const rope = (hp) => {
    if (hp <= 0) {
        die("You didn't survive. You are dead!");
    } else {
        say("You survived!");
    }
    
    let txt = "You are at the bottom of the well.\nYou see a door in front of you and a path to the side. Which way do you want to go?"
    let way = ask(hp, txt);
    console.log(way);

    if (way == "door") {
        door(hp);
    } else if (way == "path") {
        spider(hp);
    } else {
        say("That's not an option here. Try again!");
        say("-----------------------")
        rope(hp);
    }
}

const well = (hp) => {
    say("You are walking through the woods and see a well.");
    say("Walking up to it and looking down you see a shiny thing at the bottom.");
    let next = ask(hp, "What do you do?");

    if (next == "climb") {
        say("You climb down the rope.");
        rope(hp);
    } else  if (next == "jump") {
        say("Yikes! Let's see if you survive!");
        hp = Math.floor(hp/2);
        rope(hp);
    } else {
        say("You can't do that here");
        well(hp);
    }
}

// set up hp
let hp = Math.floor(Math.random() * 10) + 1

// starts the game
well(hp);