// Map function will return an array forEach won't return an array

let number = [1, 2, 3, 4, 5];

let store = number.map(function (ele, ind, arr) {
  return ele;
});
// console.log(store);

for (let i = 0; i < store.length; i++) {
  //   console.log(store[i]);
}

// ------------------------------------------------------------
let storage = number.map(callback);

function callback(ele) {
  return ele;
}

console.log(storage);
