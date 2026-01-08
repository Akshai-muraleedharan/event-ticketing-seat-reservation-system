import { useState } from "react"
import { AxiosInstance } from "../../../../lib/axiosInstance"
import type { LoginInputs } from "../types/userTypes"


export const useUserLogin = () => {
    const [isLoading, setLoading] = useState<boolean>(false)

    const login = async (data: LoginInputs) => {
        try {
            setLoading(true)
            const res = await AxiosInstance.post("/user/login", data)


            return res?.data

        } catch (error: any) {
            throw error
        } finally {
            setLoading(false)
        }
    }

    return { login, isLoading }
}
