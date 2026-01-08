import { AuthSplitLayout } from "../../components/AuthSplitLayout"
import { SignupForm } from "./SignupForm"


export const FeatureSignupUser = () => {
    return (
        <AuthSplitLayout
            title="Join EventFlow Today"
            subTitle="Create your account and start discovering amazing events around you."
            features={[
                "Discover and book events effortlessly",
                "Get personalized event recommendations",
                "Access digital tickets with QR code entry",
                " Stay updated with upcoming events"
            ]}
        >
            <SignupForm />
        </AuthSplitLayout>

    )
}
