import { FeatureSection } from "../components/features/FeatureSection"
import { HeroContent } from "../components/hero/HeroContent"


export const RootPage = () => {
    return (
        <>
            <HeroContent
                title="Welcome to EventFlow"
                subTitle="Plan, create, and manage your events effortlessly. Organize conferences, school fests, workshops, and more — all in one place."
                bookButton="/user/login"
            />

            <FeatureSection />
        </>
    )
}
