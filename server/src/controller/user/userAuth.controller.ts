// import User from "../../model/user.model"
import type { Request, Response, NextFunction } from "express"

export const userRegister = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send("<h1>Hello world</h1>")
    } catch (error) {
        console.log(error)
    }
}