import type { ReactNode } from "react"

type AuthLoayoutProps = {
    title?: string,
    subTitle?: string,
    features?: string[],
    children: ReactNode
}

export const AuthSplitLayout = ({ title, subTitle, features = [], children }: AuthLoayoutProps) => {

    const featureData = features.map((feature, index) => (


        <li className="flex gap-2 justify-start rounded-full items-start" key={index} >
            <span className="mt-2 h-2.5 w-2.5 bg-primary rounded-sm shrink-0"></span>
            {feature}
        </li>

    ))

    return (
        <div className="min-h-[70vh] grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
            <div className='hidden lg:flex flex-col justify-centers px-16 bg-base-200'>
                <h1 className='text-4xl font-poppins font-bold mb-4'>
                    {title}
                </h1>

                <p className='text-lg font-inter text-base-content/70 mb-6'>
                    {subTitle}
                </p>

                <ul className='space-y-3 text-base-content/80'>
                    {featureData}
                </ul>
            </div>
            <>
                {children}
            </>

        </div>
    )
}
