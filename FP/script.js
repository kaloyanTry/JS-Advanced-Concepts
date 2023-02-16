'use strict';
//// FP

// Pure fuctions => functions modify every input inside === no/mimize side effects
// same input returns same output, no matter how many times we call it

// // No side effects
// const array = [1, 2, 3, 4];

// function removeLastItem(arr) {
//   const removeArrray = [].concat(arr);
//   removeArrray.pop();
//   return removeArrray;
// }

// function multiplyBy2(arr) {
//   return arr.map((item) => item * 2);
// }

// const outputRemoveArr = removeLastItem(array);
// const outputMultiArr = multiplyBy2(array);
// console.log(array, outputRemoveArr, outputMultiArr);

// //////////////////////////////////////////
// //// Referentional Transparancy => always the same result

// function sum(num1, num2) {
//   //// paramters are local variables
//   return num1 + num2;
// }
// console.log(sum(3, 4));

// function multiSum(num) {
//   return num * 2;
// }
// console.log(multiSum(sum(3, 4)));
// console.log(multiSum(7));

//// Immutability:
// const obj = { name: 'Andrei' };

// function clone(obj) {
//   return { ...obj };
// }

// function updateName(obj) {
//   const objCopy = clone(obj);
//   objCopy.name = 'Nina';
//   return objCopy;
// }

// const obj2 = updateName(obj);
// console.log(obj, obj2);

//// HOF
const hofArrow = () => () => 5;
console.log(hofArrow());

const hof = (fn) => fn(5);
hof(function a(x) {
  return x;
});

// Closures
const closure = function () {
  let count = 55;
  return function getCounter() {
    //good way of uding closures: private and Not mutating data
    return count;
  };
};
const getCounter = closure();

console.log(getCounter());
console.log(getCounter());
