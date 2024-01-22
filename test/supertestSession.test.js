import supertest from "supertest";
import { expect } from "chai";
import mongoose from "mongoose";

const requester = supertest("http://localhost:8080");

describe("sessions endpoints", () => {
    const userRegister = {
        first_name: "super",
        last_name: "Test",
        email: "supertest@gmail.com",
        password: "12345",
    };

    const userLogin = {
        email: "supertest@gmail.com",
        password: "12345",
    };

    describe("POST /api/sessions/register", () => {
        before( async function (){
            await mongoose.connect(
                "mongodb+srv://joaquin:lajori848@codercluster.hkzyxhs.mongodb.net/ecommerce?retryWrites=true&w=majority"
            );
            await mongoose.connection
            .collection("users")
            .deleteOne({ email: "supertest@mail.com"})
        });
        it("should create a user", async() => {
            const response = await requester
            .post("/api/sessions/register")
            .send(userRegister);

            expect(response.statusCode).to.be.equal(200);
        });
    });
    describe("POST/api/sessions/login", () => {
        let cookie;
        it("should return user token", async () => {
            const response = await requester
            .post("/api/sessions/login")
            .send(userLogin);

            cookie = { name:  response.headers ["set-cookie"] [0].split("=") [0],
             value: response.headers ["set-cookie"] [0].split("=") [1].split(";") [0],
            }


            expect(cookie.name).to.be.equal("coderCookie");
        });
    });
    describe("GET/api/sessions/current", () => {
        it("should return a cookie", async () => {
            console.log("cookie", cookie);
            const response = await requester
            .get("/api/sessions/current")
            .set("Cookie", [`${cookie.name} =${cookie.value}`]);
            expect(response._body.payload).to.be.an("object");
        });
    });
});