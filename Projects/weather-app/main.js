const weatherName = document.querySelector('.weather__location');
const weatherIcon = document.querySelector('.weather__icon');
const weatherTemp = document.querySelector('.temp');
const weatherTempFeel = document.querySelector('.temp__feel');
const searchInput = document.querySelector('#location-input');
const submitBtn = document.querySelector('.btn');

const apiKey = '0aee69b209f94d2fb0930509231510';
const apiURL = 'http://api.weatherapi.com/v1/current.json?key=';

// Function to return weather JSON data from API.
async function weatherData(location = 'Australia') {
  let response = await fetch(apiURL + apiKey + `&q=${location}&aqi=no`, {
    mode: 'cors',
  });
  return await response.json();
}

// Process JSON data to simplified object for DOM manipulation.
async function processData(location) {
  let weather = await weatherData(location);
  return {
    name: weather.location.name,
    country: weather.location.country,
    condition: weather.current.condition.text,
    icon: weather.current.condition.icon,
    temp: weather.current.temp_c,
    tempFeel: weather.current.feelslike_c,
  };
}

//Update weather based on passed argument.
async function updateWeather(location) {
  let weather = await processData(location);
  weatherName.innerText = `${weather.name},  ${weather.country}`;
  weatherIcon.src = weather.icon;
  weatherTemp.innerText = `${weather.temp}°`;
  weatherTempFeel.innerText = `Feels like ${weather.tempFeel}°`;
}

//Init
updateWeather();

submitBtn.addEventListener('click', async () => {
  await updateWeather(searchInput.value);
  searchInput.value = '';
});
