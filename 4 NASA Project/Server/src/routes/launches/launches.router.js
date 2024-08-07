const express = require("express");

const launchesController = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.get("/", launchesController.httpGetAllLaunches);
launchesRouter.post("/", launchesController.httpPostNewLaunch);
launchesRouter.delete("/:id", launchesController.httpAbortLaunch);
launchesRouter.delete("/success/:id", launchesController.httpSuccessLaunch);

module.exports = launchesRouter;
