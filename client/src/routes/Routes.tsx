import { Routes, Route } from "react-router-dom"
import { RootLayout } from "../layouts/RootLayout"
import { OrganizerLogin, RootPage, UserLogin, UserOtp, UserSignup } from "../pages/index"

export const AppRoute = () => {
    return (
        //  public route
        <Routes>
            <Route element={<RootLayout />} >
                <Route path="/" element={<RootPage />} />
                <Route path="user">
                    <Route path="login" element={<UserLogin />} />
                    <Route path="signup" element={<UserSignup />} />
                    <Route path="otp-verify" element={<UserOtp />} />
                </Route>
                <Route path="organizer">
                    <Route path="login" element={<OrganizerLogin />} />
                </Route>
            </Route >
        </Routes>
    )
}
