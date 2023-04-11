// Exercise 12: Functions, Files, Variables

const fs = require('fs');

const print_lines = (err, data) => {
    console.log(data.toString());
}

const yell_at_me = (what) => {
    return what.toUpperCase();
}

fs.readFile("poem.txt", print_lines);

// again but with anonymous functions

fs.readFile("poem.txt", (err, data) => {
    let yelling = yell_at_me(data.toString());
    print_lines(err, yelling);
});