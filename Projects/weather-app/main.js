const weatherName = document.querySelector('.weather__location');
const weatherIcon = document.querySelector('.weather__icon');
const weatherCondition = document.querySelector('.weather__condition');
const weatherSum = document.querySelector('.weather__summary');
const weatherTemp = document.querySelector('.temp');
const weatherTempFeel = document.querySelector('.weather__feel');
const searchInput = document.querySelector('#location-input');
const submitBtn = document.querySelector('.btn');

const apiKey = '0aee69b209f94d2fb0930509231510';
const apiURL = 'http://api.weatherapi.com/v1/current.json?key=';

const updateDOMText = (location) => {
  weatherTemp.innerText = `${location.temp}°`;
  weatherName.innerText = `${location.name}`;
  weatherCondition.innerText = location.condition;
  weatherTempFeel.innerText = `Feels like ${location.tempFeel}°`;
};

const updateWeather = (location = 'Australia') => {
  fetch(apiURL + apiKey + `&q=${location}&aqi=no`, {
    mode: 'cors',
  })
  // Return JSON data
    .then((response) => {
      return response.json();
    })
  // Process JSON data
    .then((weather) => {
      return {
        name: weather.location.name,
        country: weather.location.country,
        condition: weather.current.condition.text,
        icon: weather.current.condition.icon,
        temp: weather.current.temp_c,
        tempFeel: weather.current.feelslike_c,
      };
    })
    // Update weather
    .then((locationWeather) => {
      updateDOMText(locationWeather);
    });
};

/* ASYNC VERSION

// Function to return weather JSON data from API.
// const weatherData = async (location = 'Australia') => {
//   let response = await fetch(apiURL + apiKey + `&q=${location}&aqi=no`, {
//     mode: 'cors',
//   });
//   return await response.json();
// };

// Process JSON data to simplified object for DOM manipulation.
// const process = (weather) => {
//     return {
//       name: weather.location.name,
//       country: weather.location.country,
//       condition: weather.current.condition.text,
//       icon: weather.current.condition.icon,
//       temp: weather.current.temp_c,
//       tempFeel: weather.current.feelslike_c,
//     };
//   };

//   //Update weather based on passed argument.
//   const updateWeather = async (searchedLocation) => {
//     let rawJSON = await weatherData(searchedLocation);
//     let locationWeather = process(rawJSON);
//     updateDOMText(locationWeather);
//   };

*/

//Init
updateWeather();

submitBtn.addEventListener('click', () => {
  updateWeather(searchInput.value);
  searchInput.value = '';
});
