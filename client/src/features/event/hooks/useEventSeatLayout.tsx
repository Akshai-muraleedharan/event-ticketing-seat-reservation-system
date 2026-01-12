import React, { useState } from 'react'
import { axiosInstance } from '../../../lib/axiosInstance'
import { useParams } from 'react-router-dom'

export const useEventSeatLayout = () => {
    const [isLoading, setLoading] = useState<boolean>(false)

    const params = useParams()

    const getSeats = async () => {
        try {
            setLoading(true)
            const res = await axiosInstance.get(`/seat/event/${params.id}`)

            return res?.data

        } catch (error: any) {
            throw error
        } finally {
            setTimeout(() => {
                setLoading(false)
            }, 800)
        }
    }

    return { isLoading, getSeats, }
}
