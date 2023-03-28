// console.log(name);
// var name = "jagdish";

// function hey() {
//   var age = 21;
//   console.log(name);
// }

// hey();
// console.log(age);

// // console.log(name); //referenceError because hoisting won't work with let
// let name = "jagdish";

// function hey() {
//   let age = 21;
//   console.log(name);
// }

// hey();
// console.log(age);

// console.log(pie); //ReferenceError: Cannot access 'pie' before initialization
const pie = 3.14;
console.log(pie); //3.14

pie = 4.14; //TypeError: Assignment to constant variable.
console.log(pie);
