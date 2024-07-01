const {
  getAllLaunches,
  postNewLaunch,
} = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpPostNewLaunch(req, res) {
  // User send us Date as String so we Convert it to valid date Formate
  const launchBody = req.body;
  launchBody.launchDate = new Date(launchBody.launchDate);
  postNewLaunch(launchBody);
  return res.status(201).json(launchBody);
}

module.exports = {
  httpGetAllLaunches,
  httpPostNewLaunch,
};
