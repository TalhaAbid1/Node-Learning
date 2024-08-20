const { Worker, isMainThread, workerData } = require("worker_threads");

if (isMainThread) {
  console.log(`Main Thread Process ID = ${process.pid}`);
  new Worker(__filename, {
    workerData: [1, 2, 3, 4, 5, 6, 7],
  });
  new Worker(__filename, {
    workerData: [7, 6, 5, 4, 3, 2, 1],
  });
  new Worker(__filename, {
    workerData: [7, 1, 6, 2, 5, 3, 4],
  });
} else {
  console.log(`Worker Thread Process ID = ${process.pid}`);
  console.log(`${workerData} Worker data messed array to sorted array = ${workerData.sort()}`);
}
