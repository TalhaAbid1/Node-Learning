// API TESTING USING ASSERTION

const request = require("supertest");
const app = require("../../app");

describe("Test GET /launches", () => {
  //   ===================================================================== TEST CASE FOR FETCHING DATA
  test("It should response with 200 Success", async () => {
    // THE FOLLOWING ASSERTION IS FROM SUPER TEST PACKAGE
    await request(app)
      .get("/launches")
      .expect("content-type", /json/)
      .expect(200);

    // // THE FOLLOWING ASSERTION IS JEST SPECIFIC
    // const responseUsingJest = await request(app).get("/launches");
    // expect(responseUsingJest.statusCode).toBe(200);
  });
});

describe("Test POST /launches", () => {
  const completeLaunchData = {
    mission: "ABID Space-X",
    rocket: "Alpha x-13",
    launchDate: "july 9, 2035",
    target: "kepler-186 f",
  };
  const completeLaunchDataWithoutDate = {
    mission: "ABID Space-X",
    rocket: "Alpha x-13",
    target: "kepler-186 f",
    // launchDate: "july 9, 2035",   // This property is omitted intentionally
  };
  const completeLaunchDataWithInvalidDate = {
    mission: "ABID Space-X",
    rocket: "Alpha x-13",
    launchDate: "INVALID DATE",
    target: "kepler-186 f",
  };

  //   ===================================================================== TEST CASE FOR SUCCESS LAUNCH
  test("It should response with 201 Created", async () => {
    // THE FOLLOWING ASSERTION IS FROM SUPER TEST PACKAGE
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchData)
      .expect("content-type", /json/)
      .expect(201);

    const requestDate = new Date(completeLaunchData.launchDate);
    const responseDate = new Date(response.body.launchDate);

    console.log(requestDate);
    console.log(responseDate);

    //THE FOLLOWING ASSERTION IS JEST SPECIFIC
    expect(requestDate).toMatchObject(responseDate);
    expect(response.body).toMatchObject(completeLaunchDataWithoutDate);
  });

  //   ===================================================================== TEST CASE FOR MISSING DATA
  test("It should catch missing required properties", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchDataWithoutDate)
      .expect("content-type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      // This Error Message Should Be Same As Written in Launches Controller File, Otherwise THis Is an IN_VALID TEST CASE
      error: "All fields are required",
    });
  });

  //   ===================================================================== TEST CASE FOR DATE VALIDATOR
  test("It should catch Invalid time ", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchDataWithInvalidDate)
      .expect("content-type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      // This Error Message Should Be Same As Written in Launches Controller File, Otherwise THis Is an IN_VALID TEST CASE
      error: "Invalid date",
    });
  });
});
