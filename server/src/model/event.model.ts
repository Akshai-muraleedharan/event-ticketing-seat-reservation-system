import mongoose, { Types } from "mongoose"
import { IEvent } from "../interfaces"
import { EventBooking, Eventcategory, EventStatus, UserRole } from "../enums"



const eventSchema = new mongoose.Schema<IEvent>({
    eventName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    venue: {
        type: String,
        required: true
    },
    venueAddress: {
        type: String,
        required: true
    },
    ticketBookStartDateAndTime: {
        type: Date,
        required: true,
    },
    ticketBookEndDateAndTime: {
        type: Date,
        required: true,
    },
    startingTime: {
        type: Date,
        required: true,
    },
    endingTime: {
        type: Date,
        required: true
    },
    createdById: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    },
    createdByRole: {
        type: String,
        enum: Object.values(UserRole),
        default: UserRole.ORGANIZER
    },
    organizerId: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    },
    posterImage: {
        type: String,
        default: ""
    },
    capacity: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: Object.values(Eventcategory),
        default: Eventcategory.OTHER,
        required: true
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    publishedAt: {
        type: Date
    },
    approvedBy: {
        type: Types.ObjectId,
        ref: "User",
    },
    approvedAt: {
        type: Date
    },
    isOpenStage: {
        type: Boolean,
        default: false
    },
    isFree: {
        type: Boolean,
        default: false
    },
    bookingType: {
        type: String,
        enum: Object.values(EventBooking),
        seat: EventBooking.TICKET
    },
    bookedCount: {
        type: Number,
        default: 0
    },
    requiresRegistration: {
        type: Boolean,
        default: false
    },
    seatLayoutOpenAt: {
        type: Date
    },
    registrationDeadLine: {
        type: Date
    },
    status: {
        type: String,
        enum: Object.values(EventStatus),
        default: EventStatus.DRAFT
    },
    isDelete: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

eventSchema.index(
    { eventName: 1, organizerId: 1 },
    { unique: true }
)

export const Event = mongoose.model<IEvent>("Event", eventSchema)