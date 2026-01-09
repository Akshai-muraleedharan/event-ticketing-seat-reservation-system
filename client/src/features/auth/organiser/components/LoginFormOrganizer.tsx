import { useForm, type SubmitHandler } from "react-hook-form"
import type { LoginInputs } from "../types/organizerTypes"
import { useOrganizerLogin } from "../hooks/useOrganizerLogin"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

export const LoginFormOrganizer = () => {


    const { register, handleSubmit, reset } = useForm<LoginInputs>()

    const { login } = useOrganizerLogin()

    const onSumbit: SubmitHandler<LoginInputs> = async (data) => {
        try {
            await login(data)
            toast.success("User login successfully")
            reset()
        } catch (error: any) {

            toast.error(
                error?.response?.data?.errors?.body[0] || error?.response?.data?.message || "Something went wrong"
            )
        }


    }

    return (
        <>

            <div className="card bg-base-100 w-full mx-auto h-[40vh] max-w-sm shrink-0 shadow-2xl">
                <div className="card-body flex justify-evenly ">
                    <form onSubmit={handleSubmit(onSumbit)} className="fieldset ">
                        <label className="label">Email</label>
                        <input type="email" {...register("email")} className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" {...register("password")} className="input" placeholder="Password" />
                        <div className="flex justify-between mt-2">
                            <p>
                                Don’t have an account?{" "}
                                <Link to={"/organizer/signup"} className="text-blue-400 ml-1">
                                    Sign up
                                </Link>
                            </p>
                            <a className="link link-hover">Forgot password?</a>
                        </div>
                        <button className="btn btn-neutral mt-5 disabled:cursor-not-allowed disabled:opacity-50">{"login"}</button>
                    </form>
                </div>
            </div>
        </>
    )
}
