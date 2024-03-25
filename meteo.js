document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#submit").addEventListener("click", function () {
    let inputCity = document.getElementById("search-city").value;
    fetchingOpenWeatherApi(inputCity);
  });

  document
    .getElementById("search-city")
    .addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault(); // Empêche le rechargement de la page
        let inputCity = e.target.value;
        fetchingOpenWeatherApi(inputCity);
      }
    });
});

function fetchingOpenWeatherApi(ville) {
  let openWeatherMapAPIKey = "514eb68bb2feadc6869bbd11dde4c5c3";
  const openWeatherMapAPI = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${openWeatherMapAPIKey}&units=metric`;
  fetch(openWeatherMapAPI)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      afficherMeteoVille(data);
    })
    .catch((error) => {
      console.error("Il y a une erreur pendant l'opération de fetch :", error);
    });
}

function afficherMeteoVille(donnees) {
  document.querySelector(".villeMeteo").textContent = donnees.name;
  document.querySelector(
    ".temperature strong"
  ).textContent = `${donnees.main.temp}°C`;
  document.querySelector(".situation").textContent =
    donnees.weather[0].description;
  document.querySelector(".humidite").textContent = `${donnees.main.humidity}%`;
  document.querySelector(".vitesse").textContent = `${donnees.wind.speed} km/h`;
  document.querySelector(
    ".container"
  ).style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${donnees.name}')`;
}
