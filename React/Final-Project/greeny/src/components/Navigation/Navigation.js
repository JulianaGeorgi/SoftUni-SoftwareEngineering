import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

import { Logout } from "../Logout/Logout";

export const Navigation = () => {

    const { currentUser } = useAuth();

    return (
        <>
            {/* Main navigation container */}
            <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    {/* Hamburger button for mobile view */}
                    <button
                        className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                        type="button"
                        data-te-collapse-init=""
                        data-te-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent1"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        {/* Hamburger icon */}
                        <span className="[&>svg]:w-7">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-7 w-7"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </button>
                    {/* Collapsible navigation container */}
                    <div
                        className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
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
                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                                <Link to="/allgreenies"
                                    className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                                    data-te-nav-link-ref=""
                                >
                                    Greenies
                                </Link>
                            </li>
                            {!currentUser ?
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
                                :
                                (
                                    <div className="flex flex-row">
                                        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                                            <Link to="/create"
                                                className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                                href="/"
                                                data-te-nav-link-ref=""
                                            >
                                                Create Greeny
                                            </Link>
                                        </li>
                                        <Logout />
                                    </div>
                                )
                            }
                        </ul>
                    </div>
                    {/* Right elements */}
                    <div className="relative flex items-center">
                        {/* Cart Icon */}
                        <a
                            className="mr-4 text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            href="/"
                        >
                            <span className="[&>svg]:w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                </svg>
                            </span>
                        </a>
                        {/* Container with two dropdown menus */}
                        <div
                            className="relative"
                            data-te-dropdown-ref=""
                            data-te-dropdown-alignment="end"
                        >

                            {/* First dropdown menu - SHOPPING CART */}
                            <ul
                                className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                aria-labelledby="dropdownMenuButton1"
                                data-te-dropdown-menu-ref=""
                            >
                                {/* First dropdown menu items */}
                                <li>
                                    <a
                                        className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                        href="/"
                                        data-te-dropdown-item-ref=""
                                    >
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                        href="/"
                                        data-te-dropdown-item-ref=""
                                    >
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                        href="/"
                                        data-te-dropdown-item-ref=""
                                    >
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Second dropdown container - AVATAR */}
                        {currentUser && (
                            <div
                                className="relative"
                                data-te-dropdown-ref=""
                                data-te-dropdown-alignment="end"
                            >
                                {/* Second dropdown trigger */}
                                <Link to={"/profile"}
                                    className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                                    id="dropdownMenuButton2"
                                    role="button"
                                    data-te-dropdown-toggle-ref=""
                                    aria-expanded="false"
                                >
                                    {/* User avatar */}
                                    <img
                                        src={currentUser.photoURL}
                                        className="rounded-full"
                                        style={{ height: 50, width: 50 }}
                                        alt=""
                                        loading="lazy"
                                    />
                                </Link>
                                {/* Second dropdown menu */}
                                <ul
                                    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                    aria-labelledby="dropdownMenuButton2"
                                    data-te-dropdown-menu-ref=""
                                >
                                    {/* Second dropdown menu items */}
                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                            href="/"
                                            data-te-dropdown-item-ref=""
                                        >
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                            href="/"
                                            data-te-dropdown-item-ref=""
                                        >
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                            href="/"
                                            data-te-dropdown-item-ref=""
                                        >
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>

    )

    // return (
    //     <div className="page-top">
    //         <SocialButtons />
    //         <div className="nav-wrap">
    //             <nav className="top-nav">
    //                 <div className="logo">
    //                     <Link to="/"><img src="/images/greeny-low-resolution-logo-white-on-transparent-background.png" alt="Greeny" /></Link>
    //                 </div>
    //                 <ul className="main-menu text-white">
    //                     <li className="item"><Link to="/">Home</Link></li>
    //                     <li className="item has-submenu">
    //                         {/*TODO: Greenies should not be a link */}
    //                         <a tabIndex="0" href="/#">Greenies</a>
    //                         <ul className="submenu">
    //                             <li className="subitem"><a href="/" >Home</a></li>
    //                             <li className="subitem"><a href="/">Under 5 Minutes</a></li>
    //                             <li className="subitem"><a href="/">Habit-changers</a></li>
    //                             <li className="subitem"><a href="/">Big Steps</a></li>
    //                         </ul>
    //                     </li>
    //                     <li className="item"><Link to="/events">Events</Link></li>
    //                     <li className="item"><Link to="/about">About</Link></li>
    //                     <li className="item"><Link to="/contact">Contact</Link></li>
    //                     <li className="toggle"><a href="/"><i className="fas fa-bars"></i></a></li>
    //                     {!currentUser ?
    //                         (
    //                             <div>
    //                                 <li className="item">
    //                                     <Link to="/signup" className="inline-block bg-watermelon-red text-m text-white py-3 px-10 rounded-full shadow-md hover:bg-gradient-to-r from-cyan-500 to-blue-500">SIGN-UP <span><b>♡</b></span></Link>
    //                                 </li>
    //                                 <li className="item"><Link to="/login">Login</Link></li>
    //                             </div>
    //                         )
    //                         :
    //                         (
    //                             <Logout/>
    //                         )}
    //                 </ul>
    //             </nav>
    //         </div>
    //     </div>
    // );
};