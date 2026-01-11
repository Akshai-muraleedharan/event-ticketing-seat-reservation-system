import { useForm, type SubmitHandler } from "react-hook-form"
import type { EventCreateInput } from "../types/eventTypes"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useCreateEvent } from "../hooks/useCreateEvent"
import { useNavigate } from "react-router-dom"




export const EventCreateForm = () => {

    const [isTicket, setIsTicket] = useState<boolean>(false)

    const { register, handleSubmit, watch, reset } = useForm<EventCreateInput>()

    const { createEvent, isLoading } = useCreateEvent()

    const navigate = useNavigate()

    const onSubmit: SubmitHandler<EventCreateInput> = async (data) => {
        try {
            const response = await createEvent(data)
            toast.success("Event create successfully")
            navigate("/organizer")

            reset()
        } catch (error: any) {

            toast.error(
                error?.response?.data?.errors?.body[0] || error?.response?.data?.message || "Something went wrong"
            )
        }

    }

    const bookingType = watch("bookingType")

    console.log(isTicket);

    useEffect(() => {
        if (!bookingType) return

        if (bookingType === "ticket") {
            setIsTicket(true)
        } else {
            setIsTicket(false)
        }

    }, [bookingType])

    return (
        <form className='w-full md:w-[80%] md:mx-auto' onSubmit={handleSubmit(onSubmit)}>
            <fieldset className='grid grid-cols-1  gap-2'>
                <legend className="fieldset-legend">Event Name</legend>
                <input type="text" {...register("eventName")} placeholder="Rock Night 2026, Tech Conference Kerala" className="input w-full input-primary" />
            </fieldset>

            <fieldset className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
                <div>
                    <legend className="fieldset-legend">Venue</legend>
                    <input type="text" {...register("venue")} placeholder="City Auditorium / College Campus" className="input w-full input-primary" />
                </div>
                <div>
                    <legend className="fieldset-legend">Venue Address</legend>
                    <input type="text" {...register("venueAddress")} placeholder="Eg: MG Road, Kochi, Kerala – 682016" className="input w-full input-primary" />
                </div>
            </fieldset >

            <fieldset className="mt-5">
                <legend className="fieldset-legend">Description</legend>
                <textarea {...register("description")} placeholder="Describe your event. Include purpose, schedule, key highlights, and what attendees can expect." className="textarea textarea-primary w-full"></textarea>
            </fieldset>

            <fieldset className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
                <div>
                    <legend className="fieldset-legend">Event Capacity</legend>
                    <input type="text" {...register("capacity")} placeholder="Enter maximum attendees" className="input w-full input-primary" />
                </div>

                <div>
                    <legend className="fieldset-legend">PosterImage</legend>
                    <input type="file" {...register("posterImage")} className="file-input file-input-primary w-full" />
                </div>
            </fieldset>

            <fieldset className='grid grid-cols-1  gap-4 mt-5'>
                <div>
                    <legend className="fieldset-legend">Event Category</legend>
                    <select {...register("category")} defaultValue="Select" className="select select-primary w-full">
                        <option disabled={true}>Select</option>
                        <option>conference</option>
                        <option>movie</option>
                        <option>college_fest</option>
                        <option>other</option>
                    </select>
                </div>

                <div>
                    <legend className="fieldset-legend">Event Booking Type</legend>
                    <select {...register("bookingType")} defaultValue="Select" className="select select-primary w-full">
                        <option disabled={true}>Select</option>
                        <option value={"ticket"}>Ticket</option>
                        <option value={"pass"}>Pass</option>
                    </select>
                </div>
            </fieldset>


            {isTicket && <fieldset className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
                <div>
                    <legend className="fieldset-legend">Ticket Booking Starting Date</legend>
                    <input type="datetime-local" {...register("ticketBookStartDateAndTime", { valueAsDate: true })} className="input w-full input-primary" />
                </div>


                <div>
                    <legend className="fieldset-legend">Ticket Booking Ending Date</legend>
                    <input type="datetime-local" {...register("ticketBookEndDateAndTime", { valueAsDate: true })} className="input w-full input-primary" />
                </div>
            </fieldset>}


            <fieldset className=' mt-5 flex gap-10'>
                <div>
                    <input type="checkbox" {...register("isFree")} defaultChecked className="toggle toggle-xs toggle-primary" />
                    <legend className="fieldset-legend text-sm">Free Show</legend>
                </div>
                <div>
                    <input type="checkbox" {...register("isOpenStage")} defaultChecked className="toggle toggle-xs toggle-primary" />
                    <legend className="fieldset-legend text-sm">Open Stage</legend>
                </div>
                <div>
                    <input type="checkbox" {...register("requiresRegistration")} defaultChecked className="toggle toggle-xs toggle-primary" />
                    <legend className="fieldset-legend text-sm">Require attendee registration</legend>
                </div>
            </fieldset>



            <fieldset className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
                <div>
                    <legend className="fieldset-legend">Event Starting Time</legend>
                    <input type="datetime-local" {...register("startingTime",)} className="input w-full input-primary" />
                </div>


                <div>
                    <legend className="fieldset-legend">Event Ending Time</legend>
                    <input type="datetime-local" {...register("endingTime",)} className="input w-full input-primary" />
                </div>
            </fieldset>

            <fieldset className=' mt-5'>
                <div>
                    <legend className="fieldset-legend">Registration Ending Time</legend>
                    <input type="datetime-local" {...register("registrationDeadLine")} className="input w-full input-primary" />
                </div>
            </fieldset>
            <button className="btn btn-primary mt-10 w-full">Submit</button>
        </form>
    )
}
