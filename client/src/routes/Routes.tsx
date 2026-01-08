import { Routes, Route } from "react-router-dom"
import { RootLayout } from "../layouts/RootLayout"
import { RootPage, UserLogin } from "../pages/index"

export const AppRoute = () => {
    return (
        //  public route
        <Routes>
            <Route element={<RootLayout />} >
                <Route path="/" element={<RootPage />} />
                <Route path="user">
                    <Route path="login" element={<UserLogin />} />
                </Route>

            </Route >
        </Routes>
    )
}
