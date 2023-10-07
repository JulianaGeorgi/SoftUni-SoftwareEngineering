import { Link } from "react-router-dom"
import { GreeniesDropDownMenu } from "./GreeniesDropDownMenu"
import { useAuth } from "../../contexts/AuthContext"

export const MainNavMenu = () => {

    const {currentUser} = useAuth()
    return (
        <div
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto "
            id="navbarSupportedContent1"
            data-te-collapse-item=""
        >
            {/* Logo */}
            <Link to="/"
                className="mb-4 ml-2 mr-5 mt-1.5 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                href="/"
            >
                <img
                    src="/images/greeny-low-resolution-logo-color-on-transparent-background-text-only.png"
                    style={{ height: 25 }}
                    alt="TE Logo"
                    loading="lazy"
                />
            </Link>
            {/* Left navigation links */}
            <ul
                className="list-style-none mr-auto flex flex-row pl-0 lg:flex-col"
                data-te-navbar-nav-ref=""
            >
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                    <Link to="/"
                        className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                        data-te-nav-link-ref=""
                    >
                        Home
                    </Link>
                </li>

                <GreeniesDropDownMenu />

                {!currentUser &&
                    (
                        <div className="flex flex-row">

                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                                <Link to="/login"
                                    className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                                    href="/"
                                    data-te-nav-link-ref=""
                                >
                                    Login
                                </Link>
                            </li>

                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                                <Link to="/register"
                                    className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    href="/"
                                    data-te-nav-link-ref=""
                                >
                                    Register
                                </Link>
                            </li>
                        </div>
                    )
                }
            </ul>
        </div>
    )
}