import React, { useEffect, useState } from 'react'
import { useEvent } from '../hooks/useEvent'
import type { EventTableType } from '../types/eventTypes'
import { Link, useParams } from 'react-router-dom'

export const EventTable = () => {
    const { getEvents, isLoading } = useEvent()

    const [events, setEvents] = useState<EventTableType[]>([])

    const params = useParams()

    console.log(params);


    const tableRow = events.map((event, index) => {

        const eventNameLength = event.eventName.length
        const sliceEventName = event.eventName.slice(0, 30)

        const isLengthMore = sliceEventName.length < eventNameLength ? true : false

        let eventStatusBgColor = ""

        if (event.status === "draft") {
            eventStatusBgColor = "bg-blue-500"
        } else if (event.status === "approved") {
            eventStatusBgColor = "bg-green-500"
        } else {
            eventStatusBgColor = "bg-red-500"
        }


        return (
            <tr key={event._id} className="hover:bg-base-300 text-center font-medium">
                <th>{index + 1 || 1}</th>
                <td className='w-[15%] text-left'>
                    <Link className='hover:text-blue-500' to={`/dashboard/event/${event._id}`}> {`${event.eventName.slice(0, 30)} ${isLengthMore ? "...." : ""}`}</Link>
                </td>
                <td className='w-[16%] text-left'>{event.venue.slice(0, 23) + "...."}</td>
                <td className='w-[10%] text-left'>{event.category}</td>
                <td className='w-[10%] text-left'>{event.capacity}</td>
                <td className='w-[10%] text-left'>{event.bookingType}</td>
                <td className={` ${event.requiresRegistration ? "text-green-700 bg-green-100" : " bg-red-100 text-red-700"}`}>{event.requiresRegistration ? "Yes" : "No"}</td>
                <td className={` ${event.isFree ? "text-green-700 bg-green-100" : " bg-red-100 text-red-700"}`}>{event.isFree ? "Yes" : "No"}</td>
                <td className={` ${event.isOpenStage ? "text-green-700 bg-green-100" : " bg-red-100 text-red-700"}`}>{event.isOpenStage ? "Yes" : "No"}</td>
                <td className={`${eventStatusBgColor} uppercase`}>{event.status}</td>
            </tr>

        )
    })


    useEffect(() => {
        const fetchEvents = async () => {
            const response = await getEvents()
            setEvents(response?.data);
        }

        fetchEvents()
    }, [])
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th></th>
                            <th className='w-[15%] text-left'>Event Name</th>
                            <th className='w-[16%] text-left'>Venue</th>
                            <th className='w-[10%] text-left'>Category</th>
                            <th className='w-[10%] text-left'>Capacity</th>
                            <th className='w-[10%] text-left'>Booking Type</th>
                            <th>Registrion Only</th>
                            <th>Free Show</th>
                            <th>Open stage</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading && (
                            <tr>
                                <td colSpan={7} className='text-center'>Loading...</td>
                            </tr>
                        )}
                        {!isLoading && tableRow}

                    </tbody>
                </table>
            </div>
        </>
    )
}
