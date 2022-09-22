for(var i = 1; i <= 10; i++){
    console.log(i); //will print 1 to 10

    if(i == 7){
        continue;
    }

    console.log(i); //7 will skip
}