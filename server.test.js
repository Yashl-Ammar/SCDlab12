const request = require('supertest')
const app = require('./routes/User')
const mongoose = require('mongoose')

require("dotenv").config();

/* Connecting to the database before each test. */
// beforeEach(async () => {
//     await mongoose.connect(process.env.ATLAS_URI);
//   });
  
//   /* Closing database connection after each test. */
//   afterEach(async () => {
//     await mongoose.connection.close();
//   });

describe('Test the root path' ,  () => {
    it('it should response the post method', async () => {
        const response = await request(app).post("http://localhost:8000/User/add")
        .send({
            "Name":"Obaid",
            "Email":"obaid",
            "Age":12,
            "Contact":123,
        })
        expect(response.statusCode).toBe(200);
    })
})

describe("Test the user search", () => {
    test("It should response the User search method", () => {
      const response = request(app)
        .get("http://localhost:8000/user/637c8fb1a0c195eb8b23a4ef")
        .send({ Name: "Obaid" });
      expect(response.body.toEqual("Obaid").statusCode).toBe(200);
    });
  });

  describe("Test the delete path", () => {
    test("It should test the Delete method", () => {
        const response = request(app).delete("http://localhost:8000/user/637c8fb1a0c195eb8b23a4ef").send({})
        expect(response.statusCode).toBe(200);
      })
  })