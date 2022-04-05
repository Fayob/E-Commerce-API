require("dotenv").config();
require("express-async-errors");

// express
const express = require("express");
const app = express();

// connect DB
const connectDB = require("./db/connect");

// middleware
const notFoundMW = require("./middleware/not_found");
const errorHandlerMW = require("./middleware/error-handler");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.use(notFoundMW);
app.use(errorHandlerMW);

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
