import supertest from "supertest";
import { expect } from "chai";

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
        it("should create a user", async ()=>{
//terminarlo...
        });
    })
})