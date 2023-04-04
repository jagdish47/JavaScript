// This is a normal function

function normalFunction() {
  let obj = {
    //we have to create obj
    name: "Jagdish Kumawat",
    age: 24,
    location: "Banglore",
    country: "India",
  };

  return obj; //we have to return obj
}

// console.log(normalFunction());

// -------------------------------------------------------------------------

// CONSTRUCTOR FUNCTION :

// new keyword - create an object{} which return that object automatically where we have called.
// this keyword refer to that object.
// new keyword return object and create object also

function constructorFunction() {
  this.name = "Jagdish Kumawat";
  this.age = 24;
  this.location = "Banglore";
  this.country = "India";
}

let person1 = new constructorFunction();

console.log(person1);

// A constructor function, on the other hand, is specifically designed to be used with the new keyword to create and initialize objects. It defines a template or blueprint for creating objects of a specific type, and typically sets properties and methods on the created object.

// When a constructor function is called with the new keyword, it creates a new object and assigns it to the this keyword inside the constructor function. This new object is then returned as the result of the constructor function call.
