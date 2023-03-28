// function one(name) {
//   console.log("How are you");

//   two();
//   name();

//   console.log(name);
//   console.log(two);
// }
// one(two);

// function two() {
//   console.log("Function two here...");
// }

function sum(num1, num2, resultDisplay) {
  let res = num1 + num2;

  resultDisplay(res);
}

sum(10, 20, resultDisplay);

function resultDisplay(res) {
  // console.log("total is : ", res);
}

// x();
let x = function () {
  console.log("How aer you");
};

x();

newer();
function newer() {
  console.log("How are you!");
}
