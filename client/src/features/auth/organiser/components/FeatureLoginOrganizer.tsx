import { AuthSplitLayout } from '../../components/AuthSplitLayout'
import { LoginFormOrganizer } from './LoginFormOrganizer'

export const FeatureLoginOrganizer = () => {
    return (
        <AuthSplitLayout
            title=" Welcome Back, Organizer"
            subTitle="Sign in to manage your events and track performance."
            features={[
                "Create and publish events with ease",
                "Manage ticket pricing and availability",
                "Track registrations and attendee insights",
                "Secure access to your organizer dashboard"
            ]}
        >
            <LoginFormOrganizer />
        </AuthSplitLayout>
    )
}
