import { HeroContent } from "../components/hero/HeroContent"
import { OrganizerWhyEventFlow } from "../components/organizer/OrganizerWhyEventFlow"
import { QuickAction } from "../components/quickAction/QuickAction"


export const OrganizerHomePage = () => {
    return (
        <>
            <HeroContent
                title="Welcome to EventFlow"
                subTitle="Create and manage your events, tickets, and attendees with ease."
                primaryAction={{
                    label: " Create Event",
                    to: ""
                }}
                secondaryAction={{
                    label: "View Events",
                    to: ""
                }}

            />

            <QuickAction />
            <OrganizerWhyEventFlow />
        </>
    )
}
