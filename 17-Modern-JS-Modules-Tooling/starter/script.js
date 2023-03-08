//////////////////////////////
// Name imports

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
