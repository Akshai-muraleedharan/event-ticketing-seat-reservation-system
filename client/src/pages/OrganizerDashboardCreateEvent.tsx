import React from 'react'
import { EventCreateForm } from '../features/index'

export const OrganizerDashboardCreateEvent = () => {
    return (
        <section>
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-center ">
                Create New Event
            </h2>
            <EventCreateForm />
        </section>
    )
}
