import { Types } from "mongoose"


export interface MailOptions {
    to: string,
    subject: string,
    text: string,
    html?: string
}

export interface OtpToken {
    id: Types.ObjectId
}

export interface OtpRequestBody {
    user_id_otp: Types.ObjectId,
    body: {
        otp: string
    }
}

export interface AccessTokenParameter {
    id: Types.ObjectId,
    role: string
}

export interface RefreshTokenParameter {
    id: Types.ObjectId,
}