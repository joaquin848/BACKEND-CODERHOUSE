import { usersDao } from "../daos/users.dao.js";
import { hashData, compareData, transporter } from "../utils/index.js"
import UserAlreadyExistError from "../errors/users-already-exist.error.js";
import NotFoundError from "../errors/not-found.error.js";

export const createOne = async (userInfo) => {
    const { email, password } = userInfo;
    const user = await usersDao.createOne({
        ...userInfo,
        password: hashedPassword,
    });
    return { user: newUser};
};

export const getAll = async () => {
    return usersDao.getAll();
};

export const getById = async (id) => {
    const user = await usersDao.getById(id);
    if(!user) {
        throw new NotFoundError("User");
    }
};

