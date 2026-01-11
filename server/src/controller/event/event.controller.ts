import type { Request, Response, NextFunction } from "express"
import { eventService } from "../../services"

export const createEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {


        const body = res.locals.validated.body

        const user = res.locals.user

        const response = await eventService.createEvent(body, user)

        res.status(200).json({ success: true, message: "Event Create successfully" })


    } catch (error) {
        next(error)
    }
}


export const getEventSingleDetail = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { eventId } = res.locals.validated.params

        const response = await eventService.getSingleEvent(eventId)


        res.status(200).json({ success: true, message: "Fetched successfully", data: response })

    } catch (error) {
        next(error)
    }
}