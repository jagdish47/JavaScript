// Global Scope
let globalVariable = "I am global variable accessible anywhere";

function one() {
  console.log(globalVariable);
}
one();

console.log(globalVariable);

// function a() {
//   console.log(num);
// }

// var num = 10;
// a();

// ---------------------

// function a() {
//   b();
//   function b() {
//     console.log(num);
//   }
// }

// var num = 10;
// a();

// ------------------

// function one() {
//   console.log(num);
//   two();
//   function two() {
//     console.log(num);
//     three();
//     function three() {
//       console.log(num);
//     }
//   }
// }

// let num = 143;
// one();

// -----------------

// function one() {
//   let a = 100;
// }

// console.log(a);
