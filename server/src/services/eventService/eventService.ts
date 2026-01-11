import { EventCreateUser } from "../../interfaces";
import { Event } from "../../model/event.model";
import { createEventBody } from "../../types";
import { EventSingleId } from "../../types/eventType";
import { AppError } from "../../utils/appError";



export class eventService {
    static async createEvent(payload: createEventBody, creater: EventCreateUser) {

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

}