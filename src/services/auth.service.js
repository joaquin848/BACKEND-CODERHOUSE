import { usersDao } from "../daos/users.dao.js";
import LoginError from "../errors/login.error.js";
import { hashData, compareData, genereteToken, transporter } from "../utils/index.js"
import UserAlreadyExistError from "../errors/users-already-exist.error.js";

export const login = async (userInfo) => {
    const { email, password } = userInfo;
    const user = await usersDao.getByEmail(email);
    if(!user){
        throw new LoginError();
    }
    const isPasswordValid = await compareData(password, user.password);
    if (!isPasswordValid) {
        throw new LoginError();
    }

    const token = genereteToken({
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
    });

    return { token, user };
};

export const signup = async (userInfo) => {
    const { email, password } = userInfo;
    const user = await usersDao.getByEmail(email);
    if (user) {
        throw new UserAlreadyExistError(email);
    }
    const hashedPassword = await hashData (password);
    const newUser = await usersDao.createOne ({
        ...userInfo,
        password: hashedPassword,
    });
    const token = genereteToken({
        id: newUser._id,
        email: newUser.email,
        name: newUser.name,
        role: newUser. role,
    });
    await transporter.sendMail ({
        form:"",
        to: newUser.email,
        subject: "bienvenido a la plataforma",
        text: "${token}",
        html: "<b>welcome to our plataform</b>",
    });
    return {token, user: newUser};
};