import React, { useEffect, useState } from 'react'
import { useSingleEvent } from '../hooks/useSingleEvent'
import type { EventSingle } from '../types/eventTypes'
import { Detail } from '../../../components/ui/Detail'
import { useAuthStore } from '../../../store'

export const EventSingleDetail = () => {
    const [event, setEvent] = useState<EventSingle | null>(null)


    const user = useAuthStore().user?.roles
    const { getEvent } = useSingleEvent()

    const formattedDate = (date: string) => {
        return new Date(date).toLocaleString()
    }

    let isOrganizerOrAdmin

    if (user === "organizer" || user === "admin") {
        isOrganizerOrAdmin = true
    } else {
        isOrganizerOrAdmin = false
    }





    useEffect(() => {
        const fetchEvents = async () => {
            const response = await getEvent()
            setEvent(response?.data);
        }

        fetchEvents()
    }, [])

    return (
        <section>
            <div className=" w-full lg:max-w-6xl lg:mx-auto  shadow-sm md:p-5">

                {/* <h1 className='text-center font-medium w-full text-xl lg:text-2xl'>{event?.findEvent.eventName}</h1> */}

                <div className='flex flex-col  md:flex-row gap-6 mt-20'>

                    <div className='w-full md:w-60 shrink-0'>
                        <img src={event?.findEvent.posterImage}
                            className='w-full h-92 object-cover rounded-lg shadow'
                            alt={event?.findEvent.eventName} />
                    </div>


                    <div className='flex flex-col gap-5 w-full'>
                        <div className="card w-full bg-base-200 card-md shadow-sm">
                            <div className="card-body">
                                <h1 className='text-3xl'>{event?.findEvent.eventName}</h1>
                                <h3 className='text-gray-400 mt-3 h-0'>{event?.findEvent.category}</h3>

                                <div className='flex flex-wrap gap-2 mt-10'>
                                    {event?.findEvent.isFree && <div className="badge badge-success">Free</div>}
                                    {event?.findEvent.isOpenStage && <div className="badge badge-primary">Open Stage</div>}
                                    {event?.findEvent.requiresRegistration && <div className="badge  badge-warning">Registration Only</div>}
                                </div>


                                <div className='grid grid-cols-1 gap-3 lg:grid-cols-2 mt-8'>
                                    {event?.findEvent.startingTime && <Detail label={"Date & Time"} value={formattedDate(event?.findEvent.startingTime) ?? ""} />}
                                    {event?.findEvent.venue && <Detail label={"Venue"} value={event?.findEvent.venue} />}
                                    {event?.findEvent.capacity && <Detail label={"Capaicty"} value={event.findEvent.capacity} />}
                                    {event?.findEvent.venueAddress && <Detail label={"Address"} value={event.findEvent.venueAddress} />}
                                    {/* not bug */}
                                    {event?.findEvent.startingTime && <Detail label={"Entry"} value={event.findEvent.isFree ? "Free" : "Paid"} />}
                                </div>

                            </div>
                        </div>

                        {!isOrganizerOrAdmin && <div className='flex justify-end'>
                            {event?.findEvent.requiresRegistration ? (
                                <button className='btn btn-primary w-full md:w-1/4'>Register now</button>
                            ) : (
                                <button className='btn btn-primary w-full md:w-1/4'> Book ticket</button>
                            )}
                        </div>}


                        {isOrganizerOrAdmin && <div className='  mt-2'>
                            <div className="card w-full bg-base-200 card-md shadow-sm">
                                <div className="card-body">
                                    <div className='grid grid-cols-1 gap-3 lg:grid-cols-2 '>
                                        {event?.findEvent.endingTime && <Detail label={"Event End Date And Time"} value={formattedDate(event.findEvent.endingTime)} />}
                                        {event?.findEvent.status && <Detail label={"Status"} value={event.findEvent.status} />}
                                        {event?.findEvent.ticketBookStartDateAndTime && <Detail label={"Ticket Booking Starting Date"} value={formattedDate(event.findEvent.ticketBookStartDateAndTime)} />}
                                        {event?.findEvent.ticketBookEndDateAndTime && <Detail label={"Ticket Booking Ending Date"} value={formattedDate(event.findEvent.ticketBookEndDateAndTime)} />}
                                        {event?.findEvent.registrationDeadLine && <Detail label='Registration Ending Date' value={event.findEvent.registrationDeadLine} />}
                                    </div>
                                </div>
                            </div>
                        </div>}


                        <div className='mt-2'>
                            <div className="card w-full bg-base-200 card-md shadow-sm">
                                <div className="card-body">
                                    <h3>About the Event</h3>
                                    <p className='text-gray-700 dark:text-slate-200 leading-relaxed'>
                                        {event?.findEvent.description}
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>



                </div>

            </div>

        </section>
    )
}
