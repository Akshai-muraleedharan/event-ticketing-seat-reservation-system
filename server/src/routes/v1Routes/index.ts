import express from "express";
import type { Router } from "express"
import { userRouter } from "./userRoutes/userRoute";
import { oragnizerRouter } from "./organizerRoutes/organizerRoute";
import { eventRouter } from "./eventRoutes/eventRoute";


export const v1Router: Router = express.Router();

v1Router.use("/user", userRouter)
v1Router.use("/organizer", oragnizerRouter)
v1Router.use("/event", eventRouter)