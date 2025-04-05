import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import WeatherPage from './components/Weather'

function App() {
  return (
    <Router>
      <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>Weather Forecast App</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/weather/:city' element={<WeatherPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;