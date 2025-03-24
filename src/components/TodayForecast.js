import React from 'react';

const TodayForecast = () => {
  const hourlyData = [
    { time: "6pm", temp: "66°", forecast: "☀️" },
    { time: "7pm", temp: "60°", forecast: "☁️" },
    { time: "8pm", temp: "61°", forecast: "☁️" },
    { time: "9pm", temp: "63°", forecast: "☁️" },
    { time: "10pm", temp: "62°", forecast: "☁️" },
    { time: "11pm", temp: "61°", forecast: "☁️" },
    { time: "12am", temp: "59°", forecast: "☁️" },
    { time: "1am", temp: "58°", forecast: "☁️" },
    { time: "2am", temp: "57°", forecast: "☁️" }
  ];

  return (
    <table className="forecast">
      <thead>
        <tr>
          <th>Time</th>
          <th>Temp</th>
          <th>Forecast</th>
        </tr>
      </thead>
      <tbody>
        {hourlyData.map((hour, index) => (
          <tr key={index}>
            <td>{hour.time}</td>
            <td>{hour.temp}</td>
            <td>{hour.forecast}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodayForecast;