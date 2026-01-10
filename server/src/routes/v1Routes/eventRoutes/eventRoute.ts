import express from "express"
import type { Router } from "express"
import { createEvent } from "../../../controller/event/event.controller"
import { zodValidationMiddleware } from "../../../middleware/zodMiddleware"
import { createEventSchema } from "../../../schemas"
import { userTokenVerify } from "../../../middleware/userTokenVerify"
import { roleAuth } from "../../../middleware/roleAuth"
import { UserRole } from "../../../enums"


export const eventRouter: Router = express.Router()


eventRouter.post("/", userTokenVerify, roleAuth(UserRole.ORGANIZER), zodValidationMiddleware(createEventSchema), createEvent)