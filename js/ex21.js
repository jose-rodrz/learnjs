const createPerson = (name, age, eyes) => {
    let person = {name:name, age:age, eyes:eyes}
    person.talk = (msg) => `I am ${person.name} and ` + msg;
    return person
}

// example of a constructor that builds a Person object.
// unfinished exercise
// left at: In this next code listing we do just that by creating a Person function that builds up an object and returns it

// update 2: just need to type the code from the page but keep my own version because I like it.
