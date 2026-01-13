import type { Request, Response, NextFunction } from "express"
import { AppError } from "../utils/appError"
import jwt, { JwtPayload, Secret } from "jsonwebtoken"
import { getEnvVariable } from "../utils/getEnvVariable"
import { Types } from "mongoose"


export const refreshTokenVerify = (req: Request, res: Response, next: NextFunction) => {

    const isDev = getEnvVariable("NODE_ENV") === "development"
    const refreshTokenSecret = getEnvVariable("REFRESH_TOKEN_SECRET")
    try {
        const { refreshToken } = req.cookies

        if (!refreshToken) {
            throw new AppError("Invalid token", 400)
        }

        const decode = jwt.verify(refreshToken, refreshTokenSecret as Secret) as JwtPayload & {
            userId: Types.ObjectId,
            role: "admin" | "organizer" | "user"
        }

        res.locals.authUser = decode

        next()


    } catch (error: any) {

        if (error.name === "JsonWebTokenError") {
            throw new AppError(isDev ? error.message : "Unauthorized", 401)
        }


        if (error.name === "TokenExpiredError") {
            throw new AppError(isDev ? error.message : "Unauthorized", 401)
        }
        next(error)
    }
}