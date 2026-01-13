import { Outlet } from "react-router-dom"
import { RootHeader } from "../components/headers/RootHeader"


export const RootLayout = () => {
    return (
        <div className="bg-base-200 min-h-screen flex flex-col">
            <RootHeader />
            <main className="base-100 max-w-7xl mx-auto w-full p-4 md:p-6  lg:p-8 xl:p-10">
                <Outlet />
            </main>
        </div>
    )
}
