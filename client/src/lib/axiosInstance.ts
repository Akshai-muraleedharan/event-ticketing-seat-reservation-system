import axios, { type InternalAxiosRequestConfig } from "axios"
import { useAuthStore } from "../store"


export const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1`,
    withCredentials: true
})

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const accessToken = useAuthStore.getState().accessToken
    if (accessToken && config.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
})