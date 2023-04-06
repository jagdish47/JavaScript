let key = "bdc_6683340f332c4231b3028fa790b61cc8";

async function getCountryData() {
  let country = document.getElementById("input").value;

  let res = await fetch(
    `https://api-bdc.net/data/country-info?code=${country}&localityLanguage=en&key=${key}`
  );

  let data = await res.json();

  appendData(data);

  //   console.log(data);
}

let countryContainer = document.querySelector(".countryCon");

function appendData(data) {
  console.log(data);

  let div = document.createElement("div");
  div.classList.add("card");

  countryContainer.innerHTML = null;

  let flag = document.createElement("h1");
  flag.innerText = data.countryFlagEmoji;

  let cname = document.createElement("h3");
  cname.textContent = `Country Name : ${data.isoName}`;

  let currency = document.createElement("p");
  currency.textContent = `Country Currency : ${data.currency.name}`;

  let lang = document.createElement("p");
  lang.textContent = `Country Language : ${data.isoAdminLanguages[0].nativeName}`;

  let region = document.createElement("p");
  region.textContent = `Country Region : ${data.unRegion}`;

  let conti = document.createElement("p");
  conti.textContent = `Continetal Region : ${data.wbRegion.value}`;

  div.append(flag, cname, currency, lang, region, conti);

  countryContainer.append(div);
}
