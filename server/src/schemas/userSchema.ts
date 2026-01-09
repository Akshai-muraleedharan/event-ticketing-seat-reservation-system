import { z } from "zod"


export const createSchema = z.object({
    body: z.object({
        fullName: z.string().trim().min(1, "Full name is required").min(3, "Username must be at least 3 characters"),
        email: z.string().min(1, "Email is required").email("Invalid email"),
        password: z.string().min(1, "Password is required").min(6, "Password too short"),
        phoneNumber: z.string().min(1, "Mobile Number is required").trim().regex(/^[6-9]\d{9}$/, "Invalid Indian mobile number"),
    })
})

export const otpSchema = z.object({
    body: z.object({
        otp: z.string().length(6, "OTP must be exactly 6 digits").regex(/^\d+$/, "OTP must contain only numbers"),
    })
})

export const loginSchema = z.object({
    body: z.object({
        email: z.string().trim().min(1, "Email is required").email("Invalid email"),
        password: z.string().trim().min(1, "Password is required").min(6, "Password too short"),
    })
})