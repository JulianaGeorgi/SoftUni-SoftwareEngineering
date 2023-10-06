import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLeaf, faPersonWalking } from '@fortawesome/free-solid-svg-icons';


function ProfileDropDownMenu() {

    const navigate = useNavigate();
    const { currentUser, logout } = useAuth()

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    async function handleLogout() {
        setIsDropdownOpen(false);
        try {
            await logout();
            navigate("/");
        } catch {
            alert("Failed to log out");
        }
    }

    return (
        <div className="relative">
            <div
                className="relative"
                data-te-dropdown-ref=""
                data-te-dropdown-alignment="end"
            >
                {/* Second dropdown trigger */}
                <button
                    className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                    id="dropdownMenuButton2"
                    data-te-dropdown-toggle-ref=""
                    aria-expanded={isDropdownOpen}
                    onClick={toggleDropdown}
                >
                    {/* User avatar */}
                    <img
                        src={currentUser.photoURL}
                        className="rounded-full"
                        style={{ height: 50, width: 50 }}
                        alt=""
                        loading="lazy"
                    />
                </button>
                {/* Second dropdown menu */}
                <ul
                    className={`absolute right-0 z-10 mt-2 w-56 ${isDropdownOpen ? 'block' : 'hidden'
                        } min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-neutral-500 text-left`}
                    aria-labelledby="dropdownMenuButton2"
                    data-te-dropdown-menu-ref=""
                >
                    {/* Second dropdown menu items */}
                    <li>
                        <p
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-m hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                            data-te-dropdown-item-ref=""
                        >
                            Logged in as <span className='font-semibold'>{currentUser.email}</span>
                        </p>
                    </li>

                    <hr></hr>

                    <li> 
                        <Link
                            to="/profile"
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-m hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                            data-te-dropdown-item-ref=""
                            onClick={closeDropdown}
                        >
                            <FontAwesomeIcon icon={faHome} className='px-2'/>
                            Home
                        </Link>
                    </li>

                    <li> 
                        <Link
                            to="/create"
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-m hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                            data-te-dropdown-item-ref=""
                            onClick={closeDropdown}
                        >
                            <FontAwesomeIcon icon={faLeaf} className='px-2'/>
                            Post Greeny
                        </Link>
                    </li>


                    <li>
                        <Link
                            to="/logout"
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-m hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                            data-te-dropdown-item-ref=""
                            onClick={handleLogout}
                        >
                            <FontAwesomeIcon icon={faPersonWalking} className=' px-2'/>
                            Log out
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default ProfileDropDownMenu;


