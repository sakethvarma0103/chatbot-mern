import express from "express";
import { config } from 'dotenv';
import pkg from 'morgan';
import cookieParser from "cookie-parser";
const morgan = pkg;
import appRouter from "./routes/index.js";
config();
const app = express();
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan("dev"));
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map