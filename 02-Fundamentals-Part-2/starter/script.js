//## 2. Activating Strict Mode ##

'use strict'; //Secure - Strict mode - cria erros visiveis no dev console

let hasDriversLicense = false;
const passTest = true; //por padrao devemos sempre usar const p evitar erros no codigo

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface ='Audio;'
// const private = 534;


//## 3. Functions Declaration ##

function logger() { // () are parameters 
    //function body
    console.log('My name is Yuri');
}
//Parameters represent the input data of the funcion

//Calling, running, invoking the function
logger();//Nao chama nenhum parametro da funcao
logger();//Apenas loga alguma coisa no console
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
    //const juice = String using the input data of the function
}
//const eh para armazenar como variavel

//Calling, running, invoking the function
const appleJuice = fruitProcessor(5, 0); 
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
// 5, 0, 2, 4 are argumment (it is the atual value of the parameter )

//function nameOfFunction (parameters) {
    //funcao propriamente dita (function body);}
    //return para poder levar os dados p fora da funcao - IMPORTANT
//Calling function with certains parameters


//## 4. Functions Declaration vs Expressions##

// Function Declaration - Pode ser chamado no codigo antes de ser definida.
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


//## 5. Arrow Functions - menor e mais rapida de ser escrita ##

// Arrow Function - ruim p codigos grandes
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991) // call the
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1998, 'Bob'));


// ## 6. Functions Calling Other Functions ##

function cutFruitPieces(fruit) {
    return fruit * 11; 
 }   

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));


// ## 7. Reviewing Functions ##

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
    } else {
    console.log(`${firstName} has already retired`);
    return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));


// ## 8. Coding Challenge #1 ##

//HINT: To calculate the average of 3 values, add them all together and divide by 3
//HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team`s average scores

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkwinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphons win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...')
    }
}

checkwinner(scoreDolphins, scoreKoalas);

checkwinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkwinner(scoreDolphins, scoreKoalas);


// ## 9.Introduction to Arrays (Matrizes)#1 ##
// Para estruturacao de dados, coloca todos em um grande container (matriz): The two most important data structure in javascript is Arrays and objects

const friend1 = 'Michael';//0
const friend2 = 'Steven';//1
const friend3 = 'Peter';//2

const friends = ['Michael', 'Steven', 'Peter']; //literal sintax
console.log(friends);

const yrs = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay'; //trocando o elemento 2
console.log(friends);

const firstName = 'Jonas';
const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);


// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


// ## 10. Basic Array Operations (Methods) ##

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));
//para saber a posicao do Steven na matriz
// Bob = -1 *nao existe na matriz

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}


// ## 11. Coding Challenge #2 ##

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


// ## 12. Introduction to Objects ##

const yuri = {
    firstName: 'Yuri',
    lastName: 'Andrade',
    age: 2023 - 1985,
    job: 'researcher',
    friends: ['Michael', 'Peter', 'Steven']
}; // Object with 5 keys's value pairs
// 5 propretiers: firstName, lastName,...
console.log(yuri);

// ## 13. Dot vs. Bracket Notation ##
// Two ways to get the properties from a object

console.log(yuri.lastName); // Dot

console.log(yuri['lastName']); // Bracket - need to be a string ' '

const namekey = 'Name';
console.log(yuri['first' + namekey]); 
console.log(yuri['last' + namekey]);

const interestedIn = prompt('What do you want to know about Yuri? Choose between firstName, lastName, age, job, and friends');

if (yuri[interestedIn]) {
    console.log(yuri[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
}

yuri.location = 'Brazil';
yuri['twitter'] = '@yurirock';
console.log(yuri);

// Challenge
// "Yuri has 3 friends, and his best friend is called Michael"
console.log(`${yuri.firstName} has ${yuri.friends.length} friends, and his best friend is called ${yuri.friends[0]}`);


// ## 14. Object Methods ##

const yuri = {
    firstName: 'Yuri',
    lastName: 'Andrade',
    birthYear: 1995,
    job: 'Researcher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
  
    // calcAage: function () {
    //     // console.log(this);
    //     return 2023 - this.birthYear;

    calcAage: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    }, //this. use values of yuri's function.

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAage()}-years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};
    
console.log(yuri.calcAage());

console.log(yuri.age);
console.log(yuri.age);
console.log(yuri['age']);

// Challenge
// "Yuri is a 38-years old researcher, and he has a driver's license"
console.log(yuri.getSummary());


// ## Coding Challenge #3 ##

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (mark.bmi < john.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}


// ## The (for) Loop ##
// For automation o repetitive tasks

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');
//Violate the don't repeat yourself


//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}


// ## Looping Arrays, Breaking and Continuing ##

const yuri = [
    'Yuri',
    'Andrade',
    2023 - 1995,
    'researcher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

for (let i = 0; i < yuri.length; i++) {
    // Reading from yuri array
    console.log(yuri[i], typeof yuri[i]);

    // Filling types array
    // types[i] = typeof yuri[i];
    types.push(typeof yuri[i]);
}
console.log(types);

//###########

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// Continue and Break
// Continue
console.log('--ONLY STRINGS--')
for (let i = 0; i < yuri.length; i++) {
    if (typeof yuri[i] !== 'string') continue;
    //we only want to log string to the console (!== means different)
    console.log(yuri[i], typeof yuri[i]);
}

// Break
console.log('--BREAK WITH NUMBERS--')
for (let i = 0; i < yuri.length; i++) {
    if (typeof yuri[i] === 'number') break;
    console.log(yuri[i], typeof yuri[i]);
    //after find the number, nothing else is printed in the console.
}


// ## Looping Backwards and Loops in Loops ##

// De tras p frente (Backwards)
// 0, 1, ..., 4 - normal
// 4, 3, ..., 0 - de tras p frente

const yuri = [
    'Yuri',
    'Andrade',
    2023 - 1995,
    'researcher',
    ['Michael', 'Peter', 'Steven']
];

for (let i = yuri.length - 1; i >= 0; i--) {
    console.log(i, yuri[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}


// ## The while Loop ##
// Enquanto

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...')
}


// ## Coding Challenge #4 ##

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length
}
console.log(calcAverage([2, 3, 7]));//exemplo
console.log(calcAverage(totals));
console.log(calcAverage(tips));
