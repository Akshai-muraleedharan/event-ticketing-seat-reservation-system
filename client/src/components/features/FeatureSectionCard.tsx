

export const FeatureSectionCard = () => {
    return (
        <>
            <div className='mt-10'>
                <h3 className='text-xl font-semibold mb-6 font-poppins'>For Users</h3>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className="card w-96 bg-base-100 card-sm shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title">Discover Events</h4>
                            <p className="text-sm mt-2"> Explore concerts, conferences, workshops, and more in one place.
                                Discover events that match your interests and schedule.</p>

                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 card-sm shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title">Book Tickets</h4>
                            <p className="text-sm mt-2">  Secure and seamless ticket booking with instant confirmation.
                                Book your spot in seconds without any hassle.</p>

                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 card-sm shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title">Personalized Feed</h4>
                            <p className="text-sm mt-2"> Get event recommendations based on your interests.
                                Never miss events you’ll love.</p>

                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 card-sm shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title">Easy Check-in</h4>
                            <p className="text-sm mt-2"> Digital tickets and QR codes for quick entry.
                                Skip the lines and check in effortlessly</p>

                        </div>
                    </div>

                </div>

            </div>

            <div className='mt-10'>
                <h3 className='text-xl font-semibold mb-6 font-poppins'>For Organizers</h3>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className="card w-96 bg-base-100 card-sm shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title">Create Events</h4>
                            <p className="text-sm mt-2"> Launch events in minutes with flexible scheduling and pricing.
                                Set dates, ticket types, and prices with ease.</p>

                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 card-sm shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title">Event Insights</h4>
                            <p className="text-sm mt-2">Track registrations, revenue, and audience engagement.
                                Make data-driven decisions with real-time insights.</p>

                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 card-sm shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title">Ticket Management</h4>
                            <p className="text-sm mt-2">Control ticket types, limits, and sales in real time.
                                Stay in full control of your event ticketing.</p>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
