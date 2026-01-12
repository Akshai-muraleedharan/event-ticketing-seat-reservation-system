import { useEffect, useState } from "react"
import { useEventFeature } from "../hooks/useEventFeature"
import type { featuredEvent } from "../types/eventTypes"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../../../store"


export const EventFeatureSection = () => {

    const { getFeturedEvent } = useEventFeature()

    const [featuredEvent, setFeaturedEvent] = useState<featuredEvent[]>([])

    const user = useAuthStore().isAuthenticated

    const navigate = useNavigate()

    const formattedDate = (date: string) => {
        return new Date(date).toLocaleString()
    }

    const handlechange = (id: string) => {
        if (user) {
            navigate(`/user/event/${id}`)
        } else {
            navigate(`/event/${id}`)
        }

    }

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await getFeturedEvent()
            setFeaturedEvent(response?.data);
        }

        fetchEvents()
    }, [])



    return (
        <section className='bg-base-200'>
            <div className='px-6 text-center mb-20'>
                <h2 className='text-4xl font-poppins font-bold'>Trending Events</h2>

                <p className="text-lg text-base-content/80 max-w-2xl mx-auto mt-5">
                    Handpicked events you shouldn’t miss
                </p>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {featuredEvent.map((event) => (
                        <div className="card bg-base-100  shadow-sm">
                            <figure>
                                <img className="w-full h-64"
                                    src={event.posterImage}
                                    alt={event.eventName} />
                            </figure>
                            <div className="card-body p-4 text-start">
                                <h2 className="text-lg font-medium line-clamp-1 ">{event.eventName}</h2>
                                <p className="text-sm dark:text-white text-gray-600">{event.venue}</p>
                                <p className="text-sm dark:text-white text-gray-600">{formattedDate(event.startingTime)}</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handlechange(event._id)} className="btn btn-primary">{event.bookingType === "pass" ? "Register now" : "View & book"}</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    )
}
