import React, { useState } from 'react'
import { axiosInstance } from '../../../lib/axiosInstance'
import { useParams } from 'react-router-dom'


export const useSingleEvent = () => {
    const [isLoading, setLoading] = useState<boolean>(false)

    const params = useParams()

    const getEvent = async () => {
        try {
            setLoading(true)
            const res = await axiosInstance.get(`/event/${params.id}`)

            return res?.data

        } catch (error: any) {
            throw error
        } finally {
            setTimeout(() => {
                setLoading(false)
            }, 800)
        }
    }

    return { isLoading, getEvent, }
}
