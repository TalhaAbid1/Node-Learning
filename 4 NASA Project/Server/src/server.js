const http = require("http");

const app = require("./app");
const { loadHabitablePlanets } = require("./models/planets.model");

const PORT = process.env.PORT || 3001;

const server = http.createServer(app);

// Server is listening to PORT...
async function loadPlanetBeforeServerStart() {
  await loadHabitablePlanets();

  server.listen(PORT, () => {
    console.log(`Listening On Port ${PORT}.....`);
  });
}

loadPlanetBeforeServerStart();
