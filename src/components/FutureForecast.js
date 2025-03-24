import React from 'react';

const FutureForecast = () => {
  const dailyData = [
    { day: "Today", temp: "69°", forecast: "☀️" },
    { day: "Tomorrow", temp: "68°", forecast: "☀️" },
    { day: "2 Days", temp: "67°", forecast: "☀️" },
    { day: "3 Days", temp: "66°", forecast: "☀️" },
    { day: "4 Days", temp: "65°", forecast: "☀️" },
    { day: "5 Days", temp: "64°", forecast: "☀️" },
    { day: "6 Days", temp: "63°", forecast: "☀️" },
    { day: "7 Days", temp: "62°", forecast: "☀️" }
  ];

  return (
    <table className="forecast">
      <thead>
        <tr>
          <th>Day</th>
          <th>Temp</th>
          <th>Forecast</th>
        </tr>
      </thead>
      <tbody>
        {dailyData.map((day, index) => (
          <tr key={index}>
            <td>{day.day}</td>
            <td>{day.temp}</td>
            <td>{day.forecast}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FutureForecast;