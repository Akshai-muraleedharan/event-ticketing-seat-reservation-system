import { Routes, Route } from "react-router-dom"
import { RootLayout } from "../layouts/RootLayout"
import { NotAuthorizedPage, OrganizerCreateEvent, OrganizerHomePage, OrganizerLogin, OrganizerOtp, OrganizerSignup, RootPage, UserLogin, UserOtp, UserSignup } from "../pages/index"
import { OrganizerLayout } from "../layouts/OrganizerLayout"
import { AuthGaurd } from "../components/authGaurd/AuthGaurd"
import { UserRole } from "../constants/UserRoles"



export const AppRoute = () => {
    return (
        //  public route
        <Routes>
            <Route element={<RootLayout />} >
                <Route path="/" element={<RootPage />} />
                <Route path="/403" element={<NotAuthorizedPage />} />
                <Route path="user">
                    <Route path="login" element={<UserLogin />} />
                    <Route path="signup" element={<UserSignup />} />
                    <Route path="otp-verify" element={<UserOtp />} />
                </Route>
                <Route path="organizer">
                    <Route path="login" element={<OrganizerLogin />} />
                    <Route path="signup" element={<OrganizerSignup />} />
                    <Route path="otp-verify" element={<OrganizerOtp />} />
                </Route>
            </Route>

            <Route element={<AuthGaurd role={UserRole.ORGANIZER} />}>
                <Route path="/organizer" element={<OrganizerLayout />}>
                    <Route index element={<OrganizerHomePage />} />
                    <Route path="create-event" element={<OrganizerCreateEvent />} />
                </Route>
            </Route>

        </Routes>
    )
}
