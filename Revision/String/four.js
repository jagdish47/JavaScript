let sentence = "hello my name is jagdish kumawat";

let totalWorld = 1;

for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] == " ") {
    totalWorld = totalWorld + 1;
  }
}

console.log(totalWorld);
