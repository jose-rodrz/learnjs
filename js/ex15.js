let x = 11;

if (x === 10) {
    console.log("ix is equal to 10:", x);
} else if (x < 10) {
    console.log("x is less than 10:", x);
} else {
    console.log("x is greater than 10", x);
}

//puzzle. answer = 3

let y = 10;

if (y == 100) {
    if(x < 10) {
        console.log("log 1", x, y);
    } else {
        console.log("log 2", x, y);
    }
} else {
    if(x > 10) {
        console.log("log 3", x, y);
    } else {
        console.log("log 4", x, y);
    }
}