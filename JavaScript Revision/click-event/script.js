const button = document.querySelector(".btn");

let body = document.getElementsByTagName("body");

button.addEventListener("click", (event) => {
  let name = document.createElement("h1");
  name.innerText = "How are you";

  body[0].appendChild(name);
});

// const buttons = document.getElementsByClassName("btn");

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", () => {
//     console.log("from getElementByClassName");
//   });
// }
