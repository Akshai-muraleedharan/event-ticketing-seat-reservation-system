import express from "express"
import type { Router } from "express"
import { testController, userRegister } from "../../../controller/user/index";
import { zodValidationMiddleware } from "../../../middleware/zodMiddleware";
import { createUserShema } from "../../../schemas/index";
import { verifyOtpToken } from "../../../middleware/otpTokenVerify";

export const userRouter: Router = express.Router();


userRouter.post('/register', zodValidationMiddleware(createUserShema), userRegister)
userRouter.get('/', verifyOtpToken, testController)