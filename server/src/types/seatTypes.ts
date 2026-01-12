import { Types } from "mongoose"


export type createSeatPayload = {
    eventId: Types.ObjectId,
    seatLayoutId: Types.ObjectId
}