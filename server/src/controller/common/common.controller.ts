import type { Request, Response, NextFunction } from "express"
import { authService } from "../../services"


export const newAccesstoken = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const user = res.locals.authUser

        const response = await authService.newAccessTokenGenerate(user)


        res.status(200).json({ success: true, message: "New token Created Successfully", data: response.rest, accessToken: response.accessToken })


    } catch (error) {
        next(error)
    }
}