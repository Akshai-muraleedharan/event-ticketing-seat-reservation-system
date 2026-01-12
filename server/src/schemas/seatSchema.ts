import { Types } from "mongoose";
import z from "zod";




export const seatSchema = z.object({
    params: z.object({
        eventId: z.string().refine((val) => Types.ObjectId.isValid(val), { message: "eventId - Invalid  ObjectId" }),
        seatLayoutId: z.string().refine((val) => Types.ObjectId.isValid(val), { message: "seatLayoutId - Invalid ObjectId" }),
    })
})