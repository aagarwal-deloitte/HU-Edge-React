import React from "react";
import './ForecastDisplay.css';

function ForecastDisplay({ forecast }) {
    if (!forecast) return <p>No forecast data available.</p>;

    return (
        <>
            {forecast?.[0]?.hour && (
                <>
                    <div className="forecast-container">
                        <div className="forecast-title"><h3>Hourly Forecast</h3></div>
                        <div className="hourly-wrapper">
                            {forecast[0].hour.map((h, i) => (
                                <div key={i} className="hour-card">
                                    <img src={h.condition.icon} alt=" " />
                                    {h.time.split(' ')[1]}
                                    <p>{Math.round(h.temp_c)}°C</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
            {/* 5 day weather display */}
            <div className="forecast-container" style={{ marginTop: '20px' }}>
                <div className="forecast-title"><h3>5 Day Forecast</h3></div>
                <div className="days-wrapper">
                    {forecast.map((day, i) => (
                        <div key={i} className="day-card">
                            <img src={day.day.condition.icon} alt=" " />
                            <strong>{day.date}</strong> - {Math.round(day.day.avgtemp_c)}°C - {day.day.condition.text}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ForecastDisplay;