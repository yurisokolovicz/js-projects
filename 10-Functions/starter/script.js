'use strict';

const flight = 'LH234';
const yuri = {
  name: 'Yuri Sokolovicz',
  passport: 2341684652,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2341684652) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, yuri);
// console.log(flight);
// console.log(yuri);

// Is the same as doing...
// const flightNum = flight;
// const passenger = yuri;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(yuri);
checkIn(flight, yuri);
