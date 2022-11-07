let element = document.querySelector(".counter");
let follow = document.querySelector(".followers");

let count = 0;


let intervalId = setInterval(() => {
    
    element.innerText = count;
    count++;

    if(count > 1000){
        clearInterval(intervalId);
    }

}, 10);


setTimeout(() => {
    follow.innerText = "Followers completed on Instagram!"
}, 10000);
