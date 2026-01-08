import { useState } from "react"
import type { otpInput } from "../types/userTypes"
import { AxiosInstance } from "../../../../lib/axiosInstance"


export const useUserOtp = () => {
    const [isLoading, setLoading] = useState<boolean>(false)


    const otpVerify = async (data: otpInput) => {
        try {
            setLoading(true)
            const res = await AxiosInstance.post("/user/verify-otp", data)

            return res?.data
        } catch (error: any) {
            throw error
        } finally {
            setLoading(false)
        }
    }

    return { otpVerify, isLoading }
}