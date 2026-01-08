import { Link, useNavigate } from 'react-router-dom'
import { useForm, type SubmitHandler } from "react-hook-form"
import type { RegisterInput } from '../types/userTypes'
import { useUserSignin } from '../hooks/useUserSignin'
import { toast } from 'react-toastify'

export const SignupForm = () => {

    const { register, handleSubmit, reset } = useForm<RegisterInput>()

    const { signIn, isLoading } = useUserSignin()

    const navigate = useNavigate()

    const onSubmit: SubmitHandler<RegisterInput> = async (data) => {
        try {
            const response = await signIn(data);

            toast.success("User Created Successfully")

            if (response?.success) {
                navigate("/user/otp-verify", { replace: true })
            }

            reset()
        } catch (error: any) {
            toast.error(
                error?.response?.data?.errors?.body[0] || error?.response?.data?.message || "Something went wrong"
            )
        }

    }


    return (
        <div className="card bg-base-100 w-full mx-auto h-[60vh] max-w-sm shrink-0 shadow-2xl">
            <div className="card-body flex justify-evenly ">
                <form onSubmit={handleSubmit(onSubmit)} className="fieldset ">
                    <label className="label">User Name</label>
                    <input type="text" {...register("fullName")} className="input" placeholder="Username" />

                    <label className="label">Email</label>
                    <input type="email" {...register("email")} className="input" placeholder="Email" />

                    <label className="label">Mobile Number</label>
                    <input type="text" {...register("phoneNumber")} className="input" placeholder="Mobile Number" />

                    <label className="label">Password</label>
                    <input type="password" {...register("password")} className="input" placeholder="Password" />

                    <div className="flex justify-between mt-2">
                        <p>
                            You have an account?{" "}
                            <Link to={"/user/login"} className="text-blue-400 ml-1">
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
