import { useState } from "react"
import { axiosInstance } from "../../../../lib/axiosInstance"
import type { LoginInputs } from "../types/organizerTypes"
import { useAuthStore } from "../../../../store"


export const useOrganizerLogin = () => {

    const { loginAuth } = useAuthStore()
    const [isLoading, setLoading] = useState<boolean>(false)

    const login = async (data: LoginInputs) => {
        try {
            setLoading(true)
            const res = await axiosInstance.post("/organizer/login", data)
            loginAuth(res?.data?.data, res?.data?.accessToken)

            return res?.data

        } catch (error: any) {
            throw error
        } finally {
            setLoading(false)
        }
    }

    return { login, isLoading }
}
