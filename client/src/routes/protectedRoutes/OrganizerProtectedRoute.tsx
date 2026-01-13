import { Navigate, Outlet, } from "react-router-dom"
import type { UserRole } from "../../constants/UserRoles"
import { useAuthStore } from "../../store/useAuthStore"

type AuthGaurdProps = {
    role: UserRole
}


export const OrganizerProtectedRoute = ({ role }: AuthGaurdProps) => {

    const { isHydrated, user, isAuthenticated } = useAuthStore((state) => state)

    if (!isHydrated) return null


    if (!user && !isAuthenticated) {
        return (<Navigate to={`/organizer/login`} replace />)

    }

    if (role && user?.roles !== role) {
        return <Navigate to={"/403"} replace />
    }

    console.log(user, role)

    return <Outlet />
}