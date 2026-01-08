import { Link } from "react-router-dom"


export const RootHeader = () => {
    return (
        <div className="navbar px-4 py-3 md:px-6 lg:px-8 bg-base-200 shadow-sm sticky top-0">
            <Link to={"/"} className="btn btn-ghost text-xl">EventFlow</Link>
        </div>
    )
}
