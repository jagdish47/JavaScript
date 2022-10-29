var obj = {
    name : "masai",
    loaction : "pune",
    address : {
        place : "kothrud",
        pincode : 255522,

        xyz : {
            name : "Jagdish",
            lastname : "Kumawat",
        }
    }
}

console.log(obj.name)
console.log(obj["name"]);


console.log(obj.address.place);
console.log(obj.address.xyz.name); 