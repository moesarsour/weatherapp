import React from 'react'
import { useState,useEffect } from 'react'
import css from '../multi.module.css'

function useOpenWeather ({apiKey, lat, lon, units = 'imperial'}) {
    const[apiData, setApiData] = useState(null);

    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}e&units=${units}`;

    useEffect(() => {
        fetch(apiUrl)
          .then((res) => res.json())
          .then((data) => {
              setApiData(data);
          });
      }, [apiUrl]);
      
      return apiData; 
}


function Multi (lat, lon) {
    const weather = useOpenWeather({
        apiKey:'&appid=da7909f3bd9147727010ee30fe3df8ce&units=imperial' ,
        lat,
        lon,
        units: 'imperial'
    });
    
    return (
        <div className={css.weather}>
            <h1 className='text-white text-4xl'>5 Day Forecast</h1>
          {weather && weather.daily.slice(0, 5).map(d => (
            <div>
              <img
                src={`http://openweathermap.org/img/w/${d.weather[0].icon}.png`}
                alt={d.weather[0].main}
              />
              <div>{d.temp.max} / {d.temp.min}</div>
            </div>
          ))}
        </div>
      );
}

export default Multi
