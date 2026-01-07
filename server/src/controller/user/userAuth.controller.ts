// import User from "../../model/user.model"
import type { Request, Response, NextFunction } from "express"
import { authService } from "../../services/index"
import { AppError } from "../../utils/appError"
import { OtpRequestBody } from "../../interfaces/common.interface"

export const userRegister = async (req: Request<{}, {}, {}>, res: Response<{}>, next: NextFunction) => {

    const body = res.locals.validated?.body

    if (!body) {
        throw new AppError("Invalid request body", 400)
    }

    try {
        const response = await authService.registerUserService(body)

        res.cookie("otp_token", response.otpToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 5 * 60 * 1000,
        });

        res.status(201).json({ success: true, message: "otp send to email" })

    } catch (error) {
        next(error)
    }
}

export const otpVerification = async (req: Request<{}, {}, {}>, res: Response,) => {


    const payload: OtpRequestBody = { user_id_otp: res.locals.user_id_otp, body: res.locals.validated?.body }

    await authService.verifyOtpService(payload)


    res.status(200).json({ success: true, message: "Account verified successfully", })

}