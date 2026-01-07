import express from "express";
import type { Router } from "express"
import { userRouter } from "./userRoutes/userRoute";


export const v1Router: Router = express.Router();

v1Router.use("/user", userRouter)