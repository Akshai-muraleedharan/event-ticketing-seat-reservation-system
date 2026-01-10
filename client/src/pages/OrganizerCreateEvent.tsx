
import { EventCreateForm } from '../features/event'

export const OrganizerCreateEvent = () => {
    return (
        <section>
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-center ">
                Create New Event
            </h2>
            <p className='className="text-lg text-base-content/80 max-w-2xl mx-auto mt-5 mb-10 font-inter"'>
                Set up your event details, booking type, and poster. You can publish after admin approval.
            </p>
            <EventCreateForm />
        </section>
    )
}
