const express = require("express");

const randomController = require("../controllers/Random.controller");

const randomRouter = express.Router();

randomRouter.get("/", randomController.sendJson);
randomRouter.get("/image", randomController.shareImage);
randomRouter.get("/html", randomController.shareHtml);

module.exports = randomRouter;