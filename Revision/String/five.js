let str = "i love you";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

let store = "";

for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < upper.length; j++) {
    if (str[i] == upper[j]) {
      store = store + upper[j];
    }
  }
}

console.log(store);
