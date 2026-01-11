// import User from "../../model/user.model"
import type { Request, Response, NextFunction } from "express"
import { authService } from "../../services/index"
import { AppError } from "../../utils/appError"
import { OtpRequestBody } from "../../interfaces/common.interface"
import { UserRole } from "../../enums/index"

export const organizerRegister = async (req: Request<{}, {}, {}>, res: Response<{}>, next: NextFunction) => {

    const body = res.locals.validated.body
    console.log(body);

    if (!body) {
        throw new AppError("Invalid request body", 400)
    }

    try {
        const response = await authService.registerService(body, UserRole.ORGANIZER)

        res.cookie("otp_token", response.otpToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 5 * 60 * 1000,
        }).status(201).json({ success: true, message: "otp send to email" })

    } catch (error) {
        next(error)
    }
}

export const organizerOtpVerification = async (req: Request<{}, {}, {}>, res: Response, next: NextFunction) => {

    try {
        console.log("controller", res.locals.user_id_otp);

        const payload: OtpRequestBody = { user_id_otp: res.locals.user_id_otp, body: res.locals.validated.body }

        if (!payload) {
            throw new AppError("Invalid request body", 400)
        }

        await authService.verifyOtpService(payload, UserRole.ORGANIZER)

        res.clearCookie("otp_token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });

        res.status(200).json({ success: true, message: "Account verified successfully", })

    } catch (error) {

        next(error)
    }
}

export const organizerLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = res.locals.validated.body



        const { accessToken, refreshToken, rest } = await authService.loginService(body, UserRole.ORGANIZER)


        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });


        res.status(200).json({ success: true, message: "User Login Successfully", data: rest, accessToken: accessToken })
    } catch (error) {
        next(error)
    }
}