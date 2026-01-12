import type { Request, Response, NextFunction } from "express"

export const createEventSeat = (req: Request, res: Response, next: NextFunction) => {
    try {

        const params = res.locals.validated.params

        console.log(params);


    } catch (error) {
        next(error)
    }
}