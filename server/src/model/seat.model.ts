import mongoose, { Types } from "mongoose";
import { Iseat } from "../interfaces";
import { SeatStatus } from "../enums";


const seatSchema = new mongoose.Schema<Iseat>({
    eventId: {
        type: Types.ObjectId,
        ref: "Event",
        required: true
    },
    seatLayoutId: {
        type: Types.ObjectId,
        ref: "SeatLayout",
        required: true
    },
    seatCode: {
        type: String,
        index: true,
        required: true
    },
    row: {
        type: String,
        required: true
    },
    column: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: Object.values(SeatStatus),
        default: SeatStatus.AVAILABLE
    },
    lockedUntil: {
        type: Date
    },
    bookedBy: {
        type: Types.ObjectId,
        ref: "User",
    }
}, { timestamps: true })

seatSchema.index({ eventId: 1, seatCode: 1 }, { unique: true })

export const Seat = mongoose.model<Iseat>("Seat", seatSchema)