import jwt, { Secret } from "jsonwebtoken"
import { getEnvVariable } from "./getEnvVariable"
import { AccessTokenPayload, OtpToken, RefreshTokenPayload } from "../interfaces/index"


export const generateOtpToken = (payload: OtpToken): string => {
    const otpSecret = getEnvVariable("OTP_TOKEN")

    const token = jwt.sign({ id: payload.id }, otpSecret as Secret, { expiresIn: "5m" })

    return token
}


export const generateAccessToken = (payload: AccessTokenPayload) => {

    const accessTokenSecret = getEnvVariable("ACCESS_TOKEN_SECRET")

    const accessToken = jwt.sign({ userId: payload.id, role: payload.role }, accessTokenSecret as Secret, { expiresIn: "15m" })

    return accessToken
}

export const generateRefreshToken = (payload: RefreshTokenPayload) => {
    const refreshTokenSecret = getEnvVariable("REFRESH_TOKEN_SECRET")

    const refreshToken = jwt.sign({ userId: payload.id, role: payload.role }, refreshTokenSecret as Secret, { expiresIn: "15d" })

    return refreshToken
}