import { faHashtag, faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export const SideNavBar = () => {
    return (
        <header className="text-gray-800 py-4 h-auto max-lg:col-span-2">
                <div className="overflow-y-auto h-auto px-3">
                    {/* Nav*/}
                    <nav className="mt-5 p-2 max-lg:flex max-sm:flex-col justify-center">
                        <Link
                            to="/"
                            className="group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-indigo-500 hover:text-white"
                        >
                           <FontAwesomeIcon icon={faHome} className="mr-4 h-6 w-6"/>
                            Home
                        </Link>
                        <Link
                            to="/greenies/explore"
                            className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-indigo-500 hover:text-white"
                        >
                           <FontAwesomeIcon icon={faHashtag} className="mr-4 h-6 w-6"/>
                            Explore
                        </Link>
                        
                        <button className="m-2 px-10 py-2 text-white bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 rounded-full hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                            Greenit
                        </button>
                    </nav>
                </div>
        </header>

    )
}