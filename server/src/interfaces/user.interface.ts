import { UserRole } from "../enums/user-role.enum"



export interface IUser {
    fullName: string,
    email: string,
    phoneNumber: string,
    roles: UserRole,
    password: string,
    profilePic: string,
    emailverified: Boolean,
    otp?: string,
    otpExpireAt?: Date
}


export interface UserPayload {
    email: string,
    password: string,

}