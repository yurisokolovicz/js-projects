let js = 'amazing';
console.log(1 + 7 + 15 + 30 - 13);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";
console.log(firstName);

let jonasMatilda = "JM";
let person = "jonas";
let PI = 3.1415;
let myFirstJob = "Programmer"
let myCurrentJob = "Teacher"

console.log(myFirstJob);

let continent = "America do Sul";
let country = "Brasil"
let population = 214;
console.log(continent);
console.log(country);
console.log(population);


let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javaScriptIsFun = 'YES!';
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

let age = 30;
console.log(age);
age = 31;
console.log(age);

const birthYear = 1991;
console.log(birthYear);
birthYear = 1995;
console.log(birthYear);

const ageJonas = 2030 - 1985;
const ageSarah = 2030 - 2017;
console.log(ageJonas, ageSarah);


// Math operators
const now = 2040;
const ageJonas = now - 1985;
const ageSarah = now - 2025;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2^3 = 2*2*2

const firstName = 'Yuri';
const lastName = 'Andrade';
console.log(firstName + lastName);
console.log(firstName + ' ' + lastName);

// Assigment operators
let x = 10 + 5; // 15
console.log(x);
x += 10; // x = x + 10 = 15 + 10 = 25
console.log(x);
x *= 4; // x = x * 4 = 25 * 4 = 100
console.log(x);
x /= 10; // x = x / 10 = 100 / 10 = 10
console.log(x);
x++; // x = x + 1 = 10 + 1
console.log(x);
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <. >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18; // Saving the value

console.log(now - 1985 > now - 2025);



const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10 left-to-right
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2; // left-to-right
console.log(ageJonas, ageSarah, averageAge);


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const massMark = 75;
const heightMark = 1.77;
const massJohn = 95;
const heightJohn = 1.75;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

const firstName = 'Yuri';
const job = 'Researcher';
const birthYear = 1990;
const year = 2023;

const yuri = "Hi! I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(yuri);

// ###Templates Literals: Usamos sempre (``); ###

const yuriNew = `Hi! I'm ${firstName}; a ${year - birthYear} years old ${job}!`
console.log(yuriNew);

console.log(`Just a regular string...`)

// ### If you need a MULTI-LINE STRING USE (\n\); ###

console.log(`For using multi-line string \n\
we should use the bar-n-bar element \n\
in order to separate the lines`)

console.log(`But we don't need to use the bar-n-bar
elemment becoming easy to code specially in
the html's projects.`)
