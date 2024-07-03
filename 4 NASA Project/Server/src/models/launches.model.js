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

module.exports = {
  getAllLaunches,
  postNewLaunch,
};
