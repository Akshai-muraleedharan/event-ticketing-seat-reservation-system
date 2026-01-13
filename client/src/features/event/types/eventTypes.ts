export type EventCreateInput = {
    eventName: string,
    description: string,
    venue: string,
    venueAddress: string,
    startingTime: Date,
    ticketBookStartDateAndTime: Date,
    ticketBookEndDateAndTime: Date,
    endingTime: Date,
    posterImage: string,
    capacity: number,
    category: string,
    isOpenStage: boolean,
    isFree: boolean,
    bookingType: string,
    requiresRegistration: boolean,
    registrationDeadLine: Date
}

export type EventTableType = {
    _id: string,
    eventName: string,
    venue: string,
    capacity: number,
    isOpenStage: boolean,
    isFree: boolean,
    bookingType: string,
    category: string,
    status: string,
    requiresRegistration: boolean,

}

export type EventSingle = {
    findEvent: {
        _id: string,
        eventName: string,
        posterImage: string,
        category: string,
        isFree: boolean,
        isOpenStage: boolean,
        requiresRegistration: boolean,
        startingTime: string,
        venue: string,
        capacity: string,
        venueAddress: string,
        endingTime: string,
        status: string,
        ticketBookStartDateAndTime: string,
        ticketBookEndDateAndTime: string,
        registrationDeadLine: string,
        description: string,
        registrationAmount: number
    }
}


export type featuredEvent = {
    _id: string,
    eventName: string,
    venue: string,
    startingTime: string,
    posterImage: string,
    bookingType: string
}


export type Seats = {
    _id: string,
    category: string,
    column: number
    eventId: string
    price: number
    row: string
    seatCode: string
    seatLayoutId: string
    status: string

}

export type BookingFormData = {
    attendeeName: string;
    attendeeEmail: string;
    attendeePhone: string;
};

