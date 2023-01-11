// ------------Function Declaration---------
// Function Declaration are hoisted you can call them after

// =======code=========
// console.log(sum(10, 54)); //works

// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(10, 54));

// ----------------Function Expression---------------
// console.log(sum(10, 50)); // not work because function expression are not hoisted

// let sum = function (a, b) {
//   return a + b;
// };

// // console.log(sum(10, 50));

// let anotherFunction = function substration(a, b) {
//   return a - b;
// };

// console.log(substration(10, 5));

// ----------------Arrow Function---------------?

let sum = (a, b) => {
  return a + b;
};

console.log(sum(10, 20));

let addNumber = (a, b) => a + b;

console.log(addNumber(10, 54));
