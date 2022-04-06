require("dotenv").config();
require("express-async-errors");

// express
const express = require("express");
const app = express();

// rest of the packages
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

// connect DB
const connectDB = require("./db/connect");

// routers
const authRouter = require("./routes/authRoute");

// middleware
const notFoundMW = require("./middleware/not_found");
const errorHandlerMW = require("./middleware/error-handler");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.use("/api/v1/auth", authRouter);

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
