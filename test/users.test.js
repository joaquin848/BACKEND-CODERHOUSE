import Users from "../src/dao/Users.dao.js";
import {expect} from "chai";
import "./db.js";

describe("Get users", function () {
    before(function(){
        this.usersDao = new Users()
    })

    it("should return an empty array", async function () {
      //const usersDao = new Users();
      const result = await this.usersDao.get();
      expect(result).to.be.an("array");
    }).timeout(5000);
  
    it("should return an array with 0 element", async function () {
        const response = await this.usersDao.get();
        expect(response).to.have.lengthOf(0);
      });
    
});

describe ("Create users", function (){
    before(function () {
        this.usersDao = new Users();
        });
        after(async function (){
            const users = await this.usersDao.get();
            await this.usersDao.delete(users[0]._id);
    });
    it("should create the user", async function (){
        const user = {
            first_name: "juan",
            last_name: "hoyos",
            email: "jhoyos@gmail.com",
            password: "12345",
        };

        const response = await this.usersDao.save(user);
        console.log("response", response);
        expect(response).to.have.property("pets");
        expect(response.pets).to.have.lengthOf(0);
    });
    it("should throw an error if email is missing", async function () {
        const user = {
          first_name: "Juan",
          last_name: "Perez",
          password: "12345",
        };
        try {
            const response = await this.usersDao.save(user);
          } catch (error) {
            expect(error).to.be.an("Error");
          }
        });
});

describe("Get user", function () {
     before (function () { 
        this.usersDao = new Users();
     });     
    after (async function () { 
        const users = await this.usersDao.get();
        await this.usersDao.delete(users[0]._id);
    }); 
    it (" should return a user by email" ,async function () { 
        const user = {
        first_name : " Juan " , 
        last_name : " Hoyos " , 
        email : " jhoyos@mail.com " , 
        password : " 12345 " , 
    };
        await this.usersDao.save(user);
        const response = await this.usersDao.getBy({ email: user.email });

        expect(response).to.be.an ("object"); 
        //expect(response.email).to.be.equal(user.email);
        expect(response).to.include({email: user.email});
    });
});    