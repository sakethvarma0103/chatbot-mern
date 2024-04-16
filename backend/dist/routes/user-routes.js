import { Router } from "express";
import { getAllUsers, userLogin, userSignup } from "../controllers/user-controller.js";
import { validate, signupValidator, loginValidator } from "../utils/validators.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers);
userRoutes.post("/login", validate(loginValidator), userLogin);
userRoutes.post("/signup", validate(signupValidator), userSignup);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map