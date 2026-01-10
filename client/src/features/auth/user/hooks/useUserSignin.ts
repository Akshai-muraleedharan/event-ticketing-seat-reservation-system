import { useState } from "react"
import { axiosInstance } from "../../../../lib/axiosInstance"
import type { RegisterInput } from "../types/userTypes"

export const useUserSignin = () => {
    const [isLoading, setLoading] = useState<boolean>(false)

    const signIn = async (data: RegisterInput) => {
        try {
            setLoading(true)
            const res = await axiosInstance.post("/user/register", data)


            return res?.data
        } catch (error: any) {
            throw error
        } finally {
            setLoading(false)
        }
    }

    return {
        signIn,
        isLoading
    }
}