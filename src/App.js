import React, { useState } from 'react';
import './App.css';
import WeatherDisplay from './components/WeatherDisplay';
import ForecastTabs from './components/ForecastTabs';
import TodayForecast from './components/TodayForecast';
import FutureForecast from './components/FutureForecast';
import SettingsPopup from './components/SettingsPopup';

function App() {
  const [activeTab, setActiveTab] = useState('today');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="weather-container">
      <div className="settings-icon" onClick={togglePopup}>⚙️</div>
      
      <WeatherDisplay 
        icon="☀️" 
        temperature="69°" 
        feelsLike="72°" 
        rainChance="01%" 
      />
      
      <ForecastTabs 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
      
      {activeTab === 'today' ? (
        <TodayForecast />
      ) : (
        <FutureForecast />
      )}
      
      {isPopupVisible && (
        <SettingsPopup onClose={togglePopup} />
      )}
    </div>
  );
}

export default App;