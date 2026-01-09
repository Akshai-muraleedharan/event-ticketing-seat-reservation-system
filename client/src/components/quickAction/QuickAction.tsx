import { QuickActionCard } from "./QuickActionCard"


export const QuickAction = () => {
    return (
        <section className="bg-base-200">
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-center ">
                Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20">
                <QuickActionCard />
            </div>
        </section>
    )
}
