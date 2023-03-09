'strict mode';

// Object.freeze just freeze the first level of the objects, it is not deep freeze, we can still changing the objects inside the objects
const budget = Object.freeze([
    { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
    { value: -45, description: 'Groceries 🥑', user: 'jonas' },
    { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
    { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
    { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
    { value: -20, description: 'Candy 🍭', user: 'matilda' },
    { value: -125, description: 'Toys 🚂', user: 'matilda' },
    { value: -1800, description: 'New Laptop 💻', user: 'jonas' }
]);

const spendingLimits = Object.freeze({
    jonas: 1500,
    matilda: 100
});
/////// 1st level of the object is freezed
// spendingLimits.jay = 200;
// console.log(spendingLimits);
// budget[9] = 'jonas';

////// 2nd lvl of the object is not freezed
budget[0].value = 300;

const getLimit = (limits, user) => limits?.[user] ?? 0;

//// Impure function because it does attempt to manipulate and to mutate the budget object that is located outside of it.
// const addExpense = function (value, description, user = 'jonas') {
//     user = user.toLowerCase();

//     if (value <= getLimit(user)) {
//         budget.push({ value: -value, description, user });
//     }
// };
// addExpense(10, 'Pizza 🍕');
// addExpense(100, 'Going to movies 🍿', 'Matilda');
// addExpense(200, 'Stuff', 'Jay');

//// Pure function - not produce side effect- Important also in React.js
const addExpense = function (state, limits, value, description, user = 'jonas') {
    const cleanUser = user.toLowerCase();

    return value <= getLimit(limits, cleanUser) ? [...state, { value: -value, description, cleanUser }] : state;
};

//// Immutability - Important also in React.js
// Calling the addExpense function will not mutate the budget object
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(budget, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
const newBudget3 = addExpense(budget, spendingLimits, 200, 'Stuff', 'Jay');

//// Impure function
// const checkExpenses = function () {
//     for (const entry of newBudget3) if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
// };
// checkExpenses();

//// Pure function - does not mutate anything because the map return a new array
// const checkExpenses = function (state, limits) {
//     return state.map(entry => {
//         return entry.value < -getLimit(limits, entry.user) ? { ...entry, flag: 'limit' } : entry;
//     });
// };

const checkExpenses = (state, limits) =>
    state.map(entry => (entry.value < -getLimit(limits, entry.user) ? { ...entry, flag: 'limit' } : entry));

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget); // Impure

//// Immutability of regular variables - in functional codes we never use let because it mutates de variable
const logBigExpenses = function (state, bigLimit) {
    //// Declarative code
    const bigExpenses = state
        .filter(entry => entry.value <= -bigLimit)
        .map(entry => entry.description.slice(-2))
        .join(' / ');

    console.log(bigExpenses); // Impure

    //// Imperative code
    // let output = '';
    // for (const entry of budget) output += entry.value <= -bigLimit ? `${entry.description.slice(-2)} /` : '';
    // output = output.slice(0, -2); // Remove last '/ '
    // console.log(output);
};

logBigExpenses(finalBudget, 500);
