export default class UserAlreadyExistError extends Error{
    constructor(email) {
        super("User with email ${email} already exist");
        this.name = "UserAlreadyExistError";
    }
}