import mongoose from "mongoose"
import { IUser } from "../interfaces/index"
import { UserRole } from "../enums/index"



const userSchema = new mongoose.Schema<IUser>({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    emailverified: {
        type: Boolean,
        default: false
    },
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: String,
        enum: Object.values(UserRole),
        default: UserRole.USER
    },
    otp: {
        type: String,

    },
    otpExpireAt: {
        type: Date
    },
    profilePic: {
        type: String,
        default: ""
    },

}, { timestamps: true })

userSchema.index({ email: 1, roles: 1 })

export const User = mongoose.model<IUser>("User", userSchema)