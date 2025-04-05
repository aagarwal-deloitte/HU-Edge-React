import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [city, setCity] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (city.trim()) {
            navigate(`/weather/${city}`);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{ padding: '0.5rem', fontSize: '1rem' }}
            />
            <button onClick={handleSearch} style={{ marginLeft: '1rem', padding: '0.5rem' }}>
                Search
            </button>
        </div>
    );
}

export default Home;