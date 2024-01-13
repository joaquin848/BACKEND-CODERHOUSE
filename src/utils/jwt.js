import jwt, { sign } from "jsonwebtoken"
import config from "../config/config.js"

export const genereteToken = (user) => {
    return jwt.sign(user, config.jwt_secret_key, {expireisIn: "1h"});
};