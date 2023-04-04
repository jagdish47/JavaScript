console.log(this); //{} empty object which refer to global object

function letsCheckInFunction() {
  console.log(this); //give you window object in browser
}

// letsCheckInFunction();

// In Browser - window Object
// In Node Enviroment - global object {}

// In a browser environment, the global object is window, and in a Node.js environment, the global object is global. When you log this in the global scope, you are essentially logging the global object.

// The global object is an empty object by default, so that is why you see an empty object {} when you log this in the global scope. However, if you add any properties or methods to the global object, those will show up when you log this.

let person1 = {
  name: "Jagdish Kumawat",
  test: function () {
    console.log(this);
  },
};

person1.test(); //give you person1 object

//this keyword always flexible.
//this keyword always gives you an Object.
