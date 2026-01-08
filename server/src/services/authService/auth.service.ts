import { User } from "../../model/user.model";
import { CreateUserBody } from "../../types/index";
import crypto from "crypto"
import bcryptjs from "bcryptjs"
import { AppError } from "../../utils/appError";
import { sendMail } from "../../utils/sendEmail";
import { generateAccessToken, generateOtpToken, generateRefreshToken } from "../../utils/generateToken";
import { OtpRequestBody, UserPayload } from "../../interfaces/index";

export class authService {
    static async registerUserService(payload: CreateUserBody) {

        let user = await User.findOne({ email: payload.email })

        if (user && user.emailverified) {
            throw new AppError("Account Already exist", 409)
        }

        const hashedPassword = await bcryptjs.hash(payload.password, 10);

        const otp = crypto.randomInt(100000, 1000000).toString();

        const hashedOtp = await bcryptjs.hash(otp, 10);

        const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000);
        if (!user) {
            user = new User({
                fullName: payload.fullName,
                email: payload.email,
                phoneNumber: payload.phoneNumber,
                password: hashedPassword,
                otp: hashedOtp,
                otpExpireAt: otpExpiresAt

            })
        } else {
            user.otp = hashedOtp
            user.otpExpireAt = otpExpiresAt
            if (payload.password) user.password = await bcryptjs.hash(payload.password, 10)
        }

        await user.save()

        const otpToken = generateOtpToken({ id: user._id })



        await sendMail({
            to: payload.email,
            subject: "Verify Your EventFlow Account – OTP Code",
            text: `Your EventFlow OTP is ${otp}. It is valid for 5 minutes.`,
            html: `
            <div style="font-family: Arial, sans-serif; color: #111827;">
            <p>Hello,</p>

            <p>
                Welcome to <strong>EventFlow</strong> <br/>
                We’re excited to have you on board!
            </p>

            <p>To complete your account registration, please use the OTP below:</p>

            <!-- BIG OTP -->
            <div style="
                font-size: 36px;
                font-weight: bold;
                letter-spacing: 8px;
                margin: 24px 0;
                text-align: center;
                color: #2563eb;
            ">
                ${otp}
            </div>

            <p>This OTP is valid for <strong>5 minutes</strong>.</p>

            <p style="color: #dc2626;">
                Do not share this code with anyone.
            </p>

            <p>
                Thanks for choosing <strong>EventFlow</strong><br/>
                Your gateway to seamless event booking and seat reservations 
            </p>

            <p>
                Best regards,<br/>
                <strong>EventFlow Team</strong><br/>
                support@eventflow.com
            </p>
            </div>
  `,

        })

        return {
            otpToken: otpToken
        }

    }

    static async verifyOtpService(payload: OtpRequestBody) {



        const findUser = await User.findById(payload.user_id_otp)

        if (!findUser || !findUser.otp) {
            throw new AppError("OTP expired", 400)
        }

        const expireAt = findUser.otpExpireAt;

        if (!findUser.otp || !expireAt || expireAt < new Date()) {
            throw new AppError("Invalid otp", 400);
        }

        const isOtpMatch = await bcryptjs.compare(payload.body.otp, findUser?.otp)

        if (!isOtpMatch) {
            throw new AppError("Invalid otp", 400)
        }

        findUser.emailverified = true
        findUser.otp = undefined
        findUser.otpExpireAt = undefined

        await findUser.save()



        return
    }

    static async loginService(payload: UserPayload) {


        const user = await User.findOne({ email: payload.email })

        if (!user) {
            throw new AppError("User Account not found", 404)
        }

        if (!user?.emailverified) {
            throw new AppError("Email not verified. Please verify OTP.", 400)
        }

        if (!user) {
            throw new AppError("User not found", 404)
        }

        const isPasswordMatch = await bcryptjs.compare(payload.password, user.password)

        if (!isPasswordMatch) {
            throw new AppError("Invalid creditials", 400)
        }

        const jwtSignData = { id: user._id, role: "user" }

        const accessToken = generateAccessToken(jwtSignData)
        const refreshToken = generateRefreshToken({ id: user._id })

        const userObj = user.toObject()
        const { password: pass, ...rest } = userObj




        return { accessToken, refreshToken, rest }
    }

}