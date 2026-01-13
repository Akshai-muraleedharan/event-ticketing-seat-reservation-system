import { Types } from "mongoose"
import { BookingStatus, BookingType, PaymentMode, PaymentStatus, UserRole } from "../enums"

export interface IBooking {
    _id: Types.ObjectId

    bookingType: BookingType

    user: Types.ObjectId
    event: Types.ObjectId


    seats?: Types.ObjectId[]
    seatCodes?: string[]


    attendeeName?: string
    attendeeEmail?: string
    attendeePhone?: string

    totalAmount: number

    status: BookingStatus
    paymentMode: PaymentMode
    paymentStatus: PaymentStatus

    qrCodeUrl?: string
    heldUntil: Date,
    transactionId: string,
    bookedAt: Date

    createdAt: Date
    updatedAt: Date
}

export interface BookingAuthUser {

    userId: Types.ObjectId,
    role: UserRole

}