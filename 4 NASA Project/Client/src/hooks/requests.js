const baseUrl = "http://localhost:3001";
async function httpGetPlanets() {
  const response = await fetch(`${baseUrl}/planets`);
  return await response.json();
}

async function httpGetLaunches() {
  const response = await fetch(`${baseUrl}/launches`);
  const fetchedLaunches = await response.json();
  console.log("fetchedLaunches", fetchedLaunches);
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}

async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${baseUrl}/launches`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    });
  } catch (error) {
    console.log("httpSubmitLaunch Error :", error);
    return {
      ok: false,
    };
  }
}

async function httpAbortLaunch(id) {
  try {
    return await fetch(`${baseUrl}/launches/${id}`, {
      method: "delete",
    });
  } catch (error) {
    console.log("httpAbortLaunch Error :", error);
    return {
      ok: false,
    };
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
