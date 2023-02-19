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

// //// Creating a Pormise:
// const promise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve(console.log('Stuff worked!'));
//   } else {
//     reject(console.log('Error, it broke'));
//   }
// });

// promise
//   .then((result) => result + '!')
//   .then((result2) => result2 + '?')
//   .catch(() => console.log('error')) // only runs if smt fails between .thens
//   .then((result3) => {
//     result3 + '!';
//   }); // promise is an async function

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
// }).catch('ooops').finaly(console.log('extra'));

// Async await function: ES8 => on the top of the Promises: syntaxis shuger - under need
// Async declaration:
// async function playerStart() {
//   const firstMovie = await movePlayer(100, 'Left');
//   await movePlayer(400, 'Left');
//   await movePlayer(10, 'Right');
//   await movePlayer(330, 'Left');
// }

//// Async Await Pattern:
// async function fetchUsers() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await response.json();
//   console.log(data);
// }
// fetchUsers();

// //// Async urls with async await:
// const urls = [
//   'https://jsonplaceholder.typicode.com/users',
//   'https://jsonplaceholder.typicode.com/posts',
//   'https://jsonplaceholder.typicode.com/albums',
// ];

// const getData = async function () {
//   try {
//     const [users, posts, albums] = await Promise.all(
//       urls.map((url) => fetch(url).then((response) => response.json()))
//     );
//     console.log('users', users);
//     console.log('posts', posts);
//     console.log('albums', albums);
//   } catch (err) {
//     console.log('oops', err);
//   }
// };
// getData();

// //// ES9
// const arr = [1, 2, 3, 4, 5];
// function sum(a, b, c, d, e) {
//   return a + b + c + d + e;
// }
// console.log(sum(...arr)); // clever spread... operator summing :)

// const objs = {
//   lion: 4,
//   tiger: 2,
//   monkey: 12,
//   birds: 40,
// };

// const { lion, ...rest } = objs; // spread the rest objs
// console.log(rest);

//////// await for loop
// const urls = [
//   'https://jsonplaceholder.typicode.com/users',
//   'https://jsonplaceholder.typicode.com/posts',
//   'https://jsonplaceholder.typicode.com/albums',
// ];

// const getDataLoop = async function () {
//   const arrOfPromises = urls.map((url) => fetch(url));
//   for await (let request of arrOfPromises) {
//     const data = await request.json();
//     console.log(data);
//   }
// };
// getDataLoop();

//// Async Exercise 3 types comparison:
const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `parallel is done: ${output1} ${output2} ${output3}`;
}

async function race() {
  const promises = [a(), b(), c()];
  const output = await Promise.race(promises);
  return `race is done: ${output}`;
}

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`;
}

sequence().then(console.log);
parallel().then(console.log);
race().then(console.log);
