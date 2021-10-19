const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("respond with Hello World - ACTIONS ", (done) => {
    request(app).get("/").expect("Hello World", done);
  })
});
