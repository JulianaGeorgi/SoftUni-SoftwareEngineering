import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

import ProfileDropDownMenu from "./ProfileDropDownMenu";
import { useState } from "react";
import { MainNavMenu } from "./MainNavMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

export const Navigation = () => {

    const { currentUser } = useAuth();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const closeDropdown = () => {
        setIsDropdownOpen(false)
    }


    return (
        <>
            {/* Main navigation container */}
            <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    {/* Hamburger button for mobile view */}
                    <button
                        className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:invisible"
                        data-te-collapse-init=""
                        data-te-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent1"
                        aria-label="Toggle navigation"
                        aria-expanded={isDropdownOpen}
                        onClick={toggleDropdown}
                    >
                        <FontAwesomeIcon icon={faHamburger} className="h-7 w-7 text-neutral-500 px-2 hover:text-neutral-700" />
                    </button>
                    {/* Mobile navigation */}
                    <ul
                        className={`absolute top-full z-10 mt-2 w-56 ${isDropdownOpen ? 'block' : 'hidden'
                            } min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-neutral-500 text-left`}
                        aria-labelledby="dropdownMenuButton2"
                        data-te-dropdown-menu-ref=""

                    >

                        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                            <Link to="/"
                                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-m hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                data-te-nav-link-ref=""
                            >
                                Home
                            </Link>
                        </li>

                        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                            <Link to="/greenies"
                                onClick={closeDropdown}
                                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-m hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                data-te-dropdown-item-ref=""
                            >
                                All
                            </Link>
                        </li>

                        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                            <Link to="/greenies/explore"
                                onClick={closeDropdown}
                                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-m hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                data-te-dropdown-item-ref=""
                            >
                                Categories
                            </Link>
                        </li>

                        {currentUser && (
                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                                <Link to="/create"
                                    onClick={closeDropdown}
                                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-m hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                    data-te-dropdown-item-ref=""
                                >
                                    Post Greeny <span><b>♡</b></span>
                                </Link>
                            </li>
                        )}

                        {!currentUser &&
                            (
                                <>

                                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                                        <Link to="/login"
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-m hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                            href="/"
                                            data-te-nav-link-ref=""
                                        >
                                            Login
                                        </Link>
                                    </li>

                                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                                        <Link to="/register"
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-m hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                            href="/"
                                            data-te-nav-link-ref=""
                                        >
                                            Register
                                        </Link>
                                    </li>
                                </>
                            )
                        }


                    </ul>
                    {/* Desktop navigation */}
                    <MainNavMenu />


                    {/* Right side elements */}
                    <div className="relative flex items-center">
                        {/* Shopping Basket Icon */}
                        <Link
                            className="mr-4 text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            to="/"
                        >
                           <FontAwesomeIcon icon={faShoppingBasket} className="h-7 w-7 text-neutral-500 px-2 hover:text-neutral-700" />
                        </Link>

                        {/* Profile Photo - Dropdown menu  */}
                        {currentUser && (
                            <ProfileDropDownMenu />
                        )}
                    </div>
                </div>
            </nav>
        </>

    )
};