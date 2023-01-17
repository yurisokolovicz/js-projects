//## 2. Activating Strict Mode ##

'use strict'; //Secure - Strict mode - cria erros visiveis no dev console
/*
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

*/

