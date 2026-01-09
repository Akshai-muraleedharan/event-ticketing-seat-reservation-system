import { useState } from "react"
import type { RegisterInput } from "../types/organizerTypes"
import { AxiosInstance } from "../../../../lib/axiosInstance"


export const useOrganizerSignin = () => {
    const [isLoading, setLoading] = useState<boolean>(false)

    const signIn = async (data: RegisterInput) => {
        try {
            setLoading(true)
            const res = await AxiosInstance.post("/organizer/register", data)


            return res?.data
        } catch (error: any) {
            throw error
        } finally {
            setLoading(false)
        }
    }


    return { signIn, isLoading }
}
