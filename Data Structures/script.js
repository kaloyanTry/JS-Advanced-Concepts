//// Data Strucutres

// //// 1. Array (List)
// const arrStrings = ['a', 'b', 'c', 'd'];

// console.log(arrStrings);

// arrStrings.push('e'); // 0(1) = Time Complexity
// console.log(arrStrings);

// arrStrings.pop(); // 0(1)
// console.log(arrStrings);

// arrStrings.unshift('first'); // 0(n)
// console.log(arrStrings);

// arrStrings.shift(); // 0(n)
// console.log(arrStrings);

// Sort Array:
// const nums = [1, 2, 4, 67, 8, 90];
// console.log(nums.sort((a, b) => a - b)); // best practice

//// Static: limited number of values vs Dynamic Arrays: copy and rebuild array
// //// Array Implementation:
// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }
//   get(index) {
//     return this.data[index];
//   }
//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }
//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }
//   delete(index) {
//     const item = this.data[index];
//     this.shiftItems(index);
//     return item;
//   }
//   shift() {
//     const index = 0;
//     const firstItem = this.data[index];
//     this.shiftItems(index);
//     return firstItem;
//   }

//   shiftItems(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }

//     delete this.data[this.length - 1];
//     this.length--;
//   }
// }

// const newArray = new MyArray();
// console.log(newArray);

// newArray.push('first');
// newArray.push('second');
// newArray.push('third');
// console.log(newArray);
// // newArray.pop(); // pop() = remove the last item
// // console.log(newArray.pop());

// // newArray.delete(1); // delete the item at index 1
// // console.log(newArray);

// newArray.shift(); // remove the first item
// console.log(newArray);

//// QA Reverse a string:

// function reverseString(str) {
//   if (!str || str.lenght < 2 || typeof str !== 'string') {
//     return 'It is not a string, type a string...';
//   } else {
//     let strReversed = [];
//     const totalItems = str.length - 1;
//     for (let i = totalItems; i >= 0; i--) {
//       strReversed.push(str[i]);
//     }

//     return strReversed.toString();
//   }
// }

// console.log(reverseString('firsT'));

// // Build-in methods solution:
// function reverse(str) {
//   return str.split('').reverse().join('');
// }
// console.log(reverse('first'));

// //// ES6 New syntax solution:
// const reversES6 = (str) => [...str].reverse().join('');
// console.log(reversES6('reversE'));

//////////////////////////////////
//// Exerces: Merge Sorted Arrays:

function mergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
