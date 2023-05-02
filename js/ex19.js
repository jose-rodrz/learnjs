exports.fruit = [
    {kind: 'Apples',  count: 12, rating: 'AAA'}, 
    {kind: 'Oranges', count: 1,  rating: 'B'}, 
    {kind: 'Pears',   count: 2,  rating: 'A'},
    {kind: 'Grapes',  count: 14, rating: 'UR'}
];

exports.cars = [
    {type: 'Cadillac', color: 'Black', size: 'Big', miles: 34500},
    {type: 'Corvette', color: 'Red', size: 'Little', miles: 1000000},
    {type: 'Ford', color: 'Blue', size: 'Medium', miles: 1234},
    {type: 'BMW', color: 'White', size: 'Baby', miles: 7890}
];

exports.languages = [
    {name: 'Python', speed: 'Slow', opinion: ['Terrible', 'Mush']},
    {name: 'JavaScript', speed: 'Moderate', opinion: ['Alright', 'Bizarre']},
    {name: 'Perl6', speed: 'Moderate', opinion: ['Fun', 'Weird']},
    {name: 'C', speed: 'Fast', opinion: ['Annoying', 'Dangerous']},
    {name: 'Forth', speed: 'Fast', opinion: ['Fun', 'Difficult']},
];

/* 
fruit challenge:

12 - fruit[0].count - correct
'AAA'
2
'Oranges' - fruit[1]['kind'] - Correct
'Grapes'
14
'Apples' 

*/

/* 
cars challenge:

    'Big' - cars[0].size - Correct
    'Red'
    1234 cars[2].miles - Correct
    'White'
    7890
    'Black'
    34500
    'Blue'
*/

/*
languages challenge:

    'Slow'
    'Alright'
    'Dangerous' languages[3].opinion[1] - Correct
    'Fast'
    'Difficult'
    'Fun'
    'Annoying' - lang[3].opinion[0]
    'Weird'
    'Moderate'

*/

/*
Final challenge:
*/


