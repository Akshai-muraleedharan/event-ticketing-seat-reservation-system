import mongoose, { Types } from "mongoose"
import { IEvent } from "../interfaces"
import { Eventcategory, EventStatus, UserRole } from "../enums"



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
    startingTime: {
        type: Date,
        required: true,
    },
    endingTime: {
        type: Date,
        required: true
    },
    createdBy: {
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
    requiresRegistration: {
        type: Boolean,
        default: false
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

})


export const Event = mongoose.model<IEvent>("Event", eventSchema)