const {launches} = require("../../models/launches.model");

function getAllLaunches(req, res) {
  const formateData = Array.from(launches.values())
  return res.status(200).send(formateData);
}

module.exports = {
  getAllLaunches,
};
