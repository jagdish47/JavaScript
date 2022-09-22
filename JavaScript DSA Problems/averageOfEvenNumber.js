var start = 1;
var end = 500;

var count = 0;
var sum = 0;

for(start; start <= end; start++){
    if(start % 2 == 0){
        sum += start;
        count++;
    }
}

console.log("Average is : ", sum / count);