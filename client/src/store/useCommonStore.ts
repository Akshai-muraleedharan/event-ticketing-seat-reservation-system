import { create } from "zustand"
import { devtools } from "zustand/middleware"
import type { CommonState } from "./interface/interface"

export const useCommonStore = create<CommonState>()((
    devtools((set) => ({
        mockPaymentOpen: false,

        handleOpenPayment: (payload) => set({
            mockPaymentOpen: payload
        }),
        handleClosePayment: (payload) => set({
            mockPaymentOpen: payload
        })
    }))
))