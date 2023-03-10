'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1; // for render error on screen
};

///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest
/*
const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}?fullText=true`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const languages = data.languages[Object.keys(data.languages)[0]];

        const currencies = data.currencies[Object.keys(data.currencies)[0]].name;

        const html = `
    <article class="country">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}m people</p>
            <p class="country__row"><span>🗣️</span>${languages}</p>
            <p class="country__row"><span>💰</span>${currencies}</p>
          </div>
    </article>
    `;

        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
    });
};

getCountryData('brazil');
getCountryData('portugal');
getCountryData('germany');

/////////////////////////////////////////
// Welcome to Callback Hell

const renderCountry = function (data, className = '') {
    const languages = data.languages[Object.keys(data.languages)[0]];

    const currencies = data.currencies[Object.keys(data.currencies)[0]].name;

    const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}m people</p>
            <p class="country__row"><span>🗣️</span>${languages}</p>
            <p class="country__row"><span>💰</span>${currencies}</p>
          </div>
    </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
    // AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}?fullText=false`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        // Render country 1
        renderCountry(data);

        // Get neighbour country 1 (country 2)
        const [neighbour] = data.borders; // borders?.[0]

        if (!neighbour) return;

        // AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function () {
            const [data2] = JSON.parse(this.responseText);
            console.log(data2);

            renderCountry(data2, 'neighbour');
        });
    });
};

// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');

// Callback Hell - a lot of nested functions
setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 seconds passed');
        setTimeout(() => {
            console.log('3 seconds passed');
            setTimeout(() => {
                console.log('4 second passed');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);




//////////////////////////////////
// Promises and the Fetch API
// Promisse: A container for a future value.
// Instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations: escaping callback hell

const renderCountry = function (data, className = '') {
    const languages = data.languages[Object.keys(data.languages)[0]];

    const currencies = data.currencies[Object.keys(data.currencies)[0]].name;

    const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}m people</p>
            <p class="country__row"><span>🗣️</span>${languages}</p>
            <p class="country__row"><span>💰</span>${currencies}</p>
          </div>
    </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

// // Consuming Promises
// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(function (response) {
//             console.log(response);
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             renderCountry(data[0]);
//         });
// };

// Cleaner code with arrow functions
// Fetchs data, transform it into json (code becomes strings), then render
const getCountryData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json())
        .then(data => renderCountry(data[0]));
};

getCountryData('portugal');


//////////////////////////////////
// Chaining Promises and Errors check

const renderCountry = function (data, className = '') {
    const languages = data.languages[Object.keys(data.languages)[0]];

    const currencies = data.currencies[Object.keys(data.currencies)[0]].name;

    const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}m people</p>
            <p class="country__row"><span>🗣️</span>${languages}</p>
            <p class="country__row"><span>💰</span>${currencies}</p>
          </div>
    </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    // countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
    // Country 1
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json())
        .then(data => {
            renderCountry(data[0]);
            console.log(data);
            const neighbour = data[0].borders[0];
            console.log(neighbour);

            if (!neighbour) return;

            // Country 2
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
        })
        .then(response => response.json())
        .then(data => renderCountry(data[0], 'neighbour'))
        // Handling Rejected Promises
        // .catch(err => alert(err));
        .catch(err => {
            console.error(`${err} 💥💥💥`);
            renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};

getCountryData('usa');
// getCountryData('sdhuhass'); // Error check



//////////////////////////////////
// The Event Loop in Practice

// Which order these 4 msg will be logged to the console??
// Interview question
// Any top level code (code outside of any callback) will run first.
// SetTimeout will be put in the callback queue first but the promisse will be executed firsted because it will be in the microtask queue and it has priority over callback queue then it is executed first.

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// console.log('Test end');

// Results
// Test start
// Test end
// Resolved promise 1
// 0 sec timer

console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
    for (let i = 0; i < 1000; i++) {}
    console.log(res);
});
console.log('Test end');

// Results
// Test start
// Test end
// Resolved promise 1
// Resolved promise 2
// 0 sec timer



//////////////////////////////////
// Building a Simple Promise
// The promise constructor have one argument (function), the executor function.
// The executor has 2 arguments: resolve and reject

const lotteryPromise = new Promise(function (resolve, reject) {
    console.log('Lotter draw is happening 🎲');

    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve('You Win 👑');
        } else {
            reject(new Error('You lost your money 🙈'));
        }
    }, 2000);
});
// The error is the else
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout - timer doest need reject, impossible to a time fail
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};
// We have a chain of asynchronous behavior happening in a sequence WITHOUT the bad callback hell
wait(2)
    .then(() => {
        console.log('1 second passed');
        return wait(1);
    })
    .then(() => {
        console.log('2 second passed');
        return wait(1);
    })
    .then(() => {
        console.log('3 second passed');
        return wait(1);
    })
    .then(() => console.log('4 second passed'));

// Callback Hell - a lot of nested functions - very bad
// setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout(() => {
//         console.log('2 seconds passed');
//         setTimeout(() => {
//             console.log('3 seconds passed');
//             setTimeout(() => {
//                 console.log('4 second passed');
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));

*/

/////////////////////////////////////////////////////////////////
//##################### Geolocation API #########################
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀


// Old needed data for the challenge
const renderCountry = function (data, className = '') {
    const languages = data.languages[Object.keys(data.languages)[0]];

    const currencies = data.currencies[Object.keys(data.currencies)[0]].name;

    const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}m people</p>
            <p class="country__row"><span>🗣️</span>${languages}</p>
            <p class="country__row"><span>💰</span>${currencies}</p>
          </div>
    </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

// Coding Challenge #1 starts here
// Fetchs data, transform it into json (code becomes strings), then render
const whereAmI = function (lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=148242640815718264297x10968`)
        .then(res => {
            console.log(res); // when error occurs; (ok: false)
            if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
            return res.json();
        })
        .then(data => {
            console.log(data);
            console.log(`You are in the region of ${data.region} at ${data.city}, ${data.country}. Timezone: ${data.timezone}`);

            return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
        })
        .then(res => {
            if (!res.ok) throw new Error(`Country not found (${res.status})`);

            return res.json();
        })
        .then(data => renderCountry(data[0]))
        .catch(err => console.error(`${err.message} 💥`));
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

// 'https://geocode.xyz/51.50354,-0.12768?geoit=xml&auth=your_api_key'



/////////////////////////////////////////////////////////////////
//############# Promisifying the Geolocation API ################

const renderCountry = function (data, className = '') {
    const languages = data.languages[Object.keys(data.languages)[0]];

    const currencies = data.currencies[Object.keys(data.currencies)[0]].name;

    const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}m people</p>
            <p class="country__row"><span>🗣️</span>${languages}</p>
            <p class="country__row"><span>💰</span>${currencies}</p>
          </div>
    </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        // navigator.geolocation.getCurrentPosition(
        //     position => resolve(position),
        //     err => reject(err)
        // );
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

getPosition().then(position => console.log(position));

// Geolocation API (Coding Challenge #1)
const whereAmI = function () {
    getPosition()
        .then(position => {
            const { latitude: lat, longitude: lng } = position.coords;

            return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=148242640815718264297x10968`);
        })
        .then(res => {
            if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
            return res.json();
        })
        .then(data => {
            // console.log(data);
            console.log(`You are in ${data.city}, State of ${data.state}, ${data.country}. Timezone: ${data.timezone}`);

            return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
        })
        .then(res => {
            if (!res.ok) throw new Error(`Country not found (${res.status})`);

            return res.json();
        })
        .then(data => renderCountry(data[0]))
        .catch(err => console.error(`${err.message} 💥`));
};

btn.addEventListener('click', whereAmI);
// whereAmI();


*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀


const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function () {
            reject(new Error('image not found'));
        });
    });
};

let currentImg;
createImage('img/img-1.jpg')
    .then(img => {
        currentImg = img;
        console.log('Image 1 loaded');
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('img/img-2.jpg');
    })
    .then(img => {
        currentImg = img;
        console.log('Image 2 loaded');
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('img/img-3.jpg');
    })
    .then(img => {
        currentImg = img;
        console.log('Image 3 loaded');
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
    })
    .catch(err => console.log(err));


/////////////////////////////////////////////////////////////////
//##################### Async/Await #########################
//##################### Geolocation API #####################
// Consuming Promises with Async/Await

const renderCountry = function (data, className = '') {
    const languages = data.languages[Object.keys(data.languages)[0]];

    const currencies = data.currencies[Object.keys(data.currencies)[0]].name;

    const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}m people</p>
            <p class="country__row"><span>🗣️</span>${languages}</p>
            <p class="country__row"><span>💰</span>${currencies}</p>
          </div>
    </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

// Async function will keep running in the background while performing the code
// Await will stop the code execution untill the promise is fulfilled
// Very elegant, the fulfilled promise is stored into a variable (const data) without having to mess with callback functions
// Async await is used a lot together with the more traditional then method of consuming promises

// const whereAmI = async function () {

//     const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
//     const data = await res.json();
//     console.log(data);
//     renderCountry(data[0]);
// };
// whereAmI();
// console.log('FIRST');

const whereAmI = async function () {
    // Geolocation
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=148242640815718264297x10968`);
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Country data
    const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
};
whereAmI();
console.log('FIRST');



/////////////////////////////////////////////////////////////////
//##################### try...catch #########################
//##################### Geolocation API #####################
// Error Handling With try...catch
// try...cat can be used to catch erros in async functions

const renderCountry = function (data, className = '') {
    const languages = data.languages[Object.keys(data.languages)[0]];

    const currencies = data.currencies[Object.keys(data.currencies)[0]].name;

    const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}m people</p>
            <p class="country__row"><span>🗣️</span>${languages}</p>
            <p class="country__row"><span>💰</span>${currencies}</p>
          </div>
    </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

const whereAmI = async function () {
    try {
        // Geolocation
        const position = await getPosition();
        const { latitude: lat, longitude: lng } = position.coords;

        // Reverse geocoding
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=148242640815718264297x10968`);
        console.log(resGeo);
        if (!resGeo.ok) throw new Error('Problem getting location data');

        const dataGeo = await resGeo.json();
        console.log(dataGeo);

        // Country data
        const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
        console.log(res);
        if (!res.ok) throw new Error('Problem getting country');
        const data = await res.json();
        console.log(data);
        renderCountry(data[0]);
    } catch (err) {
        console.error(`${err} 💥`);
        renderError(`💥 ${err.message}`);
    }
};
whereAmI();
whereAmI();
whereAmI();
console.log('FIRST');

// try {
//     let y = 1;
//     const x = 2;
//     x = 3;
// } catch (err) {
//     alert(err.message);
// }



/////////////////////////////////////////////////////////////////
//############# Returning Values from Async Functions #############

const renderCountry = function (data, className = '') {
    const languages = data.languages[Object.keys(data.languages)[0]];

    const currencies = data.currencies[Object.keys(data.currencies)[0]].name;

    const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}m people</p>
            <p class="country__row"><span>🗣️</span>${languages}</p>
            <p class="country__row"><span>💰</span>${currencies}</p>
          </div>
    </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

const whereAmI = async function () {
    try {
        // Geolocation
        const position = await getPosition();
        const { latitude: lat, longitude: lng } = position.coords;

        // Reverse geocoding
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=148242640815718264297x10968`);
        if (!resGeo.ok) throw new Error('Problem getting location data');

        const dataGeo = await resGeo.json();

        // Country data
        const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
        if (!res.ok) throw new Error('Problem getting country');
        const data = await res.json();
        console.log(data);
        renderCountry(data[0]);

        return `You are in ${dataGeo.city}, ${dataGeo.country}`;
    } catch (err) {
        console.error(`${err} 💥`);
        renderError(`💥 ${err.message}`);

        // Reject promise returned from async function
        throw err;
    }
};

console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);

// Returning Values from Async Functions mixed with then() method - mixture is very bad
// whereAmI()
//     .then(city => console.log(`2: ${city}`))
//     .catch(err => console.error(`2: ${err.message} 💥`))
//     .finally(() => console.log('3: Finished getting location'));

// Returning Values from Async Functions
// IIFEs - Immediately-invoked functions expressions
(async function () {
    try {
        const city = await whereAmI();
        console.log(`2: ${city}`);
    } catch (err) {
        console.error(`2: ${err.message} 💥`);
    }
    console.log('3: Finished getting location');
})();



/////////////////////////////////////////////////////////////////
//################ Running Promises in Parallel ################

// ASYNC function always need to use try catch block

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};

const get3Countries = async function (c1, c2, c3) {
    try {
        // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
        // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
        // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
        // console.log([data1.capital[0], data2.capital[0], data3.capital[0]]);

        // Promise all combinator - run all the promises in the array at the same time
        const data = await Promise.all([
            getJSON(`https://restcountries.com/v3.1/name/${c1}`),
            getJSON(`https://restcountries.com/v3.1/name/${c2}`),
            getJSON(`https://restcountries.com/v3.1/name/${c3}`)
        ]);
        console.log(data);
        console.log(data.map(d => d[0].capital[0]));
    } catch (err) {
        console.error(err);
        // renderError(`💥 ${err.message}`);
    }
};
get3Countries('brazil', 'canada', 'usa');

// https://restcountries.com/v3.1/name/${c1}

// // Just for the sake of practicing I rewrote the original getJSON() function to use async/await. And then I didn't want to repeat the URL in each call, so I defined the API url once and then passed that in as parameter with the country to getJSON() and completed the url there.

// const getJSON = async function (api, country) {
//     try {
//         const url = `${api}${country}`;
//         const res = await fetch(url);
//         const data = await res.json();
//         return data;
//     } catch (err) {
//         console.error(`${err} 💥`);
//         renderError(`💥 ${err.message}`);
//     }
// };

// const get3Countries = async function (c1, c2, c3) {
//     try {
//         const api = `https://restcountries.com/v3.1/name/`;
//         // Promise all combinator - run all the promises in the array at the same time
//         const data = await Promise.all([getJSON(api, c1), getJSON(api, c2), getJSON(api, c3)]);
//         // console.log(data); // for checking
//         console.log(data.map(d => d[0].capital[0]));
//     } catch (err) {
//         console.error(`${err} 💥`);
//         renderError(`💥 ${err.message}`);
//     }
// };

// get3Countries('brazil', 'usa', 'italy');

*/
