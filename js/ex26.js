let pets = [
    {name: "Yeller", type: 'Dog', age: 12},
    {name: 'Akumano', type: 'Japanese Bobtail Cat', age: 2},
    {name: 'Meaw Peesard', type: 'Siamese Cat', age: 100},
    {name: 'James', type: 'Gecko', age: 2},
]

let ages_only = pets.map(pet => pet.age);
let total_age = ages_only.reduce((total, age) => total += age);
let meaw = pets.find(pet => pet.name == 'Meaw Peesard');
let old_animals = pets.filter(pet => pet.age > 10);
let young_animals = pets.filter(pet => pet.age <= 10);

console.log("Animal Ages:", ages_only);
console.log("Total Age:", total_age);
console.log("Meaw is:", meaw.age);

console.log("\nOld Animals:");
old_animals.forEach(p => {
    console.log(`\t${p.name} is a ${p.age} years old ${p.type} `)});

console.log('Young Animals');
for (let p of young_animals)
    console.log(`\t${p.name} is a ${p.age} years old ${p.type}`);
