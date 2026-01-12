import type { Request, Response, NextFunction } from "express"
import { eventService, seatService } from "../../services"

export const createEventSeat = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const params = res.locals.validated.params

        const response = await seatService.createSeat(params)

        res.status(201).json({ success: true, message: "Seat created successfully" })

    } catch (error) {

        console.log(error)
        next(error)
    }
}




export const fetchSeatForDisplay = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const eventId = res.locals.validated.params

        const response = await seatService.getSeats(eventId)

        res.status(200).json({ success: true, message: "Seat Featched successfully", data: response })
    } catch (error) {
        next(error)
    }
}