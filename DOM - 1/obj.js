var obj = {
    name : "Jagdish",
    age : 24,
    gender : "Male",
    address : {
                dist : "Rajsamand",
                state : "Rajasthan",
                country : "India",
                Pin : 313330
    },
    hobbies : ["Coding", "Music", "Book-Reading"],
};



console.log(obj.name);
console.log(obj["name"]);

console.log(obj.address.state);
console.log(obj.hobbies[0]);


for(var i = 0; i < obj.hobbies.length; i++){
    console.log(obj.hobbies[i]);
}
