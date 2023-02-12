'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (startedIndex, mainIndex) {
        return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]];
    },

    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24
        }
    },

    // oderDelivery: function ({ startedIndex = 1, mainIndex = 0, time = '20:00', address }) {
    //     console.log(
    //         `Order received! ${this.starterMenu[startedIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    //     );
    // }
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);


// Rest Pattern and Parameters

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

const [pizza, , risotto, ...otherfood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherfood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
    // console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olive oil', 'spinach');
restaurant.orderPizza('mushrooms');

// restaurant.oderDelivery({
//     time: '22:30',
//     address: 'Via del Sole, 21',
//     mainIndex: 2,
//     starterIndex: 2
// });

// restaurant.oderDelivery({
//     address: 'Via del Sole, 21',
//     startedIndex: 1
// });

// Rest Pattern and Parameters


// ## The Spread Operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

// Insert new data in the array
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

// Real-world examples
const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt('Ingredient 2?'), prompt('Ingredient 3?')];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


// Destructuring Objects

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
    fri: { open: o, close: c }
} = openingHours;
console.log(o, c);


///////////////////////////////////////////////////////
// Destructuring Arrays

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr; // Destructuring Arrays
console.log(x, y, z);
console.log(arr);

// const [first, , second] = restaurant.categories;
// console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Checking from arrays
console.log(restaurant.order(2, 0));

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested array (one array inside another)
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// Nested Array Destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
