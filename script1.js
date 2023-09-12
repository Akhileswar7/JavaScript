const apiKey = '9b6600d1c70e8dcf322afd639f8efb5e';
async function fetchWeatherData() {
    const city="nandyal";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response=await fetch(apiUrl);
    if (!response.ok) {
        document.querySelector(".weather-data").innerHTML="Failed to fetch";
    }else{
        var data=await response.json();
        document.querySelector('.weather-data').innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    }
}
    
fetchWeatherData();