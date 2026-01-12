import mongoose, { Types } from "mongoose"
import { ISeatLayout } from "../interfaces"



const seatLayoutSchema = new mongoose.Schema<ISeatLayout>({
    eventId: {
        type: Types.ObjectId,
        ref: "Event",
        required: true
    },
    rows: [
        {
            name: {
                type: String,
                required: true
            },
            seatCount: {
                type: Number,
                required: true
            }
        }
    ],
    categories: [
        {
            name: {
                type: String,
                required: true
            },
            price: {
                type: String,
                required: true,
                min: 0
            },
            rows: {
                type: [String],
                required: true
            }

        }
    ],
    createdBy: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    },
    isPublished: {
        type: Boolean,
        default: false
    }
})

seatLayoutSchema.index({ eventId: 1, createdBy: 1 }, { unique: true })

export const SeatLayout = mongoose.model<ISeatLayout>("SeatLayout", seatLayoutSchema)