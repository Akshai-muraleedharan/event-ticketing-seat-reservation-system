import express from "express"
import type { Router } from "express"
import { userRegister } from "../../../controller/user/index";

export const userRouter: Router = express.Router();


userRouter.post('/', userRegister)