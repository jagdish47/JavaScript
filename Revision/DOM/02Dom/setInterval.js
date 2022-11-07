// const intervalId = setInterval(myFunction, 1000);

// let count = 0;


// function myFunction(){
//     console.log(count);
//     count++;

//     if(count == 10){
//         clearInterval(intervalId);
//     }
// }



let count = 0;
let intervalId = setInterval(() => {
    console.log(count);
    count++;

    if(count > 5){
        clearInterval(intervalId);
    }
}, 1000);


