import expres from "express"
import type { Router } from "express"
import { userTokenVerify } from "../../../middleware/userTokenVerify";
import { roleAuth } from "../../../middleware/roleAuth";
import { UserRole } from "../../../enums";
import { createSeatLayout } from "../../../controller/event/index";
import { zodValidationMiddleware } from "../../../middleware/zodMiddleware";
import { seatLayoutSchema } from "../../../schemas/index";


export const seatLayoutRouter = expres.Router();


seatLayoutRouter.post("/event/:eventId", userTokenVerify, roleAuth(UserRole.ORGANIZER), zodValidationMiddleware(seatLayoutSchema), createSeatLayout)