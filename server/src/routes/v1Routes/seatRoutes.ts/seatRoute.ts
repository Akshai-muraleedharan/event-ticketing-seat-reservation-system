import express from "express";
import type { Router } from "express"
import { userTokenVerify } from "../../../middleware/userTokenVerify";
import { roleAuth } from "../../../middleware/roleAuth";
import { UserRole } from "../../../enums";
import { zodValidationMiddleware } from "../../../middleware/zodMiddleware";
import { createEventSeat } from "../../../controller/seat";
import { seatSchema } from "../../../schemas";


export const seatRouter: Router = express.Router();


seatRouter.post("/event/:eventId/layout/:seatLayoutId", userTokenVerify, roleAuth(UserRole.ORGANIZER), zodValidationMiddleware(seatSchema), createEventSeat)