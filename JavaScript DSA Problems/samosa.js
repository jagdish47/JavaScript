var samosaRs = 5;
var totalMoney = 198;

var countGoingShop = 0;

while(totalMoney >= 5){
    totalMoney -= 5;
    countGoingShop++;
}

console.log("times can go to shop = " + countGoingShop);

console.log("left Money = " + totalMoney);