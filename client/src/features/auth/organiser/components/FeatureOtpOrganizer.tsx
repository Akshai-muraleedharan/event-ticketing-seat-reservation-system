
import { OtpForm } from '../../components/OtpForm'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useOrganizerOtp } from '../hooks/useOrganizerOtp'

type OtpFormValue = {
    otp: string
}

export const FeatureOtpOrganizer = () => {

    const { otpVerify } = useOrganizerOtp()
    const { control, handleSubmit } = useForm<OtpFormValue>({ defaultValues: { otp: "" } })

    const navigate = useNavigate()

    const onSubmit = async (data: OtpFormValue) => {
        try {
            await otpVerify(data);

            navigate("/organizer/login", { replace: true })
            toast.success("Account verified successfully")

        } catch (error: any) {
            toast.error(
                error?.response?.data?.errors?.body[0] || error?.response?.data?.message || "Something went wrong"
            )
        }

    }
    return (
        <div className="flex justify-center  flex-col  text-center ">
            <div className="max-w-xl w-full mx-auto">
                <h2 className="text-2xl font-heading font-semibold">
                    Verify OTP
                </h2>

                <p className="text-sm text-base-content/70 my-5">
                    Enter the 6-digit code sent to your email
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="otp"
                        control={control}
                        render={({ field }) => (
                            <OtpForm value={field.value} length={6} onChange={(val) => { field.onChange(val) }} />
                        )}
                    />
                    <button
                        className="btn btn-primary  w-1/2 mt-5"

                    >
                        Verify
                    </button>
                </form>
            </div>
        </div>
    )
}
