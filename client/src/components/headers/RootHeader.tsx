import { Link } from "react-router-dom"


export const RootHeader = () => {
    return (
        <div className="navbar px-4 py-3 lg:p-8 xl:px-20 bg-base-200 shadow-sm sticky top-0 z-999">
            <Link to={"/"} className="btn btn-ghost text-xl">EventFlow</Link>
        </div>
    )
}
