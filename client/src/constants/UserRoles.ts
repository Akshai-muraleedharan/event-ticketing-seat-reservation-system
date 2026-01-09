export const UserRole = {
    USER: "user",
    ORGANIZER: "organizer",
    ADMIN: "admin",
} as const

export type UserRole = typeof UserRole[keyof typeof UserRole]
