//// Module JS + Error Han/dling
// Excercise 1
// (function () {
//   try {
//     throw new Error();
//   } catch (err) {
//     var err = 5;
//     var boo = 10;
//     console.log(err);
//   }
//   //Guess what the output is here:
//   console.log(err);
//   console.log(boo);
// })();

//// Exercise 2
function fail() {
  try {
    console.log('this works'); // 1
    throw new Error('oopsie'); // 2
  } catch (e) {
    console.log('error', e); // 2
  } finally {
    console.log('still good'); //3
    return 'returning from fail';
  }
  console.log('never going to get here'); // not reachable
}
fail();
