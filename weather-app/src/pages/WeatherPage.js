import React from "react";
import { useParams } from "react-router-dom";
import useWeatherData from '../hooks/useWeatherData';
import CurrentWeatherDisplay from '../components/CurrentWeather'
import ForecastDisplay from '../components/ForecastDisplay';
import './WeatherPage.css';

function WeatherPage() {
    const { city } = useParams();
    const { weather, error } = useWeatherData(city);

    if (error) return <p>{error}</p>;
    if (!weather) return <p>Loading...</p>;

    return (
        <div className="weather-page">
            <div className="current-weather-section">
                <CurrentWeatherDisplay weather={weather} />
            </div>
            <div className="forecast-section">
                <ForecastDisplay forecast={weather?.forecast?.forecastday} />
            </div>
        </div>
    );
}

export default WeatherPage;