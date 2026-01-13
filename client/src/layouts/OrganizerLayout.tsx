import { Outlet } from "react-router-dom"
import { OrganizerAuthHeader } from "../features/auth/organiser/components/OrganizerAuthHeader"
import { Footer } from "../components/footer/Footer"


export const OrganizerLayout = () => {
    return (
        <div className="bg-base-200 min-h-screen flex flex-col">
            <OrganizerAuthHeader />
            <main className="base-100 max-w-7xl mx-auto w-full p-4 md:p-6  lg:p-8 xl:p-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}