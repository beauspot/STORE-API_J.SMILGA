require("dotenv").config();
//async errors

const express = require("express");
const logger = require("morgan");
const errHandler = require("./middleware/error-handler");
const _404NotFound = require("./middleware/not-found");
const connectDB = require("./db/connect");

const app = express();

// <================= Middleware =================>
app.use(logger("dev"));
app.use(express.json());
app.use(errHandler);
// <================= Middleware =================>

app.use(_404NotFound);

const PORT = process.env.PORT || 8080;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.info(`App Listening on ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();