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
// const hofArrow = () => () => 5;
// console.log(hofArrow());

// const hof = (fn) => fn(5);
// hof(function a(x) {
//   return x;
// });

// // Closures
// const closure = function () {
//   let count = 55;
//   return function getCounter() {
//     //good way of uding closures: private and Not mutating data
//     return count;
//   };
// };
// const getCounter = closure();

// console.log(getCounter());
// console.log(getCounter());

/// Curried => one perimeter at a time:
// const multiply = (a, b) => a * b; //regular f() regular way

// const curriedMultiply = (a) => (b) => a * b; //curried f()
// console.log(curriedMultiply(3)(4));

// const curriedMultyplyBy5 = curriedMultiply(5);
// console.log(curriedMultyplyBy5(4));
// console.log(curriedMultyplyBy5(7));

//// Parital Application:
// const multiply = (a, b, c) => a * b * c;
// const partialMultiBy5 = multiply.bind(null, 5);
// console.log(partialMultiBy5(4, 8));

// //// Memoizationi
// function memoizationAddTo80() {
//   let cache = {};
//   return function (n) {
//     if (n in cache) {
//       return cache[n];
//     } else {
//       console.log('long time');
//       cache[n] = n + 80;
//       return cache[n];
//     }
//   };
// }

// const memoized = memoizationAddTo80();
// console.log('1', memoized(5));
// console.log('2', memoized(5));

// //// Compose:
// const compose = (f1, f2) => (data) => f1(f2(data)); //compose pure f()s
// const multiplyBy3 = (num) => num * 3; // pure f()1
// const makePosititve = (num) => Math.abs(num); // pure f()2

// const multiplyBy3AndAbsolute = compose(multiplyBy3, makePosititve);
// console.log(multiplyBy3AndAbsolute(-60));

// //// Pipe => the same as compose, but in oposite order f()
// const pipe = (f2, f1) => (data) => f2(f1(data));
// const multiAbsPipe = pipe(multiplyBy3, makePosititve);
// console.log(multiAbsPipe(-60));

// //// FP: Amazon Shoping
// // Implement a cart feature:
// // 1. Add items to cart.
// // 2. Add 3% tax to item in cart
// // 3. Buy item: cart --> purchases
// // 4. Empty cart

const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: [],
};

const compose =
  (f1, f2) =>
  (...args) =>
    f1(f2(...args));

console.log(
  purchaseItem(
    purchaseItem(
      emptyCart,
      buyItem,
      applyTaxToItems,
      addItemToCart
    )(user, { name: 'laptop', price: 400 })
  )
);

function purchaseItem(...fns) {
  return fns.reduce(compose);
}

function addItemToCart(user, item) {
  const updatedCart = user.cart.concat(item);
  return Object.assign({}, user, { cart: updatedCart });
}

function applyTaxToItems(user) {
  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });
  return Object.assign({}, user, { cart: updatedCart });
}
function buyItem(user) {
  return Object.assign({}, user, { purchases: user.cart });
}
function emptyCart(user) {
  return Object.assign({}, user, { cart: [] });
}
