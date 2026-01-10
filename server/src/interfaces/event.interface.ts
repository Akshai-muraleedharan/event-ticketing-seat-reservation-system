import { Types } from "mongoose";
import { Eventcategory, EventStatus, UserRole } from "../enums";

export interface IEvent {
    eventName: string,
    description: string,
    venue: string,
    startingTime: Date,
    endingTime: Date,
    createdBy: UserRole
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
    requiresRegistration: boolean,
    registrationDeadLine: Date,
    status: EventStatus,
    isDelete: boolean,
}