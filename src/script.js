let now = new Date();

let currentDate = document.querySelector("#current-date-time");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = days[now.getDay()];
let currentHours = now.getHours();
let currentMinutes = String(now.getMinutes()).padStart(2, `0`);

currentDate.innerHTML = `${currentDay} ${currentHours}:${currentMinutes}`;
let homeCity = "Copenhagen";
let apiUrlHome = `https://api.openweathermap.org/data/2.5/weather?q=${homeCity}&units=metric`;
let apiKeyHome = "f3887e262c88d1158f7e2ef4998e234c";

function showTempHome(response) {
  let tempCityHome = Math.round(response.data.main.temp);
  let showTempCityHome = document.querySelector("#temperature");
  showTempCityHome.innerHTML = `${tempCityHome}ºC`;
}

axios.get(`${apiUrlHome}&appid=${apiKeyHome}`).then(showTempHome);

function showHumidityHome(response) {
  let cityHumidityHome = response.data.main.humidity;
  let showCityHumidityHome = document.querySelector("#humidity");
  showCityHumidityHome.innerHTML = `Humidity: ${cityHumidityHome}%`;
}

axios.get(`${apiUrlHome}&appid=${apiKeyHome}`).then(showHumidityHome);

function showWindspeedHome(response) {
  let cityWindspeedHome = Math.round(response.data.wind.speed);
  let showCityWindspeedHome = document.querySelector("#windspeed");
  showCityWindspeedHome.innerHTML = `Wind ${cityWindspeedHome} km/h`;
}

axios.get(`${apiUrlHome}&appid=${apiKeyHome}`).then(showWindspeedHome);

function showWeatherDescriptionHome(response) {
  let cityWeatherDescriptionHome = response.data.weather[0].main;
  let showCityWeatherDescriptionHome = document.querySelector(
    "#weather-description"
  );
  showCityWeatherDescriptionHome.innerHTML = `${cityWeatherDescriptionHome}`;
}

axios.get(`${apiUrlHome}&appid=${apiKeyHome}`).then(showWeatherDescriptionHome);

function showLocation(event) {
  event.preventDefault();
  function showPosition(position) {
    let lat = position.coords.latitude.toFixed(2);
    let lon = position.coords.longitude.toFixed(2);

    let apiKeyGeo = "bd5b4461863eddaa6ced0a0a67989e0a";
    let apiUrlGeo = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5`;

    function showGeoCity(response) {
      let geoCity = response.data[0].name;
      let showGeoCity = document.querySelector("#current-city");
      showGeoCity.innerHTML = `${geoCity}`;

      let apiKeyGeoWeather = "3bc520cc14bbdedfd7e45158f2ef0439";
      let apiUrlGeoWeather = `https://api.openweathermap.org/data/2.5/weather?q=${geoCity}&units=metric`;

      function showGeoWeatherTemp(response) {
        let tempGeoCity = Math.round(response.data.main.temp);
        let showGeoCity = document.querySelector("#temperature");
        showGeoCity.innerHTML = `${tempGeoCity}ºC`;
      }

      axios
        .get(`${apiUrlGeoWeather}&appid=${apiKeyGeoWeather}`)
        .then(showGeoWeatherTemp);

      function showHumidityGeo(response) {
        let cityHumidityGeo = response.data.main.humidity;
        let showCityHumidityGeo = document.querySelector("#humidity");
        showCityHumidityGeo.innerHTML = `Humidity: ${cityHumidityGeo}%`;
      }

      axios
        .get(`${apiUrlGeoWeather}&appid=${apiKeyGeoWeather}`)
        .then(showHumidityGeo);

      function showWindspeedGeo(response) {
        let cityWindspeedGeo = Math.round(response.data.wind.speed);
        let showCityWindspeedGeo = document.querySelector("#windspeed");
        showCityWindspeedGeo.innerHTML = `Wind ${cityWindspeedGeo} km/h`;
      }

      axios
        .get(`${apiUrlGeoWeather}&appid=${apiKeyGeoWeather}`)
        .then(showWindspeedGeo);

      function showWeatherDescriptionGeo(response) {
        let cityWeatherDescriptionGeo = response.data.weather[0].main;
        let showCityWeatherDescriptionGeo = document.querySelector(
          "#weather-description"
        );
        showCityWeatherDescriptionGeo.innerHTML = `${cityWeatherDescriptionGeo}`;
      }

      axios
        .get(`${apiUrlGeoWeather}&appid=${apiKeyGeoWeather}`)
        .then(showWeatherDescriptionGeo);
    }

    axios.get(`${apiUrlGeo}&appid=${apiKeyGeo}`).then(showGeoCity);
  }
  navigator.geolocation.getCurrentPosition(showPosition);
}
let geoButton = document.querySelector("#currentGeoButton");
geoButton.addEventListener("click", showLocation);

function clickSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#type-city");
  let city = document.querySelector("#current-city");
  let valueCity = `${searchInput.value}`;
  city.innerHTML = `${valueCity}`;

  let apiKey = "bd5b4461863eddaa6ced0a0a67989e0a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${valueCity}&units=metric`;

  function showTemperature(response) {
    let tempCity = Math.round(response.data.main.temp);
    let showCityTemp = document.querySelector("#temperature");
    showCityTemp.innerHTML = `${tempCity}ºC`;
  }

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

  function showHumidity(response) {
    let cityHumidity = response.data.main.humidity;
    let showCityHumidity = document.querySelector("#humidity");
    showCityHumidity.innerHTML = `Humidity: ${cityHumidity}%`;
  }

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showHumidity);

  function showWeatherDescription(response) {
    let cityWeatherDescription = response.data.weather[0].main;
    let showCityWeatherDescription = document.querySelector(
      "#weather-description"
    );
    showCityWeatherDescription.innerHTML = `${cityWeatherDescription}`;
  }

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showWeatherDescription);

  function showWindspeed(response) {
    let cityWindspeed = Math.round(response.data.wind.speed);
    let showCityWindspeed = document.querySelector("#windspeed");
    showCityWindspeed.innerHTML = `Wind ${cityWindspeed} km/h`;
  }

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showWindspeed);
}

let submitCity = document.querySelector("#search-engine");
submitCity.addEventListener("submit", clickSubmit);
