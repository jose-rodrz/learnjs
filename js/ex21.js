// data about a person named Frank.

let frank = {name:"Frank", age:34, eyes:"blue"};

const frank_talk = (who, words) => {
    console.log(`I am ${who.name} and ${words}.`);
}

frank_talk(frank, "I am talking here!");

// working with that data to put functions in it.
let mary = {name: "Mary", age:44, eyes:"brown", talk: (who, words)  => {
    console.log(`I am ${who.name} and ${words}.`);
}};

//this is kind of annoying though
mary.talk(mary, "these are some words");
mary.talk(frank, "I am Frank and what?");

const createPerson = (name, age, eyes) => {
    let person = {name:name, age:age, eyes:eyes}
    person.talk = (msg) => console.log(`I am ${person.name} and ` + msg);
    return person
}

let alex = createPerson("Alex", 16, "green");
alex.talk("Hi there!");