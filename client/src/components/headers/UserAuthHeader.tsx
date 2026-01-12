import { Link } from 'react-router-dom'
import { useAuthStore } from '../../store'

export const UserAuthHeader = () => {

    const organizerName = useAuthStore((set) => set.user?.fullName)

    const splitFullName = organizerName?.split(" ")[0]
    return (
        <div className="navbar justify-between items-center px-4 py-3 lg:p-8 xl:px-20 bg-base-200 shadow-sm sticky top-0 z-999">
            <Link to={"/user"} className="btn btn-ghost text-xl">EventFlow</Link>

            <div className='flex gap-4'>
                {organizerName && <p>Welcome, {splitFullName}</p>}
            </div>
        </div>
    )
}
