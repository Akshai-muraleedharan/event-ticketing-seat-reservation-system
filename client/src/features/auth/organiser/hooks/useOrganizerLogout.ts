import { useState } from "react"
import { axiosInstance } from "../../../../lib/axiosInstance"


export const useOrganizerLogout = () => {
    const [isLoading, setLoading] = useState<boolean>(false)


    const organizerLogout = async () => {
        try {
            setLoading(true)
            const res = await axiosInstance.post("/organizer/logout")

            return res?.data
        } catch (error: any) {
            throw error
        } finally {
            setLoading(false)
        }
    }
    return { organizerLogout, isLoading }
}
