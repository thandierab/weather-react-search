import React from "react";
import WeatherSearch from "./WeatherSearch";
import Links from "./Links";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <WeatherSearch />
        <Links />
      </header>
    </div>
  );
}

export default App;
