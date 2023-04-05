// Here is your key: f37d1526

// async function main() {
//   let movie = document.getElementById("query");

//   try {
//     let res = await fetch(
//       `https://www.omdbapi.com/?i=tt3896198&apikey=f37d1526&s=${movie}`
//     );
//     let data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log("Error : ", err);
//   }
// }

async function searchMovies() {
  let movie = document.getElementById("query").value;

  let res = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=f37d1526&s=${movie}`
  );

  let data = await res.json();

  return data.Search;

  //   console.log(data);
}

async function main() {
  let data = await searchMovies();

  if (data === undefined) {
    return false;
  }

  appendData(data);
  console.log(data);
}

let moviesContainer = document.querySelector("#movies");

function appendData(movies) {
  moviesContainer.innerHTML = null;
  movies.forEach((ele) => {
    let card = document.createElement("div");
    card.classList.add("cards");

    let img = document.createElement("img");
    img.src = ele.Poster;

    let title = document.createElement("p");
    title.textContent = ele.Title;

    let year = document.createElement("h4");
    year.textContent = ele.Year;

    card.append(img, title, year);

    moviesContainer.append(card);
  });
}

let timeId;
function debounce(func, delay) {
  if (timeId) {
    clearTimeout(timeId);
  }
  timeId = setTimeout(function () {
    func();
  }, delay);
}

//How to get same data using Promises

// function main() {
//   let movie = document.getElementById("query").value;

//   fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=f37d1526&s=${movie}`)
//     .then(function (res) {
//       return res.json();
//     })

//     .then(function (data) {
//       console.log(data);
//     })

//     .catch(function (err) {
//       console.log("Error : ", err);
//     });
// }
