// Types in JS Advanced
// // Exercise 1: Compare Objects
// const user1 = { name: 'nerd', org: 'dev' };
// const user2 = { name: 'nerd', org: 'dev' };
// const eq = user1 === user2;
// console.log(eq); // gives false

// // solution:
// const eq2 = JSON.stringify(user1) === JSON.stringify(user2);
// console.log(eq2); // gives true

//// Exercis 2:
// const number = 100;
// const string = 'Jay';

// let obj1 = {
//   value: 'a',
// };

// let obj2 = {
//   value: 'b',
// };

// let obj3 = obj2;

// function change(number, string, obj1, obj2) {
//   number = number * 10;
//   string = 'Pete';
//   obj1 = obj2;
//   obj2.value = 'c';

//   console.log(number); //1000
//   console.log(string); // Pete
//   console.log(obj1.value); // c
// }

// change(number, string, obj1, obj2);

// //Guess the outputs here before you run the code:
// console.log(number); //100
// console.log(string); // Jay
// console.log(obj1.value); // a

/// Exercise 3.Try to guess what the output for each of the lines below are:
// false == ''; // true
// false == []; // true
// false == {}; // false
// '' == 0; // true
// '' == []; // true
// '' == {}; // false
// 0 == []; // true
// 0 == {}; // false
// 0 == null; // false
