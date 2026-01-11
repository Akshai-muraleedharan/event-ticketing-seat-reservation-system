import { Types } from "mongoose";
import { Eventcategory, EventStatus, UserRole } from "../enums";

export interface IEvent {
    eventName: string,
    description: string,
    venue: string,
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

export interface EventCreateUser {

    userId: Types.ObjectId,
    role: UserRole

}