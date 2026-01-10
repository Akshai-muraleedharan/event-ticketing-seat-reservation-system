import { z } from "zod"
import { EventBooking, Eventcategory } from "../enums"

const isoDate = z
    .string()
    .datetime({ message: "Invalid ISO date format" })
    .transform((val) => new Date(val))


export const createEventSchema = z.object({
    body: z.object({
        eventName: z.string().trim().min(1, "Event Name is required").min(4, "Event Name must be at least 3 characters"),
        description: z.string().min(1, "Description must be at least 10 characters").max(1000, "Description cannot exceed 1000 characters"),
        venue: z.string().min(1, "Venue must be at least 3 characters").max(200, "Venue cannot exceed 200 characters"),
        startingTime: isoDate,
        endingTime: isoDate,
        posterImage: z.string().optional(),
        capacity: z.number().min(1, "Capacity must be at least 1"),
        category: z.nativeEnum(Eventcategory),
        bookingType: z.nativeEnum(EventBooking),
        isOpenStage: z.boolean().optional(),
        isFree: z.boolean().optional(),
        requiresRegistration: z.boolean().optional(),
        registrationDeadline: isoDate.optional()
    })
})