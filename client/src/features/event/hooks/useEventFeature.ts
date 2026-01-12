import React, { useState } from 'react'
import { axiosInstance } from '../../../lib/axiosInstance'


export const useEventFeature = () => {
    const [isLoading, setLoading] = useState<boolean>(false)


    const getFeturedEvent = async () => {
        try {
            setLoading(true)
            const res = await axiosInstance.get("/event/featured")

            return res?.data

        } catch (error: any) {
            throw error
        } finally {
            setTimeout(() => {
                setLoading(false)
            }, 800)
        }
    }

    return { isLoading, getFeturedEvent, }
}
