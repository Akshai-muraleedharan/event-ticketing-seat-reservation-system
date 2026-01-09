import { Link } from "react-router-dom"


export const QuickActionCard = () => {
    return (

        <>
            <Link to={""} className="card w-full lg:w-56 p-5 bg-base-100 card-xs shadow-sm hover:shadow-lg transition-shadow">
                <div className="card-body text-center font-inter">
                    <h3 className="font-semibold text-lg">Create Event</h3>
                    <p className="text-sm text-base-content/70 mt-2">
                        Start a new event quickly
                    </p>
                </div>
            </Link>

            <Link to={""} className="card w-full md:w-56 p-5 bg-base-100 card-xs shadow-sm hover:shadow-lg transition-shadow">
                <div className="card-body text-center font-inter">
                    <h3 className="font-semibold text-lg">My Event</h3>
                    <p className="text-sm text-base-content/70 mt-2">
                        View all your events
                    </p>
                </div>
            </Link>
            <Link to={""} className="card w-full md:w-56 p-5 bg-base-100 card-sm shadow-sm hover:shadow-lg transition-shadow">
                <div className="card-body text-center font-inter">
                    <h3 className="font-semibold text-lg">Tickets</h3>
                    <p className="text-sm text-base-content/70 mt-2">
                        Manage ticket sales
                    </p>
                </div>
            </Link>
            <Link to={""} className="card w-full md:w-56 p-5 bg-base-100 card-sm shadow-sm hover:shadow-lg transition-shadow">
                <div className="card-body text-center font-inter">
                    <h3 className="font-semibold text-lg">Create Event</h3>
                    <p className="text-sm text-base-content/70 mt-2">
                        Start a new event quickly
                    </p>
                </div>
            </Link>
            <Link to={""} className="card w-full md:w-56 p-5 bg-base-100 card-sm shadow-sm hover:shadow-lg transition-shadow">
                <div className="card-body text-center font-inter">
                    <h3 className="font-semibold text-lg">Attendees</h3>
                    <p className="text-sm text-base-content/70 mt-2">
                        Track registrations
                    </p>
                </div>
            </Link>


        </>
    )
}
