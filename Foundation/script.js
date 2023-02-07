//// Exercise Fixin sync code with async => setTimeout WebApi
// const list = new Array(60000).join('1.1').split('.');

// function removeItemsFromList() {
//   var item = list.pop();

//   if (item) {
//     setTimeout(removeItemsFromList, 0);
//   }
// }

// removeItemsFromList();
///////////////////////////////////////////////
//// How JS works simple:
// function printName() {
//   return 'Andrei Neagoie';
// }

// function findName() {
//   return printName();
// }

// function sayMyName() {
//   return findName();
// }

// console.log(sayMyName());
////////////////////////////
//// Hoisting exercise:
// function bigBrother() {
//   function littleBorther() {
//     return 'IT IS ME!';
//   }
//   return littleBorther();

//   function littleBorther() {
//     return 'no me!';
//   }
// }
// console.log(bigBrother());
//////////////////////////////

//// Arguments:
// function marry(person1, person2) {
//   console.log('arguments', arguments);

//   return `${person1} is merried to ${person2}.`;
// }

// console.log(marry('Sonia', 'Pan'));
//////////////////////////////////////

//// Scope Chain:
// function sayMyName() {
//   var a = 'a';
//   return function findName() {
//     var b = 'b';
//     // console.log(c); NO access to var c
//     return function printName() {
//       var c = 'c';
//       // console.log(a); // Yes access to var a
//       return 'KAloyan';
//     };
//   };
// }
// console.log(sayMyName()); // print printName and findName functions and KAloyan
// console.log(sayMyName()()); // print printName function and KAloyan
// console.log(sayMyName()()()); // print KAloyan

/////////////////////////////
// function findName() {
//   var b = 'b';
//   return printName();
// }

// function printName() {
//   var c = 'c';
//   return 'Andrei Neagoie';
// }

// function sayMyName() {
//   var a = 'a';
//   return findName();
// }

// sayMyName();

///////////////////////////////////////////
// // 3 methods to manipulate this keyword: call() apply() bind()
// const wizard = {
//   name: 'Merilin',
//   health: 50,
//   heal(num1, num2) {
//     return (this.health += num1 + num2);
//   },
// };
// wizard.heal(30, 40);
// console.log(wizard);

// const archer = {
//   name: 'Robin Hood',
//   health: 20,
// };

// console.log('1', archer);

// //// call() method, uses parameters:
// // console.log('-- call() method--');
// // // call() is method that uses parameters from wizar.heal function
// // wizard.heal.call(archer, 60, 100);
// // console.log('2 call()', archer);

// //// applay() method, uses array:
// // console.log('--apply() method--');
// // wizard.heal.apply(archer, [30, 70]);
// // console.log('3 apply()', archer);

// //// bind() method return a function that can be used later on:
// const healArcher = wizard.heal.bind(archer, 60, 100);
// healArcher();
// console.log('4 bind()', archer);

//////////////////////////////////////
//// this apply() exercise:
// const array = [1, 2, 3];

// function getMaxNumber(arr) {
//   // simple solution:
//   // const maxNum = Math.max(...arr);
//   // return maxNum;
//   // this apply() to inherits method from JS Math Object
//   return Math.max.apply(null, arr); // we can use this instead null
// }

// console.log(getMaxNumber(array));
/////////////////////////////////////////////
// // function currying:
// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(4, 6));

// // multiply only one of the parameters by a current number:
// const multiplyByTwo = multiply.bind(this, 2);
// console.log(multiplyByTwo(4));
// const multiplyByTen = multiply.bind(this, 10);
// console.log(multiplyByTen(4));
///////////////////////////////////////

//// this bind exercise:
const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  },
};

const giveMeTheCharacterNOW = character.getCharacter;
console.log('?', giveMeTheCharacterNOW());

const giveMeTheCharacterNOW2 = character.getCharacter.bind(character);
console.log('?', giveMeTheCharacterNOW2());
