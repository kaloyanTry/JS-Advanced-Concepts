'use strict';
//// OOP

// // Factory Functions = function that creates object for us:
// function createElf(name, weapon) {
//   return {
//     name, // name: name, if are the same use it once
//     weapon, // weapon: weapon, if are the same use it once
//     attack() {
//       return name + ' attacks with ' + weapon;
//     },
//   };
// }

// const peterElf = createElf('Peter', 'stones');
// console.log(peterElf.attack());

// const samElf = createElf('Sam', 'fire');
// console.log(samElf.attack());

// // Object.create():
// const elfFunctionsStore = {
//   attack() {
//     return this.name + ' attacks with ' + this.weapon;
//   },
// };

// function createElf(name, weapon) {
//   let newElf = Object.create(elfFunctionsStore);
//   newElf.name = name;
//   newElf.weapon = weapon;
//   return newElf;
// }
// const peterElf = createElf('Peter', 'stones');
// console.log(peterElf.attack());

// const samElf = createElf('Sam', 'fire');
// console.log(samElf.attack());

//// Constructor function:
// function Elf(name, weapon) {
//   this.name = name;
//   this.weapon = weapon;
// }

// Elf.prototype.attack = function () {
//   return `${this.name} attacks with ${this.weapon}`;
// };

// const peter = new Elf('Peter', 'stones');
// console.log(peter.attack());
// const sam = new Elf('Sam', 'fire');
// console.log(sam.attack());

///// OOP Class ES6:
class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return `${this.name} attacks with ${this.weapon}`;
  }
}

const peterElf = new Elf('Peter', 'stones');
console.log(peterElf.attack());
const samElf = new Elf('Sam', 'fire');
console.log(samElf.attack());
