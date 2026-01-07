import express from "express"
import type { Router } from "express"
import { userLogin, userOtpVerification, userRegister } from "../../../controller/user/index";
import { zodValidationMiddleware } from "../../../middleware/zodMiddleware";
import { createUserShema, loginSchema, otpSchema } from "../../../schemas/index";
import { verifyOtpToken } from "../../../middleware/otpTokenVerify";

export const userRouter: Router = express.Router();


userRouter.post('/register', zodValidationMiddleware(createUserShema), userRegister)
userRouter.post('/verify-otp', verifyOtpToken, zodValidationMiddleware(otpSchema), userOtpVerification)
userRouter.post('/login', zodValidationMiddleware(loginSchema), userLogin)