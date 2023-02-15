'use strict';
//// FP

// Pure fuctions => functions modify every input inside === no side effects
// same input returns same output, no matter how many times we call it

// No side effects
const array = [1, 2, 3, 4];

function removeLastItem(arr) {
  const removeArrray = [].concat(arr);
  removeArrray.pop();
  return removeArrray;
}

function multiplyBy2(arr) {
  return arr.map((item) => item * 2);
}

const outputRemoveArr = removeLastItem(array);
const outputMultiArr = multiplyBy2(array);
console.log(array, outputRemoveArr, outputMultiArr);

//////////////////////////////////////////
//// Referentional Transparancy => always the same result

function sum(num1, num2) {
  //// paramters are local variables
  return num1 + num2;
}
console.log(sum(3, 4));

function multiSum(num) {
  return num * 2;
}
console.log(multiSum(sum(3, 4)));
console.log(multiSum(7));
