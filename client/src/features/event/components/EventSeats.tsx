import React from 'react'
import type { Seats } from '../types/eventTypes'

interface EventSeatProps {
    seat: Seats,
    onSelect: (seat: Seats) => void,
    selected: boolean
}

export const EventSeats: React.FC<EventSeatProps> = ({ seat, onSelect, selected }) => {

    const isDisabled = seat.status !== "available"

    const getSeatColor = () => {
        if (selected) return "bg-black text-white"
        switch (seat.status) {
            case "booked":
                return "bg-gray-400 cursor-not-allowed"
            case "locked":
                return "bg-orange-400 cursor-not-allowed"
            case "available":
            default:
                return "bg-green-400"

        }
    }


    return (

        <button disabled={isDisabled} onClick={() => onSelect(seat)} className={`w-8 h-8 text-xs cursor-pointer font-medium rounded text-black ${getSeatColor()}`}>
            {seat.seatCode}
        </button>
    )
}
