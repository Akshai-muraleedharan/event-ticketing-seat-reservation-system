import React, { useEffect, useState } from 'react'
import { useEventSeatLayout } from '../hooks/useEventSeatLayout'
import type { Seats } from '../types/eventTypes'
import { EventSeats } from './EventSeats'

export const EventSeatLayout = () => {

    const { getSeats } = useEventSeatLayout()

    const [seats, setSeats] = useState<Seats[]>([])
    const [selectedSeats, setSelectedSeats] = useState<Seats[]>([])

    console.log(selectedSeats);

    const groupedSeats = seats.reduce((acc: any, seat: any) => {
        if (!acc[seat.row]) acc[seat.row] = []
        acc[seat.row].push(seat)
        return acc
    }, {})

    const handleSelectSeat = (seat: Seats) => {

        setSelectedSeats(prev =>
            prev.find(s => s._id === seat._id)
                ? prev.filter(s => s._id !== seat._id)
                : [...prev, seat]
        )
    }





    useEffect(() => {
        const fetchEvents = async () => {
            const response = await getSeats()

            console.log(response?.data.seats);

            setSeats(response?.data.seats);

        }

        fetchEvents()
    }, [])

    return (
        <div>
            {
                Object.entries(groupedSeats).map(([row, rowSeats]) => {

                    const seatInRow = rowSeats as Seats[]
                    return (
                        <div key={row} className='flex items-center gap-3 my-3 border-b p-2 border-b-blue-600'>
                            <div className='flex flex-col'>
                                <span className="w-6 font-semibold">{row}</span>
                                <span className="w-6 text-sm">{seatInRow[0].category} {seatInRow[0].price}</span>
                            </div>


                            <div className='flex gap-2 justify-center mx-auto flex-wrap '>
                                {seatInRow.map((seat) =>

                                    <EventSeats
                                        key={seat._id}
                                        seat={seat}
                                        onSelect={handleSelectSeat}
                                        selected={selectedSeats.some(s => s._id === seat._id)}
                                    />)}
                            </div>

                        </div>
                    )
                })
            }


            <div className='mt-10 p-4 border rounded'>
                <p>
                    Selected Seats:{" "}
                    {selectedSeats.map(s => s.seatCode).join(", ")}
                </p>
                <p className="font-semibold">
                    Total: ₹{selectedSeats.reduce((t, s) => t + s.price, 0)}
                </p>
            </div>
        </div>
    )
}
