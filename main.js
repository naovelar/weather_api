// API key from OpenWeather

const api = '2b5ff1a3850dba5620b735e5d5710108';

const loc = document.querySelector('#location');
const tempC = document.querySelector('.c');
const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');

// include event listener to react to an input or signal by calling the event's handler
window.addEventListener('load', () => {
  let long;
  let lat;

  // accesing location of user using a promise
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // storing longitude and latitude in variables
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

      // using fetch to get data
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const { temp } = data.main;
          const place = data.name;
          const { description } = data.weather[0];
          const fahrenheit = (temp * 9) / 5 + 32;

          // interacting with DOM to show data
          loc.textContent = `${place}`;
          desc.textContent = `${description}`;
          tempC.textContent = `${temp.toFixed(2)} °C`;
          tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
        });
    });
  }
});
