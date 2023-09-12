
function fetchCountryInfo() {
    const cc="";
  const apiUrl = `https://restcountries.com/v3.1/all/`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
        var n=Math.floor(Math.random()*100);
        document.querySelector(".country-info").innerHTML= `
        <h2>${data[n].name.common}</h2>
        <p>capital: ${data[n].capital}</p>
        <p>Population: ${data[n].population}</p>
      `;

    })
    .catch((error) => {
      document.querySelector(".country-info").innerHTML=error;
    });
}
fetchCountryInfo();