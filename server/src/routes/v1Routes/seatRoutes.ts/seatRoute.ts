import express from "express";
import type { Router } from "express"
import { userTokenVerify } from "../../../middleware/userTokenVerify";
import { roleAuth } from "../../../middleware/roleAuth";
import { UserRole } from "../../../enums";
import { zodValidationMiddleware } from "../../../middleware/zodMiddleware";
import { createEventSeat } from "../../../controller/seat";
import { fetchSeatSchema, seatSchema } from "../../../schemas";
import { fetchSeatForDisplay } from "../../../controller/seat/EventSeat.controller";


export const seatRouter: Router = express.Router();

seatRouter.get("/event/:eventId", userTokenVerify, roleAuth(UserRole.USER, UserRole.ORGANIZER), zodValidationMiddleware(fetchSeatSchema), fetchSeatForDisplay)
seatRouter.post("/event/:eventId/layout/:seatLayoutId", userTokenVerify, roleAuth(UserRole.ORGANIZER), zodValidationMiddleware(seatSchema), createEventSeat)
