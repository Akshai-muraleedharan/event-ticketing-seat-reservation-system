import { z } from "zod"
import { createEventSchema, seatLayoutSchema } from "../schemas/index"
import { Types } from "mongoose"


export type createEventBody = z.infer<typeof createEventSchema>["body"]


export type EventSingleId = {
    eventId: Types.ObjectId
}

export type createSeatLayoutBody = z.infer<typeof seatLayoutSchema>["body"]

