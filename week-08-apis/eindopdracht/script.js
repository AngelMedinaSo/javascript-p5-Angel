const weatherInfo = document.querySelector('#weather-info');
const searchForm = document.querySelector('#search-form');
const cityInput = document.querySelector('#city-input');

// API_KEY wordt geladen vanuit config.js (zie config.example.js voor instructies)

const showWeather = (data) => {
  // Zet de weerinformatie van data om naar HTML in #weather-info
  // Toon: stadsnaam, weer-icon, temperatuur, gevoelstemperatuur, luchtvochtigheid en windsnelheid
  // Rond de temperaturen af met Math.round()
  // Gebruik console.log(data) om de structuur te bekijken
  // De icon-URL is: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  weatherInfo.innerHTML = `
    <article>
      <h2>${data.name}</h2>

      <img
        src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
        alt="Weer in ${data.name}"
      >

      <p>
        <span>Temperatuur</span>
        <span>${Math.round(data.main.temp)} °C</span>
      </p>

      <p>
        <span>Gevoelstemperatuur</span>
        <span>${Math.round(data.main.feels_like)} °C</span>
      </p>

      <p>
        <span>Luchtvochtigheid</span>
        <span>${data.main.humidity}%</span>
      </p>

      <p>
        <span>Windsnelheid</span>
        <span>${data.wind.speed} m/s</span>
      </p>
    </article>
  `;
};

const getWeather = (city) => {
  // Doe een fetch naar de OpenWeather API met city en API_KEY
  // De URL is: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  // Gebruik console.log(data) om de structuur te bekijken
  // Roep showWeather(data) aan met de response
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      if (data.cod !== 200) {
        weatherInfo.innerHTML = `
          <p>Stad niet gevonden.</p>
        `;
        return;
      }

      showWeather(data);
    })
    .catch(error => {
      console.error('Fout:', error);

      weatherInfo.innerHTML = `
        <p>Er is iets misgegaan.</p>
      `;
    });
};

// Voeg hier een submit event listener toe aan #search-form
// Gebruik e.preventDefault() zodat de pagina niet herlaadt
// Lees de waarde uit #city-input en roep getWeather(city) aan
// Maak de input daarna leeg
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const city = cityInput.value.trim();

  if (city === '') {
    return;
  }

  getWeather(city);

  cityInput.value = '';
});