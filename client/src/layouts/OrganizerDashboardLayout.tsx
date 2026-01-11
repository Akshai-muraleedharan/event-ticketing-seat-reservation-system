import React from 'react'
import { SideBar } from '../components/sidebar/SideBar'
import { DashBoardTopHeader } from '../components/headers/DashBoardTopHeader'
import { Outlet } from 'react-router-dom'

export const OrganizerDashboardLayout = () => {
    return (
        <div className='flex h-screen'>
            <SideBar />
            <div className='flex flex-1 flex-col'>
                <DashBoardTopHeader />

                <main className='p-6 flex-1 overflow-y-auto'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
