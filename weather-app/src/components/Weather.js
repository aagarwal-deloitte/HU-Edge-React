import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function WeatherPage(){
    const { city } = useParams();
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    const apikey = '68abca11cf9e4fc5bed111314250404';

    useEffect(() => {
        setLoading(true);
        fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`)
        .then(res => res.json())
        .then(data => {
            setWeather(data);
            setLoading(false);
        })
        .catch(err => {
            console.error('Error:', err);
            setLoading(false);
        });
    }, [city]);

    if (loading) {
        return <p>
            Loading weather data for {city}...
        </p>;
    }

    if (!weather || weather.error) {
        return <p>
            Could not find weather for ${city}...
        </p>;
    }

    return (
        <div>
            <h2>{weather.location.name}</h2>
            <p>Temperature: {weather.current.temp_c}°C</p>
            <p>Condition: {weather.current.condition.text}</p>
            <img src={weather.current.condition.icon} alt="Weather icon" />
        </div>
    );
}

export default WeatherPage;