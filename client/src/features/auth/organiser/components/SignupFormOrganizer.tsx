import { useForm, type SubmitHandler } from "react-hook-form"
import type { RegisterInput } from "../types/organizerTypes"
import { useOrganizerSignin } from "../hooks/useOrganizerSignin"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"

export const SignupFormOrganizer = () => {

    const { register, handleSubmit, reset } = useForm<RegisterInput>()

    const { signIn, isLoading } = useOrganizerSignin()

    const navigate = useNavigate()

    const onSubmit: SubmitHandler<RegisterInput> = async (data) => {
        try {
            const response = await signIn(data);

            toast.success("User Created Successfully")

            if (response?.success) {
                navigate("/organizer/otp-verify", { replace: true })
            }

            reset()
        } catch (error: any) {
            toast.error(
                error?.response?.data?.errors?.body[0] || error?.response?.data?.message || "Something went wrong"
            )
        }
    }

    return (
        <div className="card bg-base-100 w-full mx-auto h-[65vh] max-w-sm shrink-0 shadow-2xl">
            <div className="card-body flex justify-evenly ">
                <p className="font-medium">Signin</p>
                <form onSubmit={handleSubmit(onSubmit)} className="fieldset ">
                    <label className="label">User Name</label>
                    <input type="text" {...register("fullName")} className="input" placeholder="Full Name" />

                    <label className="label">Email</label>
                    <input type="email" {...register("email")} className="input" placeholder="Email" />

                    <label className="label">Mobile Number</label>
                    <input type="text"  {...register("phoneNumber")} className="input" placeholder="Mobile Number" />

                    <label className="label">Password</label>
                    <input type="password"  {...register("password")} className="input" placeholder="Password" />

                    <div className="flex justify-between mt-2">
                        <p>
                            You have an account?{" "}
                            <Link to={"/organizer/login"} className="text-blue-500 ml-1 font-medium tracking-wider">
                                Login
                            </Link>
                        </p>

                    </div>
                    <button disabled={isLoading} className="btn btn-neutral mt-5 disabled:cursor-not-allowed disabled:opacity-70">{isLoading ? "Signing in..." : "Signin"}</button>
                </form>
            </div>
        </div>
    )
}
