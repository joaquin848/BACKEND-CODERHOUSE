import Basicdao from "./basic.dao.js";
import { usersModel } from "../models/users.models.js";

class UsersDao extends Basicdao {
    constructor(){
        super(usersModel, ["courses"]);
    }

    async getByEmail(email){
        return usersModel.findOne({ email });
    }
}

export const usersDao = new UsersDao();