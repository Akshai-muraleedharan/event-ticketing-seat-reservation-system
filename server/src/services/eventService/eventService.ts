import { EventStatus } from "../../enums";
import { authUser } from "../../interfaces";
import { Event } from "../../model/event.model";
import { SeatLayout } from "../../model/seatLayout";
import { createEventBody } from "../../types";
import { createSeatLayoutBody, EventSingleId } from "../../types/eventType";
import { AppError } from "../../utils/appError";



export class eventService {
    static async createEvent(payload: createEventBody, creater: authUser) {

        const findEvent = await Event.findOne({ eventName: payload.eventName, organizerId: creater.userId })

        if (findEvent) {
            throw new AppError("Event already exist", 409)
        }

        const newEvent = new Event({
            ...payload,
            createdById: creater.userId,
            createdByRole: creater.role,
            organizerId: creater.userId
        })

        await newEvent.save()

        return { newEvent }
    }

    static async getSingleEvent(payload: EventSingleId) {


        const findEvent = await Event.findOne({ _id: payload })

        if (!findEvent) {
            throw new AppError("Event not found", 404)
        }

        return { findEvent }
    }


    static async getEvents() {

        const findEvents = await Event.find({});

        return findEvents
    }


    static async getThreeEventService() {
        const findThreeEvent = await Event.aggregate([
            { $match: { status: EventStatus.APPROVED } },
            { $sort: { popularityScore: -1 } },
            { $limit: 3 },
            {
                $project: {
                    eventName: 1,
                    posterImage: 1,
                    venue: 1,
                    startingTime: 1,
                    bookingType: 1
                }
            }
        ])

        return findThreeEvent;
    }





    // SEAT LAYOUT BELOW

    static async createSeatLayout(payload: createSeatLayoutBody, eventId: EventSingleId, creator: authUser) {

        const seatLayoutExist = await SeatLayout.findOne({ eventId: eventId.eventId, createdBy: creator.userId })

        if (seatLayoutExist) {
            throw new AppError("Seat Layout Already Exist", 409)
        }
        const newSeatLayout = new SeatLayout({
            ...payload,
            eventId: eventId.eventId,
            createdBy: creator.userId

        })

        await newSeatLayout.save()

        return { newSeatLayout }
    }
}


