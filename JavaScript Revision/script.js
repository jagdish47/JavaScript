async function fetchData() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
}

fetchData()
  .then((data) => {
    // console.log(data[0]);
    createCard(data);
  })
  .catch((error) => {
    console.error(error);
  });

let body = document.getElementById("body");

function createCard(data) {
  data.map((ele) => {
    let container = document.createElement("div");
    container.classList.add("container");

    let image = document.createElement("img");
    image.src = `${ele.image}`;

    let title = document.createElement("h4");
    title.innerText = `${ele.title}`;

    let price = document.createElement("p");
    price.innerText = `${ele.price}`;

    container.append(image, title, price);

    body.append(container);
  });
}
