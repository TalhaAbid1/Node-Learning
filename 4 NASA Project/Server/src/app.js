const express = require("express");
const path = require("path");
const cors = require("cors");

const planetsRouter = require("./routes/planets/planets.router");

const app = express();

// This is for security purpose only, backend will entertain only this Host...
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
// setting route of App 
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(planetsRouter);

module.exports = app;
