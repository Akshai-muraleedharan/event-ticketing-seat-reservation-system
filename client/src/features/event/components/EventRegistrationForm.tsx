import { useState } from "react"
import { useCommonStore } from "../../../store"
import { useForm, } from "react-hook-form"
import type { BookingFormData } from "../types/eventTypes"

export const EventRegistrationForm = () => {


    const { register, reset, handleSubmit } = useForm<BookingFormData>()

    const onSubmit = (data: BookingFormData) => {

        console.log(data);

        handleOpenPayment(true)
    }

    const { handleOpenPayment } = useCommonStore();


    return (
        <form className='w-full md:w-[60%] md:mx-auto' onSubmit={handleSubmit(onSubmit)}>
            <fieldset className='grid grid-cols-1  gap-2'>
                <div>
                    <legend className="fieldset-legend">Full Name</legend>
                    <input {...register("attendeeName")} type="text" placeholder="Full Name" className="input w-full " />
                </div>
                <div>
                    <legend className="fieldset-legend">Email</legend>
                    <input {...register("attendeeEmail")} type="text" placeholder="Email Address" className="input w-full " />
                </div>
                <div>
                    <legend className="fieldset-legend">Phone Number</legend>
                    <input {...register("attendeePhone")} type="tel" placeholder="Phone Number" className="input w-full " />
                </div>
            </fieldset>
            <button disabled={true} className="btn btn-primary mt-10 w-full">Submit</button>
        </form >
    )
}
