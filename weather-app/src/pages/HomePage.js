import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useWeatherData from '../hooks/useWeatherData';
import CurrentWeatherDisplay from "../components/CurrentWeather";
import ForecastDisplay from "../components/ForecastDisplay";
import './HomePage.css';

function HomePage() {
    const [query, setQuery] = useState(null);
    const { weather, error } = useWeatherData(query);
    const [city, setCity] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                setQuery(`${lat},${lon}`);
            },
            (error) => {
                console.error('Geolocation error:', error.message);
            }
        );
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (city.trim()) {
            navigate(`/weather/${city.trim()}`);
            setCity('');
        }
    };

    if (error) return <p>{error}</p>;
    if (!weather) return <p>Loading...</p>;

    return (
        <div className="home-page">
            <div style={{ padding: '0.4rem' }}>
                <input
                    type="text"
                    placeholder="Search by city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={{ padding: '0.5rem', fontSize: '1rem', marginLeft: '1.2rem', marginRight: '0.5rem', borderRadius: '25px', border: '1px solid rgba(255,255,255, 0.8)' }}
                />
                <button onClick={handleSearch} style={{ padding: '0.5rem', borderRadius: '25px', border: '1px solid rgba(255,255,255, 0.8)' }}>Search</button>
                <CurrentWeatherDisplay weather={weather} />
            </div>
            <div>
                <ForecastDisplay forecast={weather?.forecast?.forecastday} />
            </div>
        </div>
    );
}

export default HomePage;