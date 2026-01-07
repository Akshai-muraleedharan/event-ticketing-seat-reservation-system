import { UserRole } from "../enums/user-role.enum"



export interface IUser {
    userName: string,
    email: string,
    phoneNumber: string,
    roles: UserRole,
    password: string,
    profilePic: string,
    emailverified: Boolean,
    otp?: string,
    otpExpireAt?: Date
}


