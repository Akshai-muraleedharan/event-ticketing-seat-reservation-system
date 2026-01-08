// import { useForm, SubmitHandler } from "react-hook-form"

export const LoginForm = () => {

    type Inputs = {
        email: string,
        password: string
    }

    return (
        <>

            <div className="card bg-base-100 w-full mx-auto h-[50vh] max-w-sm shrink-0 shadow-2xl">
                <div className="card-body flex justify-center ">
                    <fieldset className="fieldset ">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </div>
            </div>
        </>
    )
}
