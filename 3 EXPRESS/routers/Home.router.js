const express = require("express");

const homePageController = require("../controllers/Home.controller");

const homeRouter = express.Router();

homeRouter.get("/", homePageController);

module.exports = homeRouter;