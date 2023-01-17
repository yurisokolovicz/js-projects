/*
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

console.log(`Just a regular string...`);

// ### If you need a MULTI-LINE STRING USE (\n\); ###

console.log(`For using multi-line string \n\
we should use the bar-n-bar element \n\
in order to separate the lines`);

console.log(`But we don't need to use the bar-n-bar
elemment becoming easy to code specially in
the html's projects.`);

// ## Taking Decisions: if / else Statements ##
// if (boolean value - condition true or false) {
//     This block is execute if the condition is true
// } else {
//     executed when the condition is false
// }

const ageSarah = 19;
const isOldEnoughSarah = ageSarah >= 18;
const ageJohn = 15;
const isOldEnoughJohn = ageJohn >= 18;

if (isOldEnoughSarah) {
    console.log(`Sarah can start the driving license 🚗.`);
}

if (ageSarah >= 18) {
    console.log(`Sarah can start the driving license 🚗.`);
}

if (ageJohn >= 18) {
    console.log(`John can start the driving license 🚗.`);
} else {
    const yearsLeft = 18 - ageJohn;
    console.log(`John is to young, wait ${yearsLeft} years!`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// ## Coding chalange 2 ##

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
//  BMIMar = 27.30 and BMIJohn = 24.19

console.log(`Among the two individuals which performed the health analysis the Mark showed a BMI of ${BMIMark}. The John presented a BMI of ${BMIJohn}`);

if (BMIMark > BMIJohn) {
    console.log(`The BMI of Mark is higher than John`)
} else {
    console.log(`The BMI of Mark is lower than John`)
}

// Console: Among the two individuals which performed the health analysis the Mark showed a BMI of 27.309968138370508. The John presented a BMI of 24.194608809993426.
// The BMI of Mark is higher than John.

// ## Type Conversion ##
const inPutYear = '1991';
console.log(Number(inPutYear), inPutYear);
console.log(Number(inPutYear) + 18);
console.log(Number('Yuri'));
// NaN = invalid number
console.log(typeof NaN);
console.log(String(23), 23);
// Number e String devem iniciar com letra maiuscula senao nao funciona.

// ## Type Coercion ##
console.log('I am ' + '23' + ' years old.');
console.log('I am ' + 23 + ' years old.');
console.log('23' + '10' + 3);
// operator (+) converte number em string, resul = 23103.
console.log('23' - '10' - 3);
// operador (-) converte string em numero, se possivel. result = 10.
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1; // = 11
n = n - 1; // 11-1 = 10
console.log(n);

a = 2 + 3 + 4 + '5'; // = 95 (Calculo realizado da esquerda para a direita)
b = '10' - '4' - '3' - 2 + '5' // = 15
console.log(a, b); 

// ## Truthy and falsy values ##
// The only 5 falsy values: 0, '', undefined, null, NaN (not an number). All this 5 values will be converted into false when we attempt to convert them into a boolean.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Yuri'));
console.log(Boolean({})); //empty object
console.log(Boolean(''));

const money = 0;
if (money) { //js will try to convert money into a boolean, 0 can not be converted into a bollean, result = false. Problema pode ser fixado usando Logical operators.
    console.log("Don't spend it all ;");
} else {
    console.log('You should get a job!')
}

const meters = 100;
if (meters) { 
    console.log("Don't spend it all ;");
} else {
    console.log('You should get a job!')
}
//js will try to convert meters into a boolean, 100 can be converted into a bollean, result = true.

let height; //height is undefined. 
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

let color = 'blue'; //color = blue. 
if (color) {
    console.log('YAY! color = blue is defined');
} else {
    console.log('color = blue is UNDEFINED');
}


// ## Equality Operators == vs. === ##
// === (exactly-sctrict) don't execute coercion 
// == (loose) execute coercion '18' == 18 (true)
const age = '18';
if (age === 18) console.log('You just became an adult (strict)');
if (age == 18) console.log('You are a child (loose)');
// use === when compare values.

const year = 7;
if (year === 7) console.log('strict');
if (year == 7) console.log('loose');

// const favourite = prompt("what is your favourite number?");
// console.log(favourite);
// console.log(typeof favourite); //string
// // O valor digitado no pop-up do prompt sera armazenado na variavel favourite.


// if (favourite == 23) { //string, == do type coercion
//     console.log('Cool! 23 is an amazing number!')
// }
// // '23' == 23

const favourite = Number(prompt("what is your favourite number?"));
console.log(favourite);
console.log(typeof favourite); 

if (favourite === 23) { // 23 === 23
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is a nice number for you')
} else {
    console.log('Number is not 7,9 or 23')
}

if (favourite !== 23) console.log('Why not 23?');
// !== diferente.

## Boolean Logic: AND, OR & NOT operators ##
AND (&&): True when all are true. (A && B)
OR: (||) true when one is true. (A || B)
NOT: (!) inverts true and false values. (!A)

const hasDriversLicense = true; //A
const hasGoodVision = true //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive.')
}

const hasDriversLicense = true; //A
const hasGoodVision = true //B
const isTired = true; // C

console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive.')
}


## Coding chalange 3 ##

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy')
} else if (scoreDolphins < scoreKoalas) {
    console.log('Koalas win the trophy')
} else if (scoreDolphins === scoreKoalas) {
    console.log('Both win the trophy')
}

// Bonus 1

const scoreDolphins = (97 + 112 + 91) / 3;
const scoreKoalas = (109 + 95 + 95) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && (scoreDolphins >= 100)) {
    console.log('Dolphins win the trophy')
} else if (scoreKoalas > scoreDolphins && (scoreKoalas >= 100)) {
    console.log('Koalas win the trophy')
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy')
} else {
    console.log('No one wins the trophy')
}


//## The Switch Statement - declaracao de troca##

const day = 'friday'; //trocar o dia da semana

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan my course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend')
        break;
    default:
        console.log('Not a valid day');
}


if (day === 'monday') {
    console.log('Plan my course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day');
}
*/

//## Statements and Expressions ##
// Expressions = produce values

3 + 4
1991
true && false && !false //gera um valor

// Statements = Big peace of code wich does not produce a value by it self = it is a complete sentence

if (23 > 10) {
    const str = '23 is bigger';
} //declara o valor mas n produz o valor

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`)

//## The Conditional (Ternary) Operator ##

