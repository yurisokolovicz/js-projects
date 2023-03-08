//////////////////////////////
// Name imports

/*

// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');
// console.log(shippingCost);

// Import all the exports of a module at the same time
// The export are converted into an object (ShoppingCart)
// import * as ShoppingCart from './shoppingCart.js';
// // Need to extract the exports from the object ShoppingCart
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

//////////////////////////////
// Default imports
import add from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

//////////////////////////////
// // Name and Default imports at the same time - Not very good to use
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// add('pizza', 2);
// console.log(price);

// import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 5);
// add('apples', 4);

// console.log(cart);

///// Imports are not copies of the export, it point to the same place in memory

///////////////////////////////////////
// Top-Level Await (ES2022)

// From the ES2022 we can now use the await keyword outside of async functions, at least in modules (script type="module")

// Problem: the await now is blocking the entire execution of this module because there is not more async function
// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json(); // To parse data as json
// console.log(data);
// console.log('Something');

// Situation in which we need to return data from async function
const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
    // We want to get the last element of the array [99] using the new ES2022 'at method'
    return { title: data.at(-1).title, text: data.at(-1).body };
};

// Why it is called promise? because it is async function, it does not comes immediately, it is a promise that it will return soon
// getLastPost();

// DOES NOT RETURN THE DATA BUT JUST A PROMISSE, NEED TO USE TOP LVL AWAIT
const lastPost = getLastPost();
console.log(lastPost);

// HERE THE TOP LVL AWAIT IS VERY USEFULL
const lastPost2 = await getLastPost();
console.log(lastPost2);

// Not very clean
// lastPost.then(last => console.log(last));



///////////////////////////////////////
// The Module Pattern

// Involves IIFE (Immediately Invoked Function Expression)
// (function () {
//     console.log('IIFE');
// })();

const ShoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart (sipping cost is ${shippingCost})`);
    };

    const orderStock = function (product, quantity) {
        console.log(`${quantity} ${product} ordered from supplier`);
    };
    // return a public API
    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity
    };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
ShoppingCart2.addToCart('hamburguer', 1);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);



///////////////////////////////////////
// CommonJS Modules
// Export

// it will not work in the browser, only in node.js
export.addTocart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
  );
};

// Import
const { addTocart } = require('./shoppingCart.js');

*/

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
    cart: [
        { product: 'bread', quantity: 5 },
        { product: 'pizza', quantity: 5 }
    ],
    user: { loggedIn: true }
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;

console.log(stateClone);

console.log(stateDeepClone);
