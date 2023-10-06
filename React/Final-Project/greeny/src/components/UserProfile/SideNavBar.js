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
                        {/* <a
                            href="/"
                            className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-indigo-500 hover:text-white"
                        >
                            <svg
                                className="mr-4 h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                            </svg>
                            Notifications
                        </a>
                        <a
                            href="/"
                            className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-indigo-500 hover:text-white"
                        >
                            <svg
                                className="mr-4 h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            Messages
                        </a>
                        <a
                            href="/"
                            className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-indigo-500 hover:text-white"
                        >
                            <svg
                                className="mr-4 h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            Bookmarks
                        </a>
                        <a
                            href="/"
                            className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-indigo-500 hover:text-white"
                        >
                            <svg
                                className="mr-4 h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                            </svg>
                            Lists
                        </a>
                        <a
                            href="/"
                            className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-indigo-500 hover:text-white"
                        >
                            <svg
                                className="mr-4 h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Profile
                        </a>
                        <a
                            href="/"
                            className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-indigo-500 hover:text-white"
                        >
                            <svg
                                className="mr-4 h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            More
                        </a> */}
                        <button className="m-2 px-10 py-2 text-white bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 rounded-full hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                            Greenit
                        </button>
                    </nav>
                </div>
        </header>

    )
}