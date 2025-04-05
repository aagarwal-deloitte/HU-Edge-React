import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage'
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/weather/:city' element={<WeatherPage />} />
        </Routes>
    </Router>
  );
}

export default App;