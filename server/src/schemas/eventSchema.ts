import { z } from "zod"
import { EventBooking, Eventcategory } from "../enums"
import { Types } from "mongoose"

const isoDate = z.string().min(1, "Event date & time is required")



export const createEventSchema = z.object({
    body: z.object({
        eventName: z.string().trim().min(1, "Event Name is required").min(4, "Event Name must be at least 3 characters"),
        venue: z.string().min(1, "Venue must be at least 3 characters").max(200, "Venue cannot exceed 200 characters"),
        venueAddress: z.string().min(1, "Venue must be at least 3 characters").max(200, "Venue cannot exceed 200 characters"),
        description: z.string().min(1, "Description must be at least 10 characters").max(1000, "Description cannot exceed 1000 characters"),
        startingTime: z.coerce.date(),
        endingTime: z.coerce.date(),
        ticketBookStartDateAndTime: z.coerce.date().optional(),
        ticketBookEndDateAndTime: z.coerce.date().optional(),
        capacity: z.coerce.number().min(1, "Event capacity is required"),
        category: z.nativeEnum(Eventcategory, { message: "Event category is required" }),
        bookingType: z.nativeEnum(EventBooking),
        isOpenStage: z.boolean().optional(),
        isFree: z.boolean().optional(),
        requiresRegistration: z.boolean().optional(),
        registrationDeadline: isoDate.optional()
    })
})


export const singleEventIdSchema = z.object({
    params: z.object({
        eventId: z.string().refine((val) => Types.ObjectId.isValid(val), { message: "Invalid objectId" })
    })
})

export const seatLayoutSchema = z.object({
    params: z.object({
        eventId: z.string().refine((val) => Types.ObjectId.isValid(val), { message: "Invalid objectId" })
    }),
    body: z.object({
        rows: z.array(
            z.object({
                name: z.string(),
                seatCount: z.number().positive()
            })
        ),


        categories: z.array(
            z.object({
                name: z.string(),
                price: z.number().positive(),
                rows: z.array(z.string())
            })
        )

    })
})

