import { Navigate, Outlet, useLocation, } from "react-router-dom"
import type { UserRole } from "../../constants/UserRoles"
import { useAuthStore } from "../../store/useAuthStore"

type AuthGaurdProps = {
    role: UserRole
}


export const AuthGaurd = ({ role }: AuthGaurdProps) => {

    const { user, isAuthenticated } = useAuthStore((state) => state)

    const location = useLocation()


    const routePath = location.pathname.replace("/", "")




    if (!user && !isAuthenticated) {
        return (<Navigate to={`${routePath}/login`} replace state={{ from: location }} />)

    }

    if (role && user?.roles !== role) {
        return <Navigate to={"/403"} replace />
    }



    return <Outlet />
}