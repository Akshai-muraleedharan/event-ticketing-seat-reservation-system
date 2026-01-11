import React, { useState } from 'react'
import { axiosInstance } from '../../../lib/axiosInstance'
import type { EventCreateInput } from '../types/eventTypes'

export const useEvent = () => {
    const [isLoading, setLoading] = useState<boolean>(false)

    const createEvent = async (data: EventCreateInput) => {
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
