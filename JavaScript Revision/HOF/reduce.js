//reduce won't return an array.
//reduce will return an single element.
//combining and returning single element.

let number = [1, 2, 3, 4, 5, 6, 7];

let ans = number.reduce(function (acc, cv) {
  //   console.log(acc);
  //   acc = acc + current;
  //   console.log(acc);
  //   return acc;

  return acc + cv; // each time acc+cv go to ans, and asn again upldate acc, so acc will change eaach time
}, 0);

console.log(ans);

let anumber = [2, 3, 4];

let product = anumber.reduce(function (acc, cur) {
  return acc * cur;
});

console.log(product);
