let openWeatherMapAPIKey = "514eb68bb2feadc6869bbd11dde4c5c3";
const openWeatherMapAPI = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${openWeatherMapAPIKey}&units=metric`;
fetch(openWeatherMapAPI)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("data", data);
    afficherMeteoVille(data);
  })
  .catch((error) => {
    console.error("Il y a une erreur pendant l'opération de fetch :", error);
  });
