// let User = function(firstName, lastName, courseCount){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.courseCount = courseCount;


//     getCouseCount = function(){
//         console.log(`total number of course Count is ${courseCount}`);
//     }
// }


// User.prototype.getFirstName = function(){
//     console.log(`First name is ${this.firstName}`);
// };

// let jagdish = new User("Jagdish", "Kumawat", 5);
// console.log(jagdish.courseCount);


// console.log(jagdish.getFirstName)


// function fib(n){
//     if(n <= 1){
//         return n;
//     }

//     return fib(n-1) + fib(n-2);
// }

// console.log(fib(6));


function fun(a, b){
    if(b == 0){
        return a;
    }

    return fun(b, a % b);
}

var ans = fun(100, 2000);
console.log(ans);