import { useState } from "react"
import { axiosInstance } from "../../../../lib/axiosInstance"


export const useUserLogout = () => {
    const [isLoading, setLoading] = useState<boolean>(false)


    const userLogout = async () => {
        try {
            setLoading(true)
            const res = await axiosInstance.post("/user/logout")

            return res?.data
        } catch (error: any) {
            throw error
        } finally {
            setLoading(false)
        }
    }
    return { userLogout, isLoading }
}
