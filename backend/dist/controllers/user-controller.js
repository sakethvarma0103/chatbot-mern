import User from "../models/Users.js";
import { hash, compare } from "bcrypt";
export const getAllUsers = async (req, res, next) => {
    try {
        //get all users
        const users = await User.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
export const userSignup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const userExisting = await User.findOne({ email });
        if (userExisting) {
            return res.status(401)
                .json({ message: "ERROR", cause: "User already exists" });
        }
        const hashedPassword = await hash(password, 10);
        const users = new User({ name, email, password: hashedPassword });
        await users.save();
        return res.status(201).json({ message: "OK", users });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
export const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const users = await User.findOne({ email });
        if (!users) {
            return res.status(401)
                .json({ message: "ERROR", cause: "User does not exists" });
        }
        const pwcorrect = await compare(password, users.password);
        if (!pwcorrect) {
            return res.status(403)
                .json({ message: "ERROR", cause: "Password is incorrect" });
        }
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
//# sourceMappingURL=user-controller.js.map