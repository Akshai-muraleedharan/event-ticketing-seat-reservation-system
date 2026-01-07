// import User from "../../model/user.model"
import type { Request, Response, NextFunction } from "express"
import { AppError } from "../../utils/appError"


export const userRegister = async (req: Request<{}, {}, { userName: string }>,
    res: Response<{ userName: string }>,
    next: NextFunction) => {


    try {

        const userName = req.body


        const lack = true
        if (lack === true) {
            throw new AppError("test", 400)
        }

        res.send(userName)




    } catch (error) {
        next(error)
    }
}