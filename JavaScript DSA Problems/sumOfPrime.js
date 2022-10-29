var sum = 0;

var number = 100;

for (var i = 1; i <= number; i++) {
    var factor = 0;

    for(var j = 1; j <= i; j++){
        if(i % j == 0){
            factor++;
        }
    }

    if(factor == 2){
        sum += i;
    }
}

console.log(sum);

