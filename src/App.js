import './App.css';
import {useState, useEffect} from 'react'

function App() {
const [city, setCity] = useState('North Carolina');
const [weather, setWeather] = useState();


// open weather api fetch
// need another api fetch for exact location 
const fetchWeather = () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY_HERE&units=metric`
  )
    .then((res) => res.json())
    .then((data) => setWeather(data))
    .catch((error) => console.log(error.message));
};


// Handle Submit for Form 
const handleSubmit = (e) => {
  e.preventDefault();
  fetchWeather();
};


return (
<h1 className="py-4 text-5xl text-white font-serif">Search Weather</h1>,
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
