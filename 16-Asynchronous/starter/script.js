'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
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

*/
//////////////////////////////////
// Chaining Promises

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
