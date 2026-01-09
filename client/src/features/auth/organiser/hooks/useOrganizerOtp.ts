import { useState } from "react"
import type { otpInput } from "../types/organizerTypes"
import { AxiosInstance } from "../../../../lib/axiosInstance"


export const useOrganizerOtp = () => {
    const [isLoading, setLoading] = useState<boolean>(false)


    const otpVerify = async (data: otpInput) => {
        try {
            setLoading(true)
            const res = await AxiosInstance.post("/organizer/verify-otp", data)

            return res?.data
        } catch (error: any) {
            throw error
        } finally {
            setLoading(false)
        }
    }
    return { otpVerify, isLoading }
}
