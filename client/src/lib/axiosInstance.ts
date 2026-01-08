import axios from "axios"


export const AxiosInstance = axios.create({
    baseURL: `${import.meta.env.BACKEND_URL}/api/v1`
})