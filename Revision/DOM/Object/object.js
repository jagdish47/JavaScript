let User = function(firstName, lastName, courseCount){
    this.firstName = firstName;
    this.lastName = lastName;
    this.courseCount = courseCount;


    getCouseCount = function(){
        console.log(`total number of course Count is ${courseCount}`);
    }
}


let jagdish = new User("Jagdish", "Kumawat", 5);
console.log(jagdish.courseCount);