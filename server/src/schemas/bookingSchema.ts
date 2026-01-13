import { z } from "zod"
import { Types } from "mongoose"

const objectId = z.string().refine(
    (val) => Types.ObjectId.isValid(val),
    { message: "Invalid ObjectId" }
)

export const createBookingSchema = z.object({
    bookingType: z.enum(["TICKET", "PASS"]),
    event: objectId,


    seatIds: z.array(objectId).optional(),
    seatCodes: z.array(z.string()).optional(),

    attendeeName: z.string().optional(),
    attendeeEmail: z.string().email().optional(),
    attendeePhone: z.string().optional()
}).superRefine((data, ctx) => {

    if (data.bookingType === "TICKET") {
        if (!data.seatIds || data.seatIds.length === 0) {
            ctx.addIssue({
                path: ["seatIds"],
                message: "Seats are required for ticket booking",
                code: z.ZodIssueCode.custom
            })
        }
    }

    if (data.bookingType === "PASS") {
        if (!data.attendeeName) {
            ctx.addIssue({
                path: ["attendeeName"],
                message: "Name is required",
                code: z.ZodIssueCode.custom
            })
        }

        if (!data.attendeeEmail) {
            ctx.addIssue({
                path: ["attendeeEmail"],
                message: "Email is required",
                code: z.ZodIssueCode.custom
            })
        }
    }
})