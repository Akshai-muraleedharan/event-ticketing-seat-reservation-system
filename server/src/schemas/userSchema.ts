import { z } from "zod"


export const createUserShema = z.object({
    body: z.object({
        userName: z.string().min(3, "Username must be at least 3 characters"),
        email: z.string().email("Invalid email"),
        password: z.string().min(6, "Password too short"),
        phoneNumber: z.string().trim().regex(/^[6-9]\d{9}$/, "Invalid Indian mobile number"),
    })
})