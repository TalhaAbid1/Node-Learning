const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");

const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");

const app = express();

// This is for security purpose only, backend will entertain only this Host...
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// LOGGER MIDDLEWARE (Automatically Log Details On Each Request)
app.use(morgan("short"));

app.use(express.json());

// setting route of App
app.use(express.static(path.join(__dirname, "..", "public")));

app.use('/planets',planetsRouter);
app.use('/launches',launchesRouter);

// This Should Be at End of all Routers & Middleware (it help to handle routes from React & Falsy Routes )
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
