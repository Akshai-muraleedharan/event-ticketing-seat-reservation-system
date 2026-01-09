import express from "express";
import type { Router } from "express"
import { zodValidationMiddleware } from "../../../middleware/zodMiddleware";
import { verifyOtpToken } from "../../../middleware/otpTokenVerify";
import { createSchema, loginSchema, otpSchema } from "../../../schemas/index";
import { organizerLogin, organizerOtpVerification, organizerRegister } from "../../../controller/organizer/index";



export const oragnizerRouter: Router = express.Router();

oragnizerRouter.post('/register', zodValidationMiddleware(createSchema), organizerRegister)
oragnizerRouter.post('/verify-otp', verifyOtpToken, zodValidationMiddleware(otpSchema), organizerOtpVerification)
oragnizerRouter.post('/login', zodValidationMiddleware(loginSchema), organizerLogin)