import jwt, { JwtPayload, Secret } from "jsonwebtoken"
import type { Request, Response, NextFunction } from "express"
import { AppError } from "../utils/appError"
import { getEnvVariable } from "../utils/getEnvVariable"
import { Types } from "mongoose"


export const userTokenVerify = async (req: Request, res: Response, next: NextFunction) => {
    const isDev = getEnvVariable("NODE_ENV") === "development"
    try {
        const authHeader = req.headers.authorization

        if (!authHeader || authHeader === undefined || !authHeader.startsWith("Bearer")) {
            throw new AppError("Unauthorized", 401)
        }

        const token = authHeader.split(" ")[1];

        const decodeToken = jwt.verify(token, getEnvVariable("ACCESS_TOKEN_SECRET") as Secret) as JwtPayload & {
            userId: Types.ObjectId,
            role: "admin" | "organizer" | "user"
        }


        res.locals.user = decodeToken

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