
import { FeatureSectionCard } from './FeatureSectionCard'

export const FeatureSection = () => {
    return (
        <section className='bg-base-200'>
            <div className='px-6 text-center mb-20'>
                <h2 className='text-4xl font-poppins font-bold'>Built for every one</h2>

                <p className="text-lg text-base-content/80 max-w-2xl mx-auto mt-5">
                    EventFlow helps users discover events and organizers create, manage,
                    and promote them with ease — all in one powerful platform.
                </p>
            </div>
            <FeatureSectionCard />


        </section>
    )
}
