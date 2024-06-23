const express = require("express");

const homeRouter = require("./routers/Home.router");
const friendRouter = require("./routers/Friends.router")
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

// A Default Middleware From EXPRESS use to Convert Buffers To Json Formate
app.use(express.json());

app.use("/", homeRouter)
app.use("/friends", friendRouter)
app.use("/random", randomRouter)

app.listen(port, () => {
  console.log(`Listening On Port ${port}.....`);
});
