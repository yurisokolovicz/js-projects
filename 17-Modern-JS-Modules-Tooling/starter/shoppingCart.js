// Exporting module
console.log('Exporting module');

// Blocking code
// Using top-level await (await outside of async function) will block the entire module
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching users');

//////////////////////

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

// Exporting an object from this module
export { totalPrice, totalQuantity as tq };

///////////////////////////////////////////////
// Export Default
export default function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
}
