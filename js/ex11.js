// Exercise 11:  Functions

const printPerson = (name, age) => {
    console.log(`Hi ${name}, you are ${age} years old.`);
}

printPerson("Zed", 44);
printPerson("Fran", 100);
printPerson("Alex", 30);
printPerson("Eve", 35);

console.log("--------------- pets ----------------");

const printPet = (owner_name, owner_age, pet_name, pet_age) => {
    printPerson(owner_name, owner_age);
    console.log(`That person owns ${pet_name} who is ${pet_age} years old.`);
}

printPet('Zed', 44, 'Mr. Scruffles', 10);
printPet('Frank', 100, 'Crazy', 2);
printPet('Alex', 30, 'Lizzy Lizzard', 1);
printPet('Eve', 35, "Kong The Donkey", 20);

// tough part

