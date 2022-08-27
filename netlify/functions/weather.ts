import { Handler } from '@netlify/functions'
import axios from 'axios'

export const handler: Handler = async (event: any) => {
  const eventBody = JSON.parse(event.body);
  let location: string = eventBody.location;  

  let coordRes, weatherData, aqiResponse;
  try {
    coordRes = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${process.env.OPENWEATHER_APIKEY}`
      );
    
    const data = coordRes.data[0];
    const { lat, lon } = data;   

    weatherData = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.OPENWEATHER_APIKEY}`
    );
    
    aqiResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_APIKEY}`
    );

    location = `${data.name}, ${data?.state+',' || ''} ${data?.country || ''}`;
  } catch (e) {
    console.log(e.message);

    return {
      statusCode: 404,
      body: JSON.stringify({
        message: "Error! extracting the weather data."
      })
    };
  }
  
  const aqi = aqiResponse.data.list[0].main.aqi;
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      ...weatherData.data,
      aqi,
      location,
      message: 'Success!'
    })
  };

}
