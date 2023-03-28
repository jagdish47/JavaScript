let day = "sunday";

switch (day) {
  case "sunday":
    // console.log("this is sunday");
    for (let i = 0; i < 10; i++) {
      if (i % 2 == 0) {
        // console.log(i);
      }
    }
}

let x = 10;

// console.log(x++);
// console.log(x);

let y = 20;
// console.log(++y);
// console.log(y);

let id = setTimeout(() => {
  console.log("hello");
  console.log(id);
}, 5000);
