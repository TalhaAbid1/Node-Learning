const express = require("express");
// BEFORE SHIFT TO PM2
// const cluster = require("cluster");
// const os = require("os");

const app = express();
function delay(duration) {
  const startTime = new Date();
  while (new Date() - startTime < duration) {
    // console.log("DO NOTING, Just Help To Add Delay In Our Processes");
    // === === === === === === === FOLLOWING PROCESSES ARE ALSO BLOCKING PIECE OF CODE
    // JSON.stringify({}) => "{}"
    // JSON.parse("{}") => {}
    // [5,1,2,3,4].sort()
  }
}

app.get("/", (req, res) => {
  res.send(`APP IS RUNNING ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send(`APP IS TIMER ${process.pid}`);
});

// BEFORE SHIFT TO PM2 & MANAGE MY OWN CLUSTER
// if (cluster.isMaster) {
//   console.log("MASTER");
//   // GENERATING WORKER | CHILD_NODE ACCORDING TO POSSIBLE AVAILABLE CORES
//   const Available_Cores = os.cpus().length;
//   for (let index = 0; index < Available_Cores; index++) {
//     console.log("CHILD NODE | WORKER ==>> Number : ", index + 1);
//     cluster.fork();
//   }
// } else {
//   console.log("Child");
//   app.listen(3000, () => {
//     console.log("Server is Listening on PORT 3000 ...");
//   });
// }

app.listen(3000, () => {
  console.log("Server is Listening on PORT 3000 ...");
});
