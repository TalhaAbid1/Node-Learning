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
  // Add Validations (Fields are required)
  if (
    !launchBody.mission ||
    !launchBody.rocket ||
    !launchBody.launchDate ||
    !launchBody.target
  ) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }
  launchBody.launchDate = new Date(launchBody.launchDate);
  // Add Validations (date validation)
  if (isNaN(launchBody.launchDate)) {
    return res.status(400).json({
      error: "Invalid date",
    });
  }

  // SUCCESS RESPONSE
  postNewLaunch(launchBody);
  return res.status(201).json(launchBody);
}

module.exports = {
  httpGetAllLaunches,
  httpPostNewLaunch,
};
