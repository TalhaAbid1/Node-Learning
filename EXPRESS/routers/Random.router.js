const express = require("express");

const randomController = require("../controllers/Random.controller");

const randomRouter = express.Router();

randomRouter.get("/", randomController.sendJson);
randomRouter.get("/image", randomController.shareImage);
randomRouter.get("/templateEngine", randomController.templateEngine);

module.exports = randomRouter;