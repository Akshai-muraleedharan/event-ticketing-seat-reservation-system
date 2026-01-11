import { z } from "zod"
import { createEventSchema } from "../schemas/index"
import { Types } from "mongoose"


export type createEventBody = z.infer<typeof createEventSchema>["body"]


export type EventSingleId = {
    eventId: Types.ObjectId
}