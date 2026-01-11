import jwt, { JwtPayload, Secret } from "jsonwebtoken"
import type { Request, Response, NextFunction } from "express"
import { AppError } from "../utils/appError"
import { getEnvVariable } from "../utils/getEnvVariable"
import { Types } from "mongoose"


export const verifyOtpToken = async (req: Request, res: Response, next: NextFunction) => {

    const isDev = getEnvVariable("NODE_ENV") === "development"
    const otpSecret = getEnvVariable("OTP_TOKEN")
    try {

        const { otp_token } = req.cookies;

        if (!otp_token) {
            throw new AppError("Otp expired", 400)
        }

        const decode = jwt.verify(otp_token, otpSecret as Secret) as JwtPayload & {
            id: Types.ObjectId
        }




        res.locals.user_id_otp = decode

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