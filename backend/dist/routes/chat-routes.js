import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
const chatRoutes = Router();
chatRoutes.get("/new", verifyToken);
export default chatRoutes;
//# sourceMappingURL=chat-routes.js.map