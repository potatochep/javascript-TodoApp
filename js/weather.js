const API_KEY = "c1da8c352f8520ef04890ce0ad4c7d98";
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}/ ${data.main.temp}`;
    });
}

function onGeoFail() {
  alert("No Weather");
}
