import express from "express";
import type { Router } from "express"
import { userRouter } from "./userRoutes/userRoute";
import { oragnizerRouter } from "./organizerRoutes/organizerRoute";
import { eventRouter } from "./eventRoutes/eventRoute";
import { seatLayoutRouter } from "./seatLayoutRoutes.ts/seatLayoutRoute";
import { seatRouter } from "./seatRoutes.ts/seatRoute";
import { bookingRouter } from "./bookingRoutes/bookingRoute";
import { authRouter } from "./authroutes/authRoute";


export const v1Router: Router = express.Router();

v1Router.use("/user", userRouter)
v1Router.use("/organizer", oragnizerRouter)
v1Router.use("/event", eventRouter)
v1Router.use("/seatlayout", seatLayoutRouter)
v1Router.use("/seat", seatRouter)
v1Router.use("/booking", bookingRouter)
v1Router.use("/auth", authRouter) 