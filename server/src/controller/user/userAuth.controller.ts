// import User from "../../model/user.model"
import type { Request, Response, NextFunction } from "express"
import { authService } from "../../services/index"
import { AppError } from "../../utils/appError"

export const userRegister = async (req: Request<{}, {}, {}>, res: Response<{}>, next: NextFunction) => {

    const body = res.locals.validated?.body

    if (!body) {
        throw new AppError("Invalid request body", 400)
    }

    try {
        const response = await authService.registerUserService(body)

        res.status(201).json({ success: true, message: "user created successfully", data: response })

    } catch (error) {
        next(error)
    }
}