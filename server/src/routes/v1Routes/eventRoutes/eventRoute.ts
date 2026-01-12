import express from "express"
import type { Router } from "express"
import { createEvent, getEventSingleDetail, getEvent, getFeaturedEvent } from "../../../controller/event/index"
import { zodValidationMiddleware } from "../../../middleware/zodMiddleware"
import { createEventSchema, singleEventIdSchema } from "../../../schemas"
import { userTokenVerify } from "../../../middleware/userTokenVerify"
import { roleAuth } from "../../../middleware/roleAuth"
import { UserRole } from "../../../enums"



export const eventRouter: Router = express.Router()


eventRouter.post("/", userTokenVerify, roleAuth(UserRole.ORGANIZER), zodValidationMiddleware(createEventSchema), createEvent)
eventRouter.get("/", userTokenVerify, roleAuth(UserRole.ORGANIZER), getEvent)
eventRouter.get("/featured", getFeaturedEvent)
eventRouter.get("/:eventId", zodValidationMiddleware(singleEventIdSchema), getEventSingleDetail)
