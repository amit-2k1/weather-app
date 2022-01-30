import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import HomePage from './HomePage';
import WeatherDetail from './WeatherDetail';
import Error from './Error';

function App() {
  const navigate = useNavigate();

  const handleLocationChange = e => {
    e.preventDefault();
    const location = e.target.querySelector('#location').value;
    navigate(`/weather/search?location=${location}`);
  };

  return (
    <ChakraProvider>
      <Routes>
        <Route
          path="/"
          element={<HomePage onLocationChange={handleLocationChange} />}
        />
        <Route
          path="/weather/:location"
          onLocationChange={handleLocationChange}
          element={<WeatherDetail navigate={navigate} />}
        />
        <Route path="*" element={<Error navigate={navigate} />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
