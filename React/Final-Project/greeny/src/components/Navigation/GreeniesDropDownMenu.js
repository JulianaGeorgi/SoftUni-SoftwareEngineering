import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export const GreeniesDropDownMenu = () => {

    const { currentUser } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const closeDropdown = () => {
        setIsDropdownOpen(false)
    }

    return (

        <div
            className="relative"
            data-te-dropdown-ref=""
            data-te-dropdown-alignment="end"
        >
            {/* Second dropdown trigger */}
            <button
                className="hidden-arrow flex items-center whitespace-nowrap"
                id="dropdownMenuButton2"
                data-te-dropdown-toggle-ref=""
                aria-expanded={isDropdownOpen}
                onClick={toggleDropdown}
            > Greenies <FontAwesomeIcon icon={faCaretDown} className="text-neutral-500 px-2 hover:text-neutral-700" />
            </button>

            <ul
                className={`absolute  z-10 mt-2 w-56 ${isDropdownOpen ? 'block' : 'hidden'
                    } min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-neutral-500 text-left`}
                aria-labelledby="dropdownMenuButton2"
                data-te-dropdown-menu-ref=""
            >
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


            </ul>

        </div>
    )
}