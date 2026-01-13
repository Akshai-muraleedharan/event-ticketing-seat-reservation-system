import z from "zod";
import { createBookingSchema } from "../schemas";
import { Types } from "mongoose";

export type createBookingBody = z.infer<typeof createBookingSchema>["body"]

export type BookingEventSingleId = {
    eventId: Types.ObjectId
}