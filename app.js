require("dotenv").config();

// express
const express = require("express");
const app = express();

// connect DB
const connectDB = require("./db/connect");

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server Listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();