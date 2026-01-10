export type EventCreateInput = {
    eventName: string,
    description: string,
    venue: string,
    venueAddress: string,
    startingTime: Date,
    ticketBookStartTime: Date,
    ticketBookEndTime: Date,
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