import express from "express"
import type { Router } from "express"
import { logoutUser, userLogin, userOtpVerification, userRegister } from "../../../controller/user/index";
import { zodValidationMiddleware } from "../../../middleware/zodMiddleware";
import { createSchema, loginSchema, otpSchema } from "../../../schemas/index";
import { verifyOtpToken } from "../../../middleware/otpTokenVerify";
import { userTokenVerify } from "../../../middleware/userTokenVerify";
import { roleAuth } from "../../../middleware/roleAuth";
import { UserRole } from "../../../enums";

export const userRouter: Router = express.Router();


userRouter.post('/register', zodValidationMiddleware(createSchema), userRegister)
userRouter.post('/verify-otp', verifyOtpToken, zodValidationMiddleware(otpSchema), userOtpVerification)
userRouter.post('/login', zodValidationMiddleware(loginSchema), userLogin)
userRouter.post('/logout', userTokenVerify, roleAuth(UserRole.USER), logoutUser)