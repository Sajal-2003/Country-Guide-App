let countryInp = document.getElementById("country-inp");
let searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");

searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  fetch(finalURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data)
      result.innerHTML = `
            <img src="${data[0].flags.svg}" class="flag-img">
            <h2> ${data[0].name.common} </h2>
            <div class="wrapper">
               <div class="data-wrapper">
                     <h4>Capital:</h4>
                     <span>${data[0].capital[0]}</span>
                </div>
            </div>
            <div class="wrapper">
               <div class="data-wrapper">
                     <h4>Contionent:</h4>
                     <span>${data[0].continents[0]}</span>
                </div>
            </div>
            <div class="wrapper">
               <div class="data-wrapper">
                     <h4>Currency:</h4>
                     <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)}</span>
                </div>
            </div>
            <div class="wrapper">
            <div class="data-wrapper">
                  <h4>Languages:</h4>
                  <span>${Object.values(data[0].languages).toString().split(",").join(",")}</span>
             </div>
         </div>

        `;
    });
});
