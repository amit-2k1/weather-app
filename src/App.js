import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import HomePage from './HomePage';
import WeatherDetail from './WeatherDetail';
import Error from './Error';

const breakpoints = ['0px', '560px', '890px']
const theme = extendTheme({ breakpoints })

function App() {
  const navigate = useNavigate();

  const handleLocationChange = e => {
    e.preventDefault();
    const location = e.target.querySelector('#location').value.toLowerCase();
    navigate(`/weather/${location}`);
  };

  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={<HomePage onLocationChange={handleLocationChange} />}
        />
        <Route
          path="/weather/:location"
          element={
            <WeatherDetail
              onLocationChange={handleLocationChange}
              navigate={navigate}
            />}
        />
        <Route path="*" element={<Error navigate={navigate} />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
