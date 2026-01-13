
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/footer/Footer'
import { UserAuthHeader } from '../features'
import { useEffect } from 'react'


export const UserLayout = () => {



    return (
        <div className="bg-base-200 min-h-screen flex flex-col items-center justify-center">
            <UserAuthHeader />
            <main className="base-100 max-w-7xl mx-auto  w-full p-4 md:p-6  lg:p-8 xl:p-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
