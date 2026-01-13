import { create } from "zustand"
import { devtools } from "zustand/middleware"
import type { AuthState } from "./interface/interface"



export const useAuthStore = create<AuthState>()(
    devtools((set) => ({
        user: null,
        isAuthenticated: false,
        accessToken: null,
        isHydrated: false,

        loginAuth: (user, token) => set({
            user: user,
            isAuthenticated: true,
            accessToken: token
        }),

        logOut: () => set({
            user: null,
            isAuthenticated: false,
            accessToken: null,
        }),
        setHydrated: () => set({
            isHydrated: true,
        })

    }))
)