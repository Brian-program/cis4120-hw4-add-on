import React, { useState } from 'react';
import './SettingsPopup.css';

const SettingsPopup = ({ onClose }) => {
  const [location, setLocation] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="popup">
      <span className="close" onClick={onClose}>&times;</span>
      <p>Enter location:</p>
      <input 
        type="text" 
        placeholder="City or ZIP Code" 
        value={location}
        onChange={handleLocationChange}
      />
    </div>
  );
};

export default SettingsPopup;