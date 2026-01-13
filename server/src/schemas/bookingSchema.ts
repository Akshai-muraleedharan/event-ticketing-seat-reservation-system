import { z } from "zod"
import { Types } from "mongoose"
import { BookingType } from "../enums"

const objectId = z.string().refine(
    (val) => Types.ObjectId.isValid(val),
    { message: "Invalid ObjectId" }
)
export const createBookingSchema = z.object({
    params: z.object({
        eventId: objectId,
    }),
    body: z
        .object({
            bookingType: z.nativeEnum(BookingType),
            seatIds: z.array(objectId).optional(),
            seatCodes: z.array(z.string()).optional(),

            attendeeName: z.string().optional(),
            attendeeEmail: z.string().email().optional(),
            attendeePhone: z.string().optional(),
            totalAmount: z.number().optional()
        })
        .superRefine((data, ctx) => {
            // 🎟 TICKET validation
            if (data.bookingType === BookingType.TICKET) {
                if (!data.seatIds || data.seatIds.length === 0) {
                    ctx.addIssue({
                        path: ["seatIds"],
                        message: "Seats are required for ticket booking",
                        code: z.ZodIssueCode.custom,
                    })
                }
            }

            // 🎫 PASS validation
            if (data.bookingType === BookingType.PASS) {
                if (!data.attendeeName) {
                    ctx.addIssue({
                        path: ["attendeeName"],
                        message: "Name is required for pass booking",
                        code: z.ZodIssueCode.custom,
                    })
                }

                if (!data.attendeeEmail) {
                    ctx.addIssue({
                        path: ["attendeeEmail"],
                        message: "Email is required for pass booking",
                        code: z.ZodIssueCode.custom,
                    })
                }
            }
        }),
})