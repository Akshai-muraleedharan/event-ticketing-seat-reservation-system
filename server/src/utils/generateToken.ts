import jwt, { Secret } from "jsonwebtoken"
import { getEnvVariable } from "./getEnvVariable"
import { OtpToken } from "../interfaces/index"


export const generateOtpToken = (payload: OtpToken): string => {
    const otpSecret = getEnvVariable("OTP_TOKEN")

    const token = jwt.sign({ id: payload.id }, otpSecret as Secret, { expiresIn: "5m" })

    return token
} 