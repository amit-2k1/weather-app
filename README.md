# Weather App

Weather App is a React web app which display the weather details from all around the world.

Website: [Weather App](https://your-weatherman.netlify.app)

### Tech Used

- HTML
- ReactJS
- ChakraUI : for styling the web page
- Recharts : for creating graph
- Netlify Functions : for fetching the weather data
  
### API Used
- OpenWeatherAPI : 
  1) Current Weather Data API
  1) Air Pollution API
  1) Geocoding API

### Project Setup

1) Clone the repo and install the dependencies
   ```bash
   git clone https://github.com/amit-ksh/weather-app.git
   cd weather-app
   npm install
   npm i -g netlify
   ```

1) Creating the .env file and set the following variables
   ```bash
    OPENWEATHER_APIKEY='YOUR_OPENWATHER_API_KEY'
   ```
   Get the key from [here](https://openweathermap.org/api)
   
2) Run the development server:

    ```bash
    npm run dev
    ```

3) Open [http://localhost:8888](http://localhost:8888) in your browser to see the application.

### Deploy Steps

1) Test your deployment
   ```bash
   npm run test-deploy
   ```

2) Deploy the production build
   ```bash
   npm run deploy
   ```

