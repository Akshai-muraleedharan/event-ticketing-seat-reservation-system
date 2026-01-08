

export const AuthFeature = () => {
    return (
        <div className='hidden lg:flex flex-col justify-centers px-16 bg-base-200'>
            <h1 className='text-4xl font-poppins font-bold mb-4'>
                Welcome Back to EventFlow
            </h1>

            <p className='text-lg font-inter text-base-content/70 mb-6'>
                Discover events, book tickets, and never miss out.
            </p>

            <ul className='space-y-3 text-base-content/80'>
                <li>Book tickets in seconds</li>
                <li>Personalized event recommendations</li>
                <li>Secure and seamless login</li>
            </ul>
        </div>
    )
}
