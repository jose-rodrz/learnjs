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
    puzzle = `
You hear an alien voice coming from nowhere and everywhere:
"Neither silver, nor copper's gleam,
Cherished by both pauper and queen.
Solve this riddle and pass the door,
What treasure lies ahead, explore."

...you dont'heart the voice again after that.\nMaybe...it's a riddle? You decide to scream your answer:
`
    let answer = ask(hp, puzzle)

    if (answer == "gold") {
        gold(hp);
    } else {
        say("Wrong answer...try again!");
        door(hp);
    }
}

const spider = (hp) => {
    hp -= 5;
    let scenario = "You go into the path and find out it's a dark tunnel.\nYou keep walking and see something shiny...you get closer...and it's a giant spider!\nIt bites you and...";

    if (hp <= 0) {
        die(scenario + "you die.\nYou are dead and have lost the game.");
    }
    else{
        say(scenario + "you pass out for a moment but when you regain consciousness the giant spider is gone and there's nothing to do besides going back.");
        rope(hp);
    }


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