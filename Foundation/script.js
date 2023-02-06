//// Exercise Fixing sync code with async => setTimeout WebApi
// const list = new Array(60000).join('1.1').split('.');

// function removeItemsFromList() {
//   var item = list.pop();

//   if (item) {
//     setTimeout(removeItemsFromList, 0);
//   }
// }

// removeItemsFromList();
///////////////////////////////////////////////
//// Call a function: ()
function printName() {
  return 'Andrei Neagoie';
}

function findName() {
  return printName();
}

function sayMyName() {
  return findName();
}

console.log(sayMyName());
