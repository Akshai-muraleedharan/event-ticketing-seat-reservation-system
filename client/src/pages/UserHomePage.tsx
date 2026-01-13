import React from 'react'
import { HeroContent } from '../components/hero/HeroContent'
import { useAuthStore } from '../store'
import { EventFeatureSection } from '../features'

export const UserHomePage = () => {

    const organizerName = useAuthStore((set) => set.user?.fullName)

    const splitFullName = organizerName?.split(" ")[0]

    return (
        <>
            <HeroContent
                title={`Welcome back, ${splitFullName}`}
                subTitle="Book movies, events, and live shows with real-time seat selection."
                primaryAction={{
                    label: " Book Tickets",
                    to: "/user"
                }}
                secondaryAction={{
                    label: "My Bookings",
                    to: "/user"
                }}

            />
            <EventFeatureSection />

        </>
    )
}
