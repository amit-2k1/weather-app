import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import HomePage from './HomePage';
import WeatherDetail from './WeatherDetail';

function App() {
  const navigate = useNavigate();

  const handleLocationChange = e => {
    e.preventDefault();
    const location = e.target.querySelector('#location').value;
    navigate(`/search?location=${location}`);
  };

  return (
    <ChakraProvider>
      <Routes>
        <Route
          path="/"
          element={<HomePage onLocationChange={handleLocationChange} />}
        />
        <Route
          path="/:location"
          onLocationChange={handleLocationChange}
          element={<WeatherDetail />}
        />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
