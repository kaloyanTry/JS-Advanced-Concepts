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
// const multiPlyBy = (a, b) => a * b;
// console.log(multiPlyBy(4, 6));
// //
// const multiplyBy = (num1) => (num2) => num1 * num2;
// console.log(multiplyBy(4)(6));
// //
// const multiplyByNums = function (num1) {
//   return function (num2) {
//     return num1 * num2;
//   };
// };
// const multiplyByTwo = multiplyByNums(2);
// console.log(multiplyByTwo(4));

// Closures:
// function a() {
//   const grandpa = 'grandpa';
//   return function b() {
//     const father = 'father';
//     return function c() {
//       const son = 'son';
//       return `${grandpa} => ${father} => ${son}`;
//     };
//   };
// }
// const result = a()()();
// console.log(result);

// // Closures and HOF
// function boo(string) {
//   return function (name) {
//     return function (name2) {
//       console.log(`${string}, ${name} and ${name2}`);
//     };
//   };
// }

// const arrowBoo = (str) => (name) => (name2) =>
//   console.log(`${str}, ${name} and ${name2}`);

// boo('Hi')('John')('Tanya');
// arrowBoo('Hi')('John')('Tanya');

// // Closer and WebApi: setTimeoiut
// function callMeMaybe() {
//   setTimeout(function () {
//     console.log(callMe);
//   }, 2000);
//   const callMe = 'Hi! I am here now!';
// }

// callMeMaybe();

// //// Memory efficient:
// function heavy(item) {
//   const bigArr = new Array(7000).fill(':)');
//   console.log('created');
//   return bigArr[item];
// }
// heavy(606);
// heavy(606);
// heavy(606);

// const efficientClosure = efficientFunc();
// efficientClosure(607);
// efficientClosure(707);
// efficientClosure(807);

// function efficientFunc() {
//   const arr = new Array(7000).fill(':)');
//   console.log('Created efficient Closure!');
//   return function (index) {
//     return arr[index];
//   };
// }
