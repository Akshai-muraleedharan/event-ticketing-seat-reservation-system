import React from 'react'

export const Detail = ({ label, value }: { label: string, value: string }) => {
    return (
        <div>
            <p className='text-sm text-gray-500'>{label}</p>
            <p className='font-medium'>{value}</p>
        </div>
    )
}
