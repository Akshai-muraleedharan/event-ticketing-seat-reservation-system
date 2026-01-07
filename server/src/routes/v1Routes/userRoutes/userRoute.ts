import express from "express"
import type { Router } from "express"
import { userRegister } from "../../../controller/user/index";
import { zodValidationMiddleware } from "../../../middleware/zodMiddleware";
import { createUserShema } from "../../../schemas/index";

export const userRouter: Router = express.Router();


userRouter.post('/', zodValidationMiddleware(createUserShema), userRegister)