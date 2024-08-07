import { Router } from "express";
import { getAllUsers, userLogin, userSignup, verifyUser } from "../controllers/user-controller.js";
import { validate, signupValidator, loginValidator } from "../utils/validators.js";
import { verifyToken } from "../utils/token-manager.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers);
userRoutes.post("/login", validate(loginValidator), userLogin);
userRoutes.post("/signup", validate(signupValidator), userSignup);
userRoutes.get("/auth-status", verifyToken, verifyUser);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map