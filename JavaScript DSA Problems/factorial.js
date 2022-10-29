//factorial iteratively
var num = 5;
var fact = 1;

for(var i = 1; i <= num; i++){
    fact = fact * i;
}
console.log(fact);




// factorial using recursion
var n = 0;
console.log(fact(n));

function fact(n){
    if(n >= 1){
        return n * fact(n-1);
    }
    else{
        return 1;
    }
}