

export type UserRole = "admin" | "organizer" | "user"



export interface AuthUser {
    _id: string,
    fullName: string,
    email: string,
    phoneNumber: string,
    roles: UserRole,
    profilePic: string,
    createdAt: string,
    updatedAt: string
}

export interface AuthUserToken {
    accessToken?: string
}


export interface AuthState {
    user: AuthUser | null
    isAuthenticated: boolean
    accessToken: AuthUserToken | null

    loginAuth: (user: AuthUser, accessToken: AuthUserToken) => void

    logOut: () => void
}

export interface CommonState {
    mockPaymentOpen: boolean,

    handleOpenPayment: (payload: boolean) => void
    handleClosePayment: (payload: boolean) => void
}