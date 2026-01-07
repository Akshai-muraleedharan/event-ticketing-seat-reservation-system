import mongoose from "mongoose"
import { IUser } from "../interfaces/index"
import { UserRole } from "../enums/index"


const userSchema = new mongoose.Schema<IUser>({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    roles: {
        type: String,
        enum: Object.values(UserRole),
        default: UserRole.USER
    }
}, { timestamps: true })

userSchema.index({ email: 1, roles: 1 })

export const User = mongoose.model<IUser>("User", userSchema)