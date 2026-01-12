import { Types } from "mongoose";
import { Eventcategory, EventStatus, SeatStatus, UserRole } from "../enums";

export interface IEvent {
    eventName: string,
    description: string,
    venue: string,
    venueAddress: string,
    ticketBookStartDateAndTime?: Date,
    ticketBookEndDateAndTime?: Date,
    startingTime?: Date,
    endingTime?: Date,
    createdById: Types.ObjectId,
    createdByRole: UserRole
    organizerId: Types.ObjectId,
    posterImage: string,
    capacity: number,
    category: Eventcategory,
    isPublished?: boolean,
    publishedAt: Date,
    approvedBy: Types.ObjectId,
    approvedAt: Date,
    isOpenStage: boolean,
    isFree: boolean,
    bookingType: string,
    bookedCount: number,
    requiresRegistration: boolean,
    seatLayoutOpenAt: Date
    registrationDeadLine: Date,
    status: EventStatus,
    isDelete: boolean,
}

export interface authUser {

    userId: Types.ObjectId,
    role: UserRole

}

export interface ISeatLayout {
    eventId: Types.ObjectId,
    rows: {
        name: string,
        seatCount: number
    }[]
    ,
    categories: {
        name: string,
        price: number,
        rows: [string]
    }[]
    ,
    createdBy: Types.ObjectId,
    isPublished: boolean
}


export interface Iseat {
    eventId: Types.ObjectId,
    seatLayoutId: Types.ObjectId,
    seatCode: string,
    row: string,
    column: Number,
    category: string,
    price: Number,
    status: SeatStatus,
    lockedUntil: Date,
    bookedBy: Types.ObjectId
}