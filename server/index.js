import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import chalk from "chalk";
import path from "path";
import axios from "axios";
const __dirname = path.resolve();

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.set("port", process.env.PORT || 3001);

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/weather/:location", async (req, res) => {
  const location = req.params.location.split(" ").join("+");

  const coordRes = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${process.env.PLACES_APIKEY}`
  );

  const { lat, lng } = coordRes.data.results[0].geometry;

  const weatherData = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${process.env.OPENWEATHER_APIKEY}`
  );

  return res.json({ ...weatherData.data });
});

app.get("*", async (req, res) => {
  console.log("hello");
  return res.sendFile(path.resolve(__dirname, "../client/build"));
});

app.listen(app.get("port"), () => {
  console.log(
    `Server running on... ${chalk.blue(`http://localhost:${app.get("port")}`)}`
  );
});
