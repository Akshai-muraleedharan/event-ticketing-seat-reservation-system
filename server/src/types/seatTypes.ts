import { Types } from "mongoose"


export type createSeatPayload = {
    eventId: Types.ObjectId,
    seatLayoutId: Types.ObjectId
}

export type getSeatPayload = {
    eventId: Types.ObjectId,
}