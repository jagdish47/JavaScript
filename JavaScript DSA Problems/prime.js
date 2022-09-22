var num = 11;
count = 0;

for(var i = 1; i <= num; i++){
    if(num % i == 0){
        count++;
    }
}

if(count == 2){
    console.log("prime");
}else{
    console.log("not prime");
}