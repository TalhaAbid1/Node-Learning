const launches = new Map();

let latestFlightNumber = 10;

const launch = {
  flightNumber: 10,
  mission: "kepler X",
  rocket: "Explorer IS1",
  launchDate: new Date("july 3, 2030"),
  target: "Kepler-1649 b",
  customers: ["NASA", "Alphas"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

// Get All Available Launch
function getAllLaunches() {
  return Array.from(launches.values());
}

// Handel Post New launch
function postNewLaunch(launchDetails) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launchDetails, {
      flightNumber: latestFlightNumber,
      customers: ["NASA", "Alphas"],
      upcoming: true,
      success: true,
    })
  );
}

// Find launches By Id
function existsLaunchWithId(launchId) {
  return launches.has(launchId);
}

// Handel launch abort
function abortLaunchById(launchId) {
  const launchById = launches.get(launchId);
  launchById.upcoming = false;
  launchById.success = false;
  return launchById;
}

module.exports = {
  getAllLaunches,
  postNewLaunch,
  existsLaunchWithId,
  abortLaunchById,
};
