import { Routes, Route } from "react-router-dom"
import { RootLayout } from "../layouts/RootLayout"
import { NotAuthorizedPage, OrganizerCreateEvent, OrganizerDashboardCreateEvent, OrganizerEvent, OrganizerEventDetail, OrganizerHomePage, OrganizerLogin, OrganizerOtp, OrganizerSignup, RootEventSinglePage, RootPage, UserEventRegister, UserEventSeatLayout, UserEventSinglePage, UserHomePage, UserLogin, UserOtp, UserSignup } from "../pages/index"
import { OrganizerLayout } from "../layouts/OrganizerLayout"
import { UserRole } from "../constants/UserRoles"
import { OrganizerProtectedRoute } from "./protectedRoutes/OrganizerProtectedRoute"
import { OrganizerDashboardLayout } from "../layouts/OrganizerDashboardLayout"
import { UserProtectedRoute } from "./protectedRoutes/UserProtectedRoute"
import { UserLayout } from "../layouts/UserLayout"



export const AppRoute = () => {
    return (
        //  public route
        <Routes>
            <Route element={<RootLayout />} >
                <Route path="/" element={<RootPage />} />
                <Route path="/403" element={<NotAuthorizedPage />} />
                <Route path="event/:id" element={<RootEventSinglePage />} />
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

            <Route element={<OrganizerProtectedRoute role={UserRole.ORGANIZER} />}>
                <Route path="/organizer" element={<OrganizerLayout />}>
                    <Route index element={<OrganizerHomePage />} />
                    <Route path="create-event" element={<OrganizerCreateEvent />} />
                </Route>
            </Route>

            <Route element={<OrganizerProtectedRoute role={UserRole.ORGANIZER} />} >
                <Route path="dashboard" element={<OrganizerDashboardLayout />}>
                    <Route path="create-event" element={<OrganizerDashboardCreateEvent />} />
                    <Route path="events" element={<OrganizerEvent />} />
                    <Route path="event/:id" element={<OrganizerEventDetail />} />
                </Route >
            </Route>

            <Route element={<UserProtectedRoute role={UserRole.USER} />}>
                <Route path="/user" element={<UserLayout />}>
                    <Route index element={<UserHomePage />} />
                    <Route path="event/:id" element={<UserEventSinglePage />} />
                    <Route path="event/:id/register" element={<UserEventRegister />} />
                    <Route path="event/:id/seat" element={<UserEventSeatLayout />} />

                </Route>
            </Route>

        </Routes >
    )
}
