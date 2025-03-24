import React from 'react';
import './ForecastTabs.css';

const ForecastTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="buttons">
      <button 
        id="today-btn" 
        className={`button ${activeTab === 'today' ? 'active' : ''}`} 
        onClick={() => onTabChange('today')}
      >
        Today
      </button>
      <button 
        id="future-btn" 
        className={`button ${activeTab === 'future' ? 'active' : ''}`}
        onClick={() => onTabChange('future')}
      >
        Future
      </button>
    </div>
  );
};

export default ForecastTabs;