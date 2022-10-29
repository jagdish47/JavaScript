// as we know string is immutable because of security reason we will see how we can change the string

// we will change asha to usha
let name = "asha";

let bag = "";
let finder = 0;

for (let i = 0; i < name.length; i++) {
  if (name[i] == "a" && finder == 0) {
    bag += "u";
    finder++;
  } else {
    bag += name[i];
  }
}
console.log(bag);
console.log(name);
