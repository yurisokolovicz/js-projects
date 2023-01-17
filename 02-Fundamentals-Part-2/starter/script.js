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

*/

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