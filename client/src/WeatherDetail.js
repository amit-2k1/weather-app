import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react';
import * as dayjs from 'dayjs';

import TodayWeather from './TodayWeather';
import SunriseAndSunsetCard from './SunriseAndSunsetCard';
import AQICard from './AQICard';
import DewPointCard from './DewPointCard';
import DailyWeatherCard from './DailyWeatherCard';
import HourlyWeather from './HourlyWeather';

async function getWeatherData(location) {
  const res = await axios.get(`/weather/${location}`);
  return res.data;
}

export default function WeatherDetail({ onLocationChange }) {
  const [weatherData, setWeatherData] = useState({});
  const [AQIData, setAQIData] = useState({});
  const [location, setLocation] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [todayDate, setTodayDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const now = dayjs();
    // HH:MM: AM/PM
    setCurrentTime(now.format('h:mm A'));
    // DAY, DATE MONTH, YEAR
    setTodayDate(now.format('dddd, D MMMM, YYYY'));
  }, [searchParams]);

  useEffect(() => {
    const location = searchParams.get('location');
    getWeatherData(location).then(newWeatherData => {
      const newAQIData = getAQIQualitativeName(newWeatherData.aqi);

      setWeatherData({ ...weatherData, ...newWeatherData });
      setLocation(newWeatherData.location);
      setAQIData({ ...AQIData, ...newAQIData });
      setLoading(false);
    });
  }, [searchParams]);

  const getAQIQualitativeName = aqi => {
    const AQIQualitativeName = [
      { name: 'Good', color: 'light green' },
      { name: 'Fair', color: 'green' },
      { name: 'Moderate', color: 'yellow' },
      { name: 'Poor', color: 'orange' },
      { name: 'Very Poor', color: 'red' },
    ];

    return { value: aqi, ...AQIQualitativeName[aqi - 1] };
  };

  const fromKtoC = k => Math.round(k - 273);

  const getFormattedHourlyData = () => {
    const formattedHourlyData = [{}];
    weatherData.hourly.forEach(({ temp, dt }, index) => {
      if (index % 5 === 0) {
        formattedHourlyData.push({
          temperature: fromKtoC(temp),
          time: dayjs(dt).format('HH:mm'),
        });
      }
    });
    return formattedHourlyData;
  };

  if (loading) {
    return (
      <>
        <Heading>Loading...</Heading>
      </>
    );
  }

  return (
    <Grid
      bg="whitesmoke"
      templateColumns="repeat(12, 1fr)"
      templateRows="repeat(10, 1fr)"
      p={4}
    >
      <GridItem p={4} rowSpan="2" colSpan="9">
        <Heading as="h5" size="2xl">
          {currentTime}
        </Heading>
        <Heading as="h5" size="md" pb="2">
          {todayDate}
        </Heading>
        <Heading as="h5" size="xl">
          {'Good ' + (currentTime.includes('AM') ? 'Morning' : 'Evening') + '!'}
        </Heading>
      </GridItem>

      <GridItem rowSpan="10" colSpan="3" h={'100%'} bg="whitesmoke">
        <TodayWeather
          current={weatherData.current}
          location={location}
          onLocationChange={onLocationChange}
          fromKtoC={fromKtoC}
        />
      </GridItem>

      <GridItem rowSpan="8" colSpan="9" mr={4}>
        <Grid templateColumns="repeat(3, 1fr)" m={4}>
          <GridItem colSpan="1" mx={4} p={4} bg="white" borderRadius={'xl'}>
            <SunriseAndSunsetCard
              sunrise={weatherData.current.sunrise}
              sunset={weatherData.current.sunset}
            />
          </GridItem>

          <GridItem colSpan="1" mx={4} p={4} bg="white" borderRadius={'xl'}>
            <DewPointCard
              dewPoint={weatherData.current.dew_point}
              fromKtoC={fromKtoC}
            />
          </GridItem>

          <GridItem colSpan="1" mx={4} p={4} bg="white" borderRadius={'xl'}>
            <AQICard
              value={AQIData.value}
              name={AQIData.name}
              color={AQIData.color}
            />
          </GridItem>
        </Grid>

        <Box h="40%" w="72vw" m={4} my={0}>
          <Heading as="h6" size="md" p={2}>
            Hourly
          </Heading>
          <HourlyWeather data={getFormattedHourlyData()} />
        </Box>

        <Box h="20%" m={4} borderRadius={'xl'}>
          <Box
            display={'flex'}
            justifyContent={'space-evenly'}
            alignItems={'center'}
          >
            {weatherData.daily.map((data, idx) => {
              return (
                <DailyWeatherCard
                  key={idx}
                  timestamp={data.dt}
                  temperature={data.temp.day}
                  icon={data.weather[0].icon}
                  description={data.weather[0].description}
                  fromKtoC={fromKtoC}
                />
              );
            })}
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
}
