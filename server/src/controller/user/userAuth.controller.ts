// import User from "../../model/user.model"
import type { Request, Response, NextFunction } from "express"
import { CreateUserBody } from "../../types/index"

export const userRegister = async (req: Request<{}, {}, {}>, res: Response<{}>, next: NextFunction) => {

    const body: CreateUserBody | undefined = res.locals.validated?.body

    try {

        res.status(201).json({ success: true, message: "user created successfully", data: body })

    } catch (error) {
        next(error)
    }
}