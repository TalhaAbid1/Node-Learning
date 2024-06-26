const express = require("express");
const path = require("path");

// const homeRouter = require("./routers/Home.router");
const friendRouter = require("./routers/Friends.router");
const randomRouter = require("./routers/Random.router");

const app = express();
const PORT = 3000;

// ===================================================================================================
//Template engines in Node development frameworks(Express) do not always need to be explicitly required in code.
//Instead, they can be loaded or defined, and the views directory path can be set to ensure they are correctly used for rendering views.
// ===================================================================================================
// Set the view engine to hbs (handleBars)
app.set("view engine", "hbs");
// Set the directory where the template files are located
app.set("views", path.join(__dirname, "views"));

// ===================================================================================================
// A Middleware use to track API completion durations
app.use((req, res, next) => {
  const dateStart = Date.now();
  next();
  console.log(`${req.method}${req.baseUrl}${req.url}`);
  console.log(`API Took : ${Date.now() - dateStart} ms`);
});

// = Home Route to Check Server is running but A better Way Is Above
// app.use("/", homeRouter); // === === ===NOT Recommended

// ==> A better Way to Check Server is running With a static site ('/home' to differentiate btw better(static) & Best(dynamic) )
app.use("/home", express.static(path.join(__dirname, "public", "Static")));

// ===> A BEST Way to Check Server is running With a Dynamic site rendering
app.get('/' ,(req, res)=>{
  res.render('index',{
    title:'Node Dynamic Web',
    caption:'Using Template engine hbs'
  })
})

// A Default Middleware From EXPRESS use to Convert Buffers To Json Formate
app.use(express.json());

app.use("/friends", friendRouter);
app.use("/random", randomRouter);

// Express is listening to PORT...
app.listen(PORT, () => {
  console.log(`Listening On Port ${PORT}.....`);
});
