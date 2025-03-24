import React from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = ({ icon, temperature, feelsLike, rainChance }) => {
  return (
    <div className="weather-display">
      <div className="icon">{icon}</div>
      <div className="temperature">{temperature}</div>
      <div className="details">
        <div>Feels Like<br/>{feelsLike}</div>
        <div>Rain Chance<br/>{rainChance}</div>
      </div>
    </div>
  );
};

export default WeatherDisplay;