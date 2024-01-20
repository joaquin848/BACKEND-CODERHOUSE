import supertest from "supertest";
import { expect } from "chai";

const requester = supertest("http://localhost:8080");

describe("pets endpoins", () => {
    describe(" POST /api/pets", () => {
        it("should create a pet with adopted property in false", async () => {
            const pet = { 
            name: "oli",
            specie: "cat",
            birthDate: "01/01/2024"
        };

        const response = await requester.post("/api/pets").send(pet);

        expect(response._body.payload.adopted).to.be.false;
        });

        it("without name should retirn status code 400", async () => {
            const pet = {
                specie:"cat",
                birthDate:"01/01/2024",
            };
            const response = await requester.post("/api/pets").send(pet)

            expect(response.statusCode).to.be.equal(400);
        });
    });
    describe("GET /api/pets", () => {
        it("should return status and payload. Payload should be an array", async () => {
            const response = await requester.get("/api/pets");

            expect(response._body).to.have.all.keys("status", "payload");
            expect(response._body.payload).to.be.an("array");
        });
    });
    describe("PUT /api/pets/:id", () => {
        it("should update the pet", async () => {
            const pets = await requester.get("/api/pets");
            const pet = pets._body.payload[0];
            const obj = { name: "Pique" };
            const response = await requester.put("/api/pets" + pet._id).send(obj);
            if (response._body) {
                expect(response._body.status).to.be.equal("success");
                const pets2 = await requester.get("/api/pets");
                const petUpdated = pets2._body.payload.find((p) => p._id === pet._id);
                expect(petUpdated.name).to.not.be.equal(pet.name);
            } else {
                console.error("Error: response._body is undefined");
            }
        });
    });
    describe("DELETE /api/pets/:id", () => {
        it("should delete an specific pet", async () => {
            const createdPet = await requester
            .post("/api/pets")
            .send({ name: "Mishu", specie: "cat", birthDate: "01/01/2024"});
            const petId = createdPet._body.payload._id;
            const response = await requester.delete("/api/pets/" + petId);
            expect(response._body.status).to.be.equal("success")
        });
    });
});