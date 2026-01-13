import React from 'react'
import { EventRegistrationForm } from '../features/event/components/EventRegistrationForm'

export const UserEventRegister = () => {
    return (
        <div className='mx-auto'>
            <h1 className="text-2xl font-bold mb-2 text-center">Event Registration</h1>
            <p className="text-gray-500 mb-6 text-center">
                Fill in your details to register for this event
            </p>

            <EventRegistrationForm />
        </div>
    )
}
