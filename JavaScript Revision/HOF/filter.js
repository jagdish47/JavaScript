//Filter also returning an array like map

let number = [1, 2, 3, 4, 5, 5, 7, 8, 9];

let store = number.filter(callback);

function callback(ele, index, arr) {
  return ele % 2 == 0;
}

console.log(store);
