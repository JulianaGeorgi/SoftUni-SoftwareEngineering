import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer className="bg-alice-blue dark:bg-gray-900">
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                        <div className="sm:col-span-2">
                            <h1 className="mt-0 max-w-lg text-2xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                                Join & get inspired
                            </h1>
                            <h2 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                                Receive weekly greenies that can inspire you to make an impact.
                            </h2>
                            <div className="flex flex-col gap-2 mx-auto my-6 space-y-3 md:space-y-0 md:flex-row">
                                <input
                                    id="newsLetterEmail"
                                    type="text"
                                    className="w-1/2 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                    placeholder="Email Address"
                                />
                                <button className="w-2/5 bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600">
                                    Subscribe
                                </button>

                            </div>
                            <p className="text-xs">By clicking 'Sign Up', you consent to Greeny using your email address to receive emails about initiatives, events, greenies and more. You can opt-out at any time.</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800 dark:text-white">
                                Quick Link
                            </p>
                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <Link to="/"
                                    className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                                >
                                    Home
                                </Link>
                                <Link to="/greenies"
                                    className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                                >
                                    Greenies
                                </Link>
                                <Link to="/"
                                    className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                                >
                                    Our Philosophy
                                </Link>
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800 dark:text-white">
                                Industries
                            </p>
                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                                >
                                    Retail &amp; E-Commerce
                                </a>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                                >
                                    Information Technology
                                </a>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                                >
                                    Finance &amp; Insurance
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />
                    <div className="flex items-center justify-between">
                        <div>
                            <img
                                className="w-28 h-auto mx-auto pt-1 pb-12"
                                src="/images/greeny-low-resolution-logo-color-on-transparent-background.png"
                                alt="logo"
                            />
                        </div>

                        <div className="flex -mx-2">
                            <Link
                                to="https://www.facebook.com/greeny"
                                className="fa fa-facebook mx-2 w-5 h-5 fill-current text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                            </Link>
                            <Link
                                to="https://www.twitter.com/greeny"
                                className="fa fa-twitter mx-2 w-5 h-5 fill-current text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                            </Link>
                            <Link
                                to="https://www.instagram.com/greeny"
                                className="fa fa-instagram mx-2 w-5 h-5 fill-current text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                            </Link>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )

};