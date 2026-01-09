
import { AuthSplitLayout } from "../../components/AuthSplitLayout"
import { LoginFormUser } from "./LoginFormUser"


export const FeatureLoginUser = () => {
    return (
        <AuthSplitLayout
            title="Welcome Back to EventFlow"
            subTitle="  Discover events, book tickets, and never miss out."
            features={[
                "Book tickets in seconds",
                "Personalized event recommendations",
                "Secure and seamless login"
            ]}
        >
            <LoginFormUser />
        </AuthSplitLayout>



    )
}
