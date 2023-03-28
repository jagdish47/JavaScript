// forEach we only use with array only.
// forEach not return an array.
// as we know forEach won't return an array so if want to we can create an empty array and store it into array

let names = ["Jagdish", "Anshu", "Daya", "Yuvraj", "Syam"];

names.forEach(callback);

function callback(ele, index, arr) {
  // console.log("How are you");
  // console.log(ele);
  // console.log(index);
  // console.log(arr);
}

// -------------------------------------------------------
names.forEach(function (ele, index, arr) {
  //   console.log("Index : ", index, "Element : ", ele, "Array : ", arr);
});

// ----------------------------------------------------------

let number = [1, 2, 3, 4, 5, 6, 7];

number.forEach(function (ele) {
  //   console.log(ele * 10);
});

// --------------------------------------------------------

let Number = [1, 2, 3, 4, 5, 6, 7];
let store = [];
let total = 0;

Number.forEach(function (ele, index) {
  store[index] = ele * 10;
  total = total + ele;
});

console.log(store);
console.log(total);
