import React from 'react'

export const NotAuthorizedPage = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div>
                <h1 className="text-4xl font-bold">403</h1>
                <p className="mt-2 text-lg">
                    You don’t have permission to access this page.
                </p>
            </div>
        </div>
    )
}
