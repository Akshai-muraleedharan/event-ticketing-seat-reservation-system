import express from "express";
import type { Router } from "express"
import { zodValidationMiddleware } from "../../../middleware/zodMiddleware";
import { verifyOtpToken } from "../../../middleware/otpTokenVerify";
import { createSchema, loginSchema, otpSchema } from "../../../schemas/index";
import { logOutOrganizer, organizerLogin, organizerOtpVerification, organizerProfile, organizerRegister } from "../../../controller/organizer/index";
import { userTokenVerify } from "../../../middleware/userTokenVerify";
import { roleAuth } from "../../../middleware/roleAuth";
import { UserRole } from "../../../enums";



export const oragnizerRouter: Router = express.Router();

oragnizerRouter.post('/register', zodValidationMiddleware(createSchema), organizerRegister)
oragnizerRouter.post('/verify-otp', verifyOtpToken, zodValidationMiddleware(otpSchema), organizerOtpVerification)
oragnizerRouter.post('/login', zodValidationMiddleware(loginSchema), organizerLogin)
oragnizerRouter.get('/', userTokenVerify, roleAuth(UserRole.ORGANIZER), organizerProfile)
oragnizerRouter.post('/logout', userTokenVerify, roleAuth(UserRole.ORGANIZER), logOutOrganizer)