import express from "express"
import type { Router } from "express"
import { userTokenVerify } from "../../../middleware/userTokenVerify"
import { roleAuth } from "../../../middleware/roleAuth"
import { UserRole } from "../../../enums"
import { zodValidationMiddleware } from "../../../middleware/zodMiddleware"
import { registrationController } from "../../../controller/booking"
import { createBookingSchema } from "../../../schemas"

export const bookingRouter: Router = express.Router()


bookingRouter.post("/registration/event/:eventId", userTokenVerify, roleAuth(UserRole.USER), zodValidationMiddleware(createBookingSchema), registrationController)