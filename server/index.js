import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import chalk from "chalk";
import path from "path";
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

app.use("/", express.static(path.resolve(__dirname, "../client/build")));

app.get("/", async (req, res) => {
  return res.sendFile(path.resolve(__dirname, "../client/build"));
});

app.listen(app.get("port"), () => {
  console.log(
    `Server running on... ${chalk.blue(`http://localhost:${app.get("port")}`)}`
  );
});
