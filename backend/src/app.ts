import  express  from "express";
import {config} from  'dotenv';
import pkg from 'morgan';
import cors from 'cors';
import cookieParser from "cookie-parser";
const morgan = pkg;
const app=express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

import appRouter from "./routes/index.js";
config();

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(morgan("dev"));
app.use("/api/v1",appRouter);
export default app;