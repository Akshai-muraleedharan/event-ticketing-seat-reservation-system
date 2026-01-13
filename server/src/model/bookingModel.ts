import mongoose from "mongoose"
import { BookingStatus, BookingType, PaymentMode, PaymentStatus } from "../enums"
import { IBooking } from "../interfaces"



const bookingSchema = new mongoose.Schema<IBooking>(
    {
        bookingType: {
            type: String,
            enum: Object.values(BookingType),
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
            default: BookingStatus.HELD
        },
        heldUntil: Date,
        transactionId: String,
        paymentMode: {
            type: String,
            enum: Object.values(PaymentMode),
            default: PaymentMode.PENDING
        },

        paymentStatus: {
            type: String,
            enum: Object.values(PaymentStatus),
            default: PaymentStatus.PENDING
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
