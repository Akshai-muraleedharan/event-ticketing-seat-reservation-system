import { Types } from "mongoose"
import { BookingStatus, BookingType, PaymentMode, PaymentStatus } from "../enums"

export interface IBooking {
    _id: Types.ObjectId

    bookingType: BookingType

    user: Types.ObjectId
    event: Types.ObjectId

    // 🎬 SEAT BOOKING
    seats?: Types.ObjectId[]
    seatCodes?: string[]

    // 🎫 PASS / REGISTRATION
    attendeeName?: string
    attendeeEmail?: string
    attendeePhone?: string

    totalAmount: number

    status: BookingStatus
    paymentMode: PaymentMode
    paymentStatus: PaymentStatus

    qrCodeUrl?: string

    bookedAt: Date

    createdAt: Date
    updatedAt: Date
}