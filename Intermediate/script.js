// Array Advanced
// Array Methods: map filter reduce
const arr = [1, 8, 3, 6, 7];

const arrMap = arr.map((num) => num * 2);
console.log(arrMap);

const arrFilter = arr.filter((num) => num >= 5);
console.log(arrFilter);

const arrReduce = arr.reduce((acc, num) => acc + num);
const arrReduceLong = arr.reduce((acc, num) => {
  return acc + num;
}, 0); // Long version of reduce method, starts to sum from 0
console.log(arrReduce);
/////////////////////////////

//// Advanced Object
// Instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi, I'am ${this.name} and I am a ${this.type}`);
  }
}

class Wizzard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`Weee, we ${this.type} are playing!`);
  }
}

const wizzard1 = new Wizzard('Peter', 'Megican');
console.log(wizzard1.play());
