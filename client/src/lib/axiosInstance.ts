import axios, { AxiosError, type AxiosInstance, type InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from "../store"


const baseURL = import.meta.env.VITE_BACKEND_URL



type FailedRequest = {
    resolve: (token: string) => void;
    reject: (err: AxiosError) => void;
};

let isRefreshing = false;
let failedQueue: FailedRequest[] = [];

const processQueue = (error: AxiosError | null, token: string | null = null) => {
    failedQueue.forEach((prom) => {
        if (token) {
            prom.resolve(token);
        } else {
            prom.reject(error!);
        }
    });
    failedQueue = [];
};

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: `${baseURL}/api/v1`,
    withCredentials: true
})

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const accessToken = useAuthStore.getState().accessToken
    if (accessToken && config.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
})



axiosInstance.interceptors.response.use(
    (res) => res,
    async (err: AxiosError) => {
        const originalRequest = err.config as InternalAxiosRequestConfig & { _retry?: boolean };

        if (err.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({
                        resolve: (token: string) => {
                            if (originalRequest.headers) {
                                originalRequest.headers.Authorization = `Bearer ${token}`;
                            }
                            resolve(axiosInstance(originalRequest));
                        },
                        reject: (error: AxiosError) => {
                            reject(error);
                        },
                    });
                });
            }

            isRefreshing = true;

            try {
                const login = useAuthStore.getState().loginAuth
                const res = await axios.post(
                    `${baseURL}/api/v1/auth/refresh`, {},
                    { withCredentials: true }
                );

                const accessToken = (res.data as { accessToken: string }).accessToken;
                console.log(accessToken);

                // login(res.data?.data, accessToken)

                processQueue(null, accessToken);

                if (originalRequest.headers) {
                    originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                }

                return axiosInstance(originalRequest);
            } catch (refreshErr: any) {
                processQueue(refreshErr, null);
                // deleteLocalStorage("accessToken");
                return Promise.reject(refreshErr);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(err);
    }
);