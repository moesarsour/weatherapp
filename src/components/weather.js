import React from 'react'
import {useState} from 'react'


function Weather () {
const [city, setCity] = useState('Cary');
const [weather, setWeather] = useState();


// Possibly need another api fetch for exact location 


// Handle Submit for Form and API call
const handleSubmit = (e) => {
  e.preventDefault();
  fetch(
    // `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={da7909f3bd9147727010ee30fe3df8ce}`
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=da7909f3bd9147727010ee30fe3df8ce&units=imperial`
  )
    .then((res) => res.json())
    .then((data) => setWeather(data))
    .catch((error) => console.log(error.message));
};


return (
  // Form and search button 
<div className='app'>
  <h1 className="py-4 text-5xl text-white font-serif">Search Weather</h1>,
  <div className="form">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        className="px-4 py-3"
        value={city}
        onChange={(e) => setCity(e.target.value)} />
      <button type="submit" className="px-4 py-3 bg-blue-900 text-blue-400">
        Search
      </button>
    </form>
  </div>
  
  {/* Displays Weather Data and grabs image of current weather condition  */}
  {/* Starts with Logical and for Boolean */}
  {weather && ( 
        <div className="card bg-blue-500 text-white w-[220px] h-[350px] flex flex-col justify-center items-center mt-10">
          <h4 className="text-2xl">{weather.name}</h4>
          <img
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt=""
            className="w-[150px]"
          />
          <h2 className="text-5xl font-bold mb-2">{weather.main.temp}&deg;</h2>
          <p>{weather.weather[0].main}</p>
        </div>
      )}
    
</div>
);
}

export default Weather