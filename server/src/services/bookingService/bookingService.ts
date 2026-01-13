import { BookingType } from "../../enums";
import { BookingAuthUser } from "../../interfaces";
import { BOOKING } from "../../model/bookingModel";
import { Event } from "../../model/event.model";
import { BookingEventSingleId, createBookingBody } from "../../types";
import { AppError } from "../../utils/appError";



export class bookingService {
    static async registration(payload: createBookingBody, eventId: BookingEventSingleId, user: BookingAuthUser) {


        const eventExist = await Event.findById(eventId.eventId)

        if (!eventExist) {
            throw new AppError("Event Not Found", 404)
        }

        const bookingType = BookingType.PASS

        let count = 0

        const newRegistraion = new BOOKING({
            bookingType: bookingType,
            user: user.userId,
            event: eventId.eventId,
            attendeeName: payload.attendeeName,
            attendeeEmail: payload.attendeeEmail,
            attendeePhone: payload.attendeePhone,
            totalAmount: payload.totalAmount,
            heldUntil: new Date(Date.now() + 10 * 60 * 1000)
        })

        eventExist.bookedCount = count += 1

        await newRegistraion.save()

        await eventExist.save()

        return { payload, eventId, user }
    }
}