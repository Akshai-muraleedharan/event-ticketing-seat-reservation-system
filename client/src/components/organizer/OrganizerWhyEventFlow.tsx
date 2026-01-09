

export const OrganizerWhyEventFlow = () => {
    return (
        <section className="bg-base-200 pb-20">
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-center mt-38">
                Why EventFlow
            </h2>


            <p className="text-lg text-base-content/80 max-w-2xl mx-auto mt-5 mb-10 font-inter">
                EventFlow is designed specifically for event organizers who want simplicity without sacrificing control.
            </p>

            <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-3 ">
                <div className="card w-full bg-base-100 card-lg shadow-sm">
                    <div className="card-body">
                        <p className="font-inter leading-7 tracking-wide text-[14px]">
                            Create and publish events in minutes using powerful tools designed to simplify ticketing and registration management. Everything you need to organize your event is available in one intuitive platform, saving you time and effort.
                        </p>
                    </div>
                </div>

                <div className="card w-full bg-base-100 card-lg shadow-sm">
                    <div className="card-body">

                        <p className="font-inter leading-7 tracking-wide text-[14px]">
                            Track attendees with real-time insights and stay in full control at every stage of your event. EventFlow is built for organizers managing conferences, workshops, fests, and many other event types with ease and confidence.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
