import React from "react";
import { useParams } from "react-router-dom";
import useWeatherData from '../hooks/useWeatherData';
import CurrentWeatherDisplay from '../components/CurrentWeather'
import ForecastDisplay from '../components/ForecastDisplay';
import './HomePage.css';

function WeatherPage() {
    const { city } = useParams();
    const { weather, error } = useWeatherData(city);

    if (error) return <p>{error}</p>;
    if (!weather) return <p>Loading...</p>;

    return (
        <div className="home-page">
            <CurrentWeatherDisplay weather={weather} />
            <div>
                <ForecastDisplay forecast={weather?.forecast?.forecastday} />
            </div>
        </div>
    );
}

export default WeatherPage;