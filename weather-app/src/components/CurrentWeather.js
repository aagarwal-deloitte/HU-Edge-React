import React from "react";
import './CurrentWeather.css';

function CurrentWeatherDisplay({ weather }) {
    if (!weather) return <p>No weather data available.</p>;

    return (
        <>
            <div className="current-weather-container">
                <div className="current-weather-header"><h2>{weather.location.name}</h2></div>
                <div className="weather-info">
                <h1>{Math.round(weather.current.temp_c)}°C</h1>
                    <div className="weather-info-details">
                        <span>{weather.current.condition.text}</span>
                        <img src={weather.current.condition.icon} alt="Weather icon" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CurrentWeatherDisplay;