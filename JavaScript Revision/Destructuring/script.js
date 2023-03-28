// Destructuring Defination -:
// Destructuring is a feature in JavaScript that allows you to extract values from arrays and objects into individual variables.
// It provides a concise and efficient way to extract and assign values to variables, which can simplify your code and make it more readable.

// 1.Array Destructuring
let one = [1, 22, 3, 4, 55, 6];

let [a, b, , , c] = one;

console.log(a);
console.log(b);
console.log(c);

let [...x] = one;
console.log(x);
