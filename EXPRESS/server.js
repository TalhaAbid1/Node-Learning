const express = require("express");
const homePageController = require("./controllers/Home.controller");
const friendController = require("./controllers/Friends.controller");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  const dateStart = Date.now();
  next();
  console.log(`Time Took By API : ${Date.now() - dateStart} ms`);
});
app.use(express.json());

app.get("/", homePageController);

app.get("/friends", friendController?.allFriends);
app.get("/friends/:friendById", friendController?.friendById);
app.post("/friends", friendController?.addFriend);

app.listen(port, () => {
  console.log(`Listening On Port ${port}.....`);
});
