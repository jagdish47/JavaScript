// setTimeout(myFunction, 5000);

// function myFunction(){
//     console.log("fuck you");
// }


let count = 10;
let timeoutId = setTimeout(() => {


    console.log(count);
}, 3000);



let arr = ["one", "two", "three"];

setTimeout(() => {
    for(let i = 0; i < arr.length; i++){
        setInterval(() => {
            console.log(arr[i]);
        },3000)
    }
}, 5000)