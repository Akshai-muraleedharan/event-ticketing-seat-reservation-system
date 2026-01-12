import type { Request, Response, NextFunction } from "express"
import { eventService } from "../../services"

export const createSeatLayout = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const eventId = res.locals.validated.params
        const body = res.locals.validated.body
        const user = res.locals.user

        const response = await eventService.createSeatLayout(body, eventId, user)

        res.status(200).json({ success: true, message: "Seat layout create successfully" })
    } catch (error: any) {
        next(error)
    }
}