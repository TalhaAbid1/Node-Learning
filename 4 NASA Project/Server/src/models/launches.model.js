const launches = new Map();

const launch = {
  flightNumber: 10,
  mission: "kepler X",
  rocket: "Explorer IS1",
  launchDate: new Date("july 3, 2030"),
  destination: "Kepler-1649 b",
  target: "Kepler-1649 b",
  customers: ["NASA", "Alphas"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

module.exports = {
  getAllLaunches,
};
