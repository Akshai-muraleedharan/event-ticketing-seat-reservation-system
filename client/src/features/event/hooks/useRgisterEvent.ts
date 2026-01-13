import React, { useState } from 'react'
import type { BookingFormData } from '../types/eventTypes'
import { axiosInstance } from '../../../lib/axiosInstance'

export const useRgisterEvent = () => {
    const [isLoading, setLoading] = useState<boolean>(false)


    const createEvent = async (data: BookingFormData) => {
        try {
            setLoading(true)
            const res = await axiosInstance.post("/event", data)
            return res?.data

        } catch (error: any) {
            throw error
        } finally {
            setLoading(false)
        }
    }

    return { isLoading, createEvent }
}
