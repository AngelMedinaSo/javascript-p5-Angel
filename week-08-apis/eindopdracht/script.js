// API_KEY wordt geladen vanuit config.js (zie config.example.js voor instructies)

const showWeather = (data) => {
  // Zet de weerinformatie van data om naar HTML in #weather-info
  // Toon: stadsnaam, weer-icon, temperatuur, gevoelstemperatuur, luchtvochtigheid en windsnelheid
  // Rond de temperaturen af met Math.round()
  // Gebruik console.log(data) om de structuur te bekijken
  // De icon-URL is: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
};

const getWeather = (city) => {
  // Doe een fetch naar de OpenWeather API met city en API_KEY
  // De URL is: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  // Gebruik console.log(data) om de structuur te bekijken
  // Roep showWeather(data) aan met de response
};

// Voeg hier een submit event listener toe aan #search-form
// Gebruik e.preventDefault() zodat de pagina niet herlaadt
// Lees de waarde uit #city-input en roep getWeather(city) aan
// Maak de input daarna leeg
