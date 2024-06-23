const express = require('express');
const friendController = require('../controllers/Friends.controller');

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
    // Custom Middleware For Friends Router Only
    console.log("/friends", req?.ip);
    next();
  });

friendsRouter.get("/", friendController?.allFriends);
friendsRouter.post("/", friendController?.addFriend);
friendsRouter.get("/:friendById", friendController?.friendById);

module.exports = friendsRouter