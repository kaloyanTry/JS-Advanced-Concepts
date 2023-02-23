'use strict mode';

class Arr {
  constructor() {
    this.lenght = 0;
    this.data = {};
  }

  get(ind) {
    return this.data[ind];
  }

  push(item) {
    this.data[this.lenght] = item;
    this.lenght++;
    return item;
  }

  pop() {
    const lastItem = this.data[this.lenght - 1];
    delete this.data[this.lenght - 1];
    this.lenght--;
    return lastItem;
  }

  shiftItems(ind) {
    for (let i = ind; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.lenght - 1];
    this.lenght--;
  }

  delete(ind) {
    const item = this.data[this.lenght - 1];
    this.shiftItems(ind);
    return item;
  }
}

const nwArr = new Arr();

nwArr.push('first');
nwArr.push('sec');
nwArr.push('trd');
console.log(nwArr);

console.log(nwArr.push('fourth'));

// nwArr.pop();
// console.log(nwArr);

// nwArr.delete(2);
// console.log(nwArr);
