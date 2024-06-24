const express = require("express");
const path = require("path");

const homeRouter = require("./routers/Home.router");
const friendRouter = require("./routers/Friends.router");
const randomRouter = require("./routers/Random.router");

const app = express();
const port = 3000;

// A Middleware use to track API completion durations
app.use((req, res, next) => {
  const dateStart = Date.now();
  next();
  console.log(`${req.method}${req.baseUrl}${req.url}`);
  console.log(`API Took : ${Date.now() - dateStart} ms`);
});


// = Home Route to Check Server is running but A better Way Is Above
app.use("/", homeRouter);

// == A better Way to Check Server is running With a static site
app.use("/home", express.static(path.join(__dirname, "public", "Static")));

// === A BEST Way to Check Server is running With a Dynamic site rendering


// A Default Middleware From EXPRESS use to Convert Buffers To Json Formate
app.use(express.json());

app.use("/friends", friendRouter);
app.use("/random", randomRouter);

app.listen(port, () => {
  console.log(`Listening On Port ${port}.....`);
});
