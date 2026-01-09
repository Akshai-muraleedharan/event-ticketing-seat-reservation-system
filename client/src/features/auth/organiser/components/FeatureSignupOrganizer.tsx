
import { AuthSplitLayout } from '../../components/AuthSplitLayout'
import { SignupFormOrganizer } from './SignupFormOrganizer'

export const FeatureSignupOrganizer = () => {
    return (
        <AuthSplitLayout
            title="Become an Event Organizer"
            subTitle=" Create, manage, and grow your events with EventFlow."
            features={[
                "Launch events in minutes",
                "Control ticket types, pricing, and limits",
                "Monitor sales and audience engagement",
                "Access real-time event analytics"
            ]}
        >
            <SignupFormOrganizer />
        </AuthSplitLayout>
    )
}
