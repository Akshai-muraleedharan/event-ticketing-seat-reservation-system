import { useState } from "react"
import { AxiosInstance } from "../../../../lib/axiosInstance"
import type { LoginInputs } from "../types/organizerTypes"


export const useOrganizerLogin = () => {
    const [isLoading, setLoading] = useState<boolean>(false)

    const login = async (data: LoginInputs) => {
        try {
            setLoading(true)
            const res = await AxiosInstance.post("/organizer/login", data)


            return res?.data

        } catch (error: any) {
            throw error
        } finally {
            setLoading(false)
        }
    }

    return { login, isLoading }
}
