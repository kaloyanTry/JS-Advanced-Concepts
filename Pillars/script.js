'use strict';
// Pillars in JS Advanced

//// Higher Order Functions

// const giveAccess = (name) => 'Access granted to ' + name;

// function authenticate(verify) {
//   let array = [];
//   for (let i = 0; i < verify; i++) {
//     array.push(i);
//   }
//   return true;
// }

// function letPerson(person, fn) {
//   if (person.level === 'admin') {
//     fn(500000);
//   } else if (person.level === 'user') {
//     fn(100000);
//   }
//   return giveAccess(person.name);
// }

// console.log(letPerson({ level: 'user', name: 'Tim' }, authenticate)); //HOF
// console.log(letPerson({ level: 'admin', name: 'Sally' }, authenticate));

// Excercise: Generic Multiply function:
const multiPlyBy = (a, b) => a * b;
console.log(multiPlyBy(4, 6));
//
const multiplyBy = (num1) => (num2) => num1 * num2;
console.log(multiplyBy(4)(6));
//
const multiplyByNums = function (num1) {
  return function (num2) {
    return num1 * num2;
  };
};
const multiplyByTwo = multiplyByNums(2);
console.log(multiplyByTwo(4));
