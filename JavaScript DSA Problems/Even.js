var start = 0;
var end = 100;

var bag = "";
for(start; start <= end; start++){
    if(start % 2 == 0){
        bag += start + " ";
        // console.log(start);
    }
}

console.log(bag);