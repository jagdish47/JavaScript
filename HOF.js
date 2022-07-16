// function func(callback, message){
//     // console.log("How are you " + message);
//     console.log(message);
//     callback();
// }


// func(func2, "Hello");

// function func2(){
//     console.log("Jagdish Kumawat");
  
// }








// function sum(num1, num2, callback){
//     var sum = num1 + num2;
//     callback(sum)
// }


// sum(10, 20, resultSum)

// function resultSum(output){
//     console.log("the sum is : ", output);
// }










// function greetings(){
//     console.log("Good morning!!");
// }



// var greetings_second = function(){
//     console.log("Good Afternoon")
// }
// greetings();
// greetings_second();






// var names = ["Jagdish", "Daya", "Yuvraj", "Anshu", "Kittu"];


// for(var i = 0; i < names.length; i++){
//     console.log(names[i])
// }


// names.forEach(element => {
//     console.log(element[0]);

// });


// Foreach take arguments as a function
// foreach loop run run function as have element in array
// it inbult so take 3 argument element, Index, and third complete array


// names.forEach(function(elem, idx, arr){
//     console.log(idx, " and ", elem, " and ", arr);
// })



// function display(em, idx){
//     console.log(idx, em)
// }












// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// numbers.forEach(multiply)

// function multiply(num){
//     console.log(num * 10);
// }












// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var sum = 0;

// numbers.forEach(addition);

// function addition(elem){
//     sum += elem;
// }

// console.log(sum);












// MAP
// foreach won't return anything


// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// var store = numbers.map(function(elem){
//     return elem * 10;
// })

// console.log(store);




// reduce
// return an single value

var number = [1, 2, 3, 4, 5];

var res = number.reduce(function(cv, ac){
    return cv + ac;
},0)


console.log(res);

