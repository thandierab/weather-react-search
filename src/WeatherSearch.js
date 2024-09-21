import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "97c2f6a3b34509ac62090edc5d18d949";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then((response) => {
      setWeather({
        city: response.data.name,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        icon: response.data.weather[0].icon,
      });
    });
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  const iconMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "SHOWERS_DAY",
    "09n": "SHOWERS_NIGHT",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "STORM",
    "11n": "STORM",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  const weatherIcon = weather ? iconMapping[weather.icon] : "CLEAR_DAY";

  return (
    <div className="WeatherSearch">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="search"
          placeholder="Type a city..."
          onChange={changeCity}
          value={city}
        />
        <input type="submit" value="Search" className="submit" />
      </form>
      {weather && (
        <ul className="list">
          <li>Temperature: {weather.temperature}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind} km/h</li>
          <li>
            <ReactAnimatedWeather
              icon={weatherIcon}
              color="lightblue"
              size={75}
              animate={true}
            />
          </li>
        </ul>
      )}
    </div>
  );
}
