import './App.css';
import React from 'react';
import { useState, useEffect } from "react";

const App = () => {
  const [city, setCity] = useState("New York");
  const [weather, setWeather] = useState();

  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0142932dbb2e67af6502485143249ed4&units=imperial`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((error) => console.log(error.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

    return (
        <div className='homePage'>
            <div className='header'>
                <h2>Weather</h2>
            </div>

            <div className='instructions'>
                <p>Enter your city below to get weather conditions for that area.</p>
            </div>

            <div className='zipcodeForm'>
              <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter city name"
                    className="px-4 py-3"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            </div>
 
        {weather && (
          <div className="card bg-purple-500 text-white w-[220px] h-[350px] flex flex-col justify-center items-center mt-10">
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
       
    )
}

export default App;