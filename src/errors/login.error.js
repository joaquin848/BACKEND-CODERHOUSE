export default class LoginError extends Error {
    constructor() {
        super("invalid email or password");
        this.name = "LoginError";
    }
}