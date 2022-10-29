for(var i = 1; i <= 5; i++){
    console.log("outer loop " + i);

    for(var j = 1; j <= 5; j++){
        console.log("inner " + j);
    }

    console.log("after inner loop");
}