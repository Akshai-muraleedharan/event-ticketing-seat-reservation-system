import type { Request, Response, NextFunction } from "express"
import { seatService } from "../../services"

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