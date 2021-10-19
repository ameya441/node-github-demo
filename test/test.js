const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("respond with Hello World - GITHUB ACTIONS", (done) => {
    request(app).get("/").expect("Hello World", done);
  })
});
