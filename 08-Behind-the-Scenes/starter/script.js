'use strict';

// ## Scoping in Practice

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = `Steven`;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      // Reassigning outer scope's variable
      output = `NEW OUTPUT!`;
    }
    console.log(millenial);
    // console.log(str);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = "Yuri";
calcAge(1991);
// console.log(age);
// printAge();

## Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Yuri";
let job = "Researcher";
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// ## The this Keyword/Variable - will point to the object wich is calling the method - Dynamic and not static

console.log(this); // Window Object

const calcAge = function (birthYear) {
  // undefined in strict mode
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
  // this of surrounding function (lexical this)
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // we are calling the method on matilda so this will point to matilda even this was inside jonas object

const f = jonas.calcAge;
f(); // this keyweord is undefined

// ## Regular Functions vs. Arrow Functions

// var firstName = 'Matilda';

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        // console.log(this);
        console.log(2037 - this.year);

        // Solution 1
        // const self = this; // correction for the bug - use self or that
        // const isMillenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };

        // Solution 2 - Arrow function uses the this keywords from the parents scope
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    }
};

jonas.greet(); // Hey undefined - arrow does not acess the function only the global scope.
console.log(this.firstName);
jonas.calcAge();

// Argumrnyd keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5, 8);

// Best Practice it is not to use arrow function as method.

// ## Primitives vs. Objects (Primitive vs. Reference Types)

let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 30

const me = {
    name: 'Jonas',
    age: 30
};
const friend = me;
friend.age = 27;

console.log('Friend', friend);
// {name: 'Jonas', age: 27}

console.log('Me', me);
// {name: 'Jonas', age: 27}

// ## Primitives vs. Objects in Practice

// Primitives types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
// marriedJessica = {}; // doest not work

// Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
};

// merge a new object with jessica2
// a new object was created in the heap memory
// only works in first level, if there is an object inside an object doest not work - need deep clone
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
// troca um, trocou os dois indicando que precisamos de deep clone para nao mudar os dois objetos ao msm tempo.
