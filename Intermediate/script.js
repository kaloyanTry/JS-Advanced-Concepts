// Array Advanced
// // Array Methods: map filter reduce
// const arr = [1, 8, 3, 6, 7];

// const arrMap = arr.map((num) => num * 2);
// console.log(arrMap);

// const arrFilter = arr.filter((num) => num >= 5);
// console.log(arrFilter);

// const arrReduce = arr.reduce((acc, num) => acc + num);
// const arrReduceLong = arr.reduce((acc, num) => {
//   return acc + num;
// }, 0); // Long version of reduce method, starts to sum from 0
// console.log(arrReduce);
/////////////////////////////

// //// Advanced Object
// // Instantiation
// class Player {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   introduce() {
//     console.log(`Hi, I'am ${this.name} and I am a ${this.type}`);
//   }
// }

// class Wizzard extends Player {
//   constructor(name, type) {
//     super(name, type);
//   }
//   play() {
//     console.log(`Weee, we ${this.type} are playing!`);
//   }
// }

// const wizzard1 = new Wizzard('Peter', 'Megican');
// console.log(wizzard1.play());

// //// ES8 ES9: .padStart() .padEnd() / .trimStart() remove white spaces :)
// const text = 'SimpleWord';
// console.log(text.padStart(25)); // text starts 25 chars inside
// console.log(text.padEnd(15));

// //// Object values and enties
// const obj = {
//   userName1: 'Kilian',
//   userName2: 'Francoas',
//   userName3: 'Kaloyan',
//   userName4: 'Emo',
// };

// Object.values(obj).forEach((value) => console.log(value));

// Object.entries(obj).forEach((val) => console.log(val));

// const objUserNames = Object.entries(obj).map((val) => {
//   return val[1] + val[0].replace('userName', '');
// });

// console.log(objUserNames);

// //// ES10 .flat() => create a new array flatting nested arrays:
// const arr = [1, [2, 3], [4, 5, 6, 7]];
// const arrFlat = arr.flat(); // flat one level array
// console.log(arrFlat);

// const arr2 = [1, 2, [3, 4, [5, [6]]], 7];
// const arrFlatThree = arr2.flat(3); // flat 3 levels
// console.log(arrFlatThree);

// // .flat clean data in entries:
// const entriesArr = ['bob', 'sally', , , , , , , , 'cindy'];
// console.log(entriesArr.flat());

//// ES10 fromEntries() => create object from array elements:
// const arrNames = [
//   ['Andrei', 23],
//   ['Johnas', 34],
//   ['Kaloyan', 44],
// ];

// const objNames = Object.fromEntries(arrNames);
// console.log(objNames);

//// ES try{} catch{} block
/////////////////////////////////
// /// for of Loop : Iteting iterables: [arrays] and 'strings'
// const basket = ['apples', 'oranges', 'grapes'];
// for (const item of basket) {
//   console.log(item);
// }

// //// for in Loop: enumerating objects and objects properties
// const objBasket = {
//   apples: 5,
//   oranges: 17,
//   grapes: 100,
// };
// for (const item in objBasket) {
//   console.log(item);
// }

///////////////////////////////////////////
//// ES2020
/// BigInt = 999999999999922123n; =>add n at the end of the int number
//// Optional Chaining Operation: ?. let cha = obj ?. propety1 ?. amount
//// Nulish Coalescing Operation: ?? check if property is null or undefined
//// globalThis === window but it works out of the browser

////////////////////////////////////////////
//// ES 2021
const str = 'This is the best app of the best best apps';
const srtRpl = str.replaceAll('best', 'better');
console.log(srtRpl);
