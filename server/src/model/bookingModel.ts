import mongoose from "mongoose"
import { BookingStatus, PaymentMode, PaymentStatus } from "../enums"
import { IBooking } from "../interfaces"



const bookingSchema = new mongoose.Schema<IBooking>(
    {
        bookingType: {
            type: String,
            enum: ["SEAT", "PASS"],
            required: true
        },

        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },

        event: {
            type: mongoose.Types.ObjectId,
            ref: "Event",
            required: true
        },

        seats: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Seat"
            }
        ],
        seatCodes: [String],


        attendeeName: String,
        attendeeEmail: String,
        attendeePhone: String,

        totalAmount: {
            type: Number,
            required: true
        },

        status: {
            type: String,
            enum: Object.values(BookingStatus),
            default: BookingStatus.CONFIRMED
        },

        paymentMode: {
            type: String,
            enum: Object.values(PaymentMode),
            default: PaymentMode.MOCK
        },

        paymentStatus: {
            type: String,
            enum: Object.values(PaymentStatus),
            default: PaymentStatus.SUCCESS
        },

        qrCodeUrl: String,
        bookedAt: {
            type: Date,
            default: Date.now
        }
    },
    { timestamps: true }
)

export const BOOKING = mongoose.model("Booking", bookingSchema)
