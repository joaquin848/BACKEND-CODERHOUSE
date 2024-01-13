import {
    signup as signupService,
    login as loginService,
} from "../services/auth.service.js";

export const login = async (req, res) => {
    try {
        const { token, user } = await loginService (req.body);
        res.cookie ("token", token, { httpOnly: true });
        res.status(200).json ({user});
    }
    catch (error) {
        if (error.name === "LoginError"){
            res.status(401).json({ message: error.message });
        } else{
            res.status(500).json({ message: error.message });
        }
    }
};

export const signup = async (req, res) => {
    try{
        const { user, token } = await signupService (req.body);
        res.cookie ("token", token, { httpOnly: true });
        res.status(200).json ({user});
    }
    catch (error) {
        if (error.name === "UserAlreadyExistError"){
            res.status(401).json({ message: error.message });
        } else{
            res.status(500).json({ message: error.message });
        }
    }
};

export const logout = (req,res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "succefully logged out"});
}