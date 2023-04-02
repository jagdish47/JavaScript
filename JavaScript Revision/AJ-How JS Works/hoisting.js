console.log(name); //undefined
console.log(age); //undefined

// it won't give you error. it will console undefined so you this is called hoisting.
// JS first use Crating phase it create, var type data as undefined
//Hositng not working in let and const because they are block scope type.

var name = "Jagdish";
var age = 24;

console.log(name); //Jagdish
console.log(age); //24

//Functions-----------------------------------------------------

// in function if you call before the function creating you can call the funciton without any error.
// this is how Hoisting works in JS Function

printName(); //My name is Jagdish Kumawat
function printName() {
  console.log("My name is Jagdish Kumawat");
}
printName(); //My name is Jagdish Kumawat
