import { User } from "../../model/user.model";
import { CreateUserBody } from "../../types/index";
import crypto from "crypto"
import bcryptjs from "bcryptjs"
import { AppError } from "../../utils/appError";

export class authService {
    static async registerUserService(payload: CreateUserBody) {

        const findUser = await User.findOne({ email: payload.email })

        if (findUser) {
            throw new AppError("Account Already exist", 409)
        }

        const hashedPassword = await bcryptjs.hash(payload.password, 10);

        const otp = crypto.randomInt(100000, 1000000).toString();

        const hashedOtp = await bcryptjs.hash(otp, 10);

        const otpExpiresAt = Date.now() + 5 * 60 * 1000;

        const newUser = await User.create({
            userName: payload.userName,
            email: payload.email,
            phoneNumber: payload.phoneNumber,
            password: hashedPassword,
            otp: hashedOtp,
            otpExpireAt: otpExpiresAt

        })



        return {
            id: newUser._id,
            otp: otp
        }
    }
}