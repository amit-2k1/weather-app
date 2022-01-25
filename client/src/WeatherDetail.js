import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

async function getWeatherData(location) {
  const res = await axios.get(`/weather/${location}`);
  return res.data;
}

export default function WeatherDetail() {
  const [weatherData, setWeatherData] = useState({});
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const location = searchParams.get('location');
    getWeatherData(location).then(newWeatherData => {
      setWeatherData({ ...weatherData, ...newWeatherData });
    });
  }, [searchParams]);

  return (
    <div>
      <h1>Weather Details</h1>
      <h2>{JSON.stringify(weatherData)}</h2>
    </div>
  );
}
