function createPerson(name, age, eyes) {
    function talkFunction(msg) {
        return `I am ${name} and ` + msg;
    }
    let person = {n:name, a:age, e:eyes, talk: talkFunction}
    return person
}

raplh = createPerson("Raplh", 33, "brown");
console.log(raplh.talk("hello there."));

// example of a constructor that builds a Person object.
// unfinished exercise
// left at: In this next code listing we do just that by creating a Person function that builds up an object and returns it: