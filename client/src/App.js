import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import HomePage from './HomePage';
import WeatherDetail from './WeatherDetail';

function App() {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleLocationChange = e => {
    e.preventDefault();
    const newLocation = e.target.querySelector('#location').value;
    setLocation(newLocation);
  };

  useEffect(() => {
    // TODO: fetch weather data from server
    navigate(`/${location}`);
  }, [location, navigate]);

  return (
    <ChakraProvider>
      <Routes>
        <Route
          path="/"
          element={<HomePage onLocationChange={handleLocationChange} />}
        />
        <Route
          path=":location"
          element={
            <WeatherDetail
              location={location}
              onLocationChange={handleLocationChange}
            />
          }
        />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
