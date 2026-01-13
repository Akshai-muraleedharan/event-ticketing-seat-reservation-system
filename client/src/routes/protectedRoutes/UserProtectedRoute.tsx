import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "../../store"
import type { UserRole } from "../../constants/UserRoles"

type AuthGaurdProps = {
    role: UserRole
}


export const UserProtectedRoute = ({ role }: AuthGaurdProps) => {

    const { isHydrated, user, isAuthenticated } = useAuthStore((state) => state)

    if (!isHydrated) return null


    if (!user && !isAuthenticated) {
        return (<Navigate to={`/user/login`} replace />)

    }

    if (role && user?.roles !== role) {
        return <Navigate to={"/403"} replace />
    }



    return <Outlet />
}
