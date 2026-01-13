import type { Request, Response, NextFunction } from "express"
import { bookingService } from "../../services"


export const registrationController = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const payload = res.locals.validated.body
        const eventId = res.locals.validated.params
        const user = res.locals.user

        const response = await bookingService.registration(payload, eventId, user)

        console.log(response);

    } catch (error: any) {
        next(error)
    }

}