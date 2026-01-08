import { AuthFeature } from "../../../../components/shared/AuthFeature"
import { LoginForm } from "./LoginForm"


export const FeatureLoginUser = () => {
    return (
        <div className="min-h-screen justify-center items-center  grid grid-cols-1 lg:grid-cols-2">
            <AuthFeature />
            <LoginForm />
        </div>
    )
}
