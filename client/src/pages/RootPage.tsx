import { FeatureSection } from "../components/features/FeatureSection"
import { HeroContent } from "../components/hero/HeroContent"
import { EventFeatureSection } from "../features"


export const RootPage = () => {
    return (
        <>
            <HeroContent
                title="Welcome to EventFlow"
                subTitle="Plan, create, and manage your events effortlessly. Organize conferences, school fests, workshops, and more — all in one place."
                primaryAction={{
                    label: "Book Ticket",
                    to: "/user/login"
                }}
                secondaryAction={{
                    label: "Create Event",
                    to: "/organizer/login"
                }}
            />

            <EventFeatureSection />
            <FeatureSection />

        </>
    )
}
