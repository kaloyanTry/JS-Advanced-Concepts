//// Async JS

// // 1. old way callbacks:
// setTimeout(() => {
//   console.log('1', 'is the loneliest num');
// }, 0);
// setTimeout(() => {
//   console.log('2', 'can be as bad as one');
// }, 10);

// // 2. The new way Promise:
// Promise.resolve('hi').then((data) => console.log('2', data));

// // 3. Regular output:
// console.log('3', 'is the crowd');

////// Async url request
// const urls = [
//   'https://jsonplaceholder.typicode.com/users',
//   'https://jsonplaceholder.typicode.com/posts',
//   'https://jsonplaceholder.typicode.com/albums',
// ];

// Promise.all(
//   urls.map((url) => {
//     return fetch(url).then((response) => response.json());
//   })
// ).then((results) => {
//   console.log(results[0]);
//   console.log(results[1]);
//   console.log(results[2]);
// });

//// Creating a Pormise:
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve(console.log('Stuff worked!'));
  } else {
    reject(console.log('Error, it broke'));
  }
});

promise
  .then((result) => result + '!')
  .then((result2) => result2 + '?')
  .catch(() => console.log('error')) // only runs if smt fails between .thens
  .then((result3) => {
    result3 + '!';
  });
