// function HOF(func) {
//   //   console.log(addNumber(x, x));
//   return addNumber(10, 20);
// }

// function addNumber(x, y) {
//   return x + y;
// }

// console.log(HOF(addNumber));

// -----Map()-----
// let arr = [4, 5, 1, 4];

// const newArr = arr.map((ele, index, arr) => {
//   return ele * 2;
// });

// console.log(newArr); // [8, 10, 2, 8 ]

// arr.map(function (ele) {
//   console.log(ele);
// });

// --------filter()------------
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArr = numbers.filter(function (ele) {
  return ele % 2 == 0;
});

console.log(newArr); //[ 2, 4, 6, 8 ]

//arrow function
const newArrr = numbers.filter((x) => {
  return x % 2 == 1;
});

console.log(newArrr); //[ 1, 3, 5, 7, 9 ]

// array of object
let people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 28 },
];

const filtered = people.filter((ele) => {
  return ele.age >= 30;
});

console.log(filtered); //[ { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 } ]
