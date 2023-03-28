// Given an array find the sum of odd Element.

let number = [1, 2, 3, 4, 5, 6, 7, 8];

let even = number.filter(function (ele, ind, arr) {
  return ele % 2 == 0;
});

let ans = even.reduce(function (acc, cv) {
  return acc + cv;
});

// console.log(ans);

// --------------------------------------------------------------------------------

let one = function (ele) {
  return ele % 3 == 0;
};

let two = function (acc, cv) {
  return acc + cv;
};

let arr = [1, 2, 3, 4, 5, 6];

let uttar = arr.filter(one).reduce(two);

console.log(uttar);
