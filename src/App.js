import './App.css';
import {useState, useEffect} from 'react'

function App() {
const [city, setCity] = useState('North Carolina');
const [weather, setWeather] = useState();


// Possibly need another api fetch for exact location 


// Handle Submit for Form and API call
const handleSubmit = (e) => {
  e.preventDefault();
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=da7909f3bd9147727010ee30fe3df8ce&units=metric`
  )
    .then((res) => res.json())
    .then((data) => setWeather(data))
    .catch((error) => console.log(error.message));
};


return (
<h1 className="app py-4 text-5xl text-white font-serif">Search Weather</h1>,
 <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter city name"
            className="px-4 py-3"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" className="px-4 py-3 bg-blue-900 text-blue-400">
            Search
          </button>
        </form>
  </div>

  );
}

export default App;
