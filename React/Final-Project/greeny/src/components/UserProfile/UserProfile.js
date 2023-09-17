import { useEffect, useState } from "react";

import { postServices } from "../../services/postServices"
import { useAuth } from "../../contexts/AuthContext";

import { UserGreenySnippet } from "./UserGreenySnippet";
import { LatestGreenySnippet } from "./LastestGreenySnippet";

export const UserProfile = () => {

    const { currentUser } = useAuth();
    const [currentUserGreenies, setCurrentUserGreenies] = useState([]);
    const [latestGreenies, setLatestGreenies] = useState([]);
    const batchSize = 2;
    const [loadedGreenies, setLoadedGreenies] = useState(batchSize);

    useEffect(() => {
        postServices()
            .getGreeniesByUserId(currentUser.uid)
            .then((userGreenies) => {
                setCurrentUserGreenies([...userGreenies]);
            })
            .catch((error) => {
                console.error("API call error:", error);
            });
    }, []);

    useEffect(() => {
        postServices()
            .getLatestGreenies()
            .then((latestGreenies) => {
                setLatestGreenies([...latestGreenies]);
            })
            .catch((error) => {
                console.error("API call error:", error);
            });
    }, []);

    const slicedGreenies = latestGreenies.slice(0, loadedGreenies);

    const handleShowMoreGreenies = () => {
        setLoadedGreenies(loadedGreenies + batchSize);
    }


    return (
        <>
            {/* component */}
            <div className="position-relative p-12 h-auto bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
                <div className="flex justify-center">
                    <header className="text-grey-700 py-4 h-auto">
                        {/* Navbar (left side) */}
                        <div style={{ width: 275 }}>
                            <div
                                className="overflow-y-auto h-auto px-3"
                                style={{ width: 275 }}
                            >
                                {/* Nav*/}
                                <nav className="mt-5 px-2">
                                    <a
                                        href="#"
                                        className="group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full bg-gray-800 text-blue-300"
                                    >
                                        <svg
                                            className="mr-4 h-6 w-6 "
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                                            />
                                        </svg>
                                        Home
                                    </a>
                                    <a
                                        href="#"
                                        className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-gray-800 hover:text-blue-300"
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
                                            <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                        </svg>
                                        Explore
                                    </a>
                                    <a
                                        href="#"
                                        className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
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
                                        href="#"
                                        className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
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
                                        href="#"
                                        className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
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
                                        href="#"
                                        className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
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
                                        href="#"
                                        className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
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
                                        href="#"
                                        className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
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
                                    </a>
                                    <button className="bg-blue-400 hover:bg-blue-500 w-full mt-5 text-white font-bold py-2 px-4 rounded-full">
                                        Greenit
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </header>
                    <main role="main">
                        <div className="flex" style={{ width: 990 }}>
                            <div className="flex flex-col">
                                <section
                                    className="w-full border border-y-0 border-gray-800"
                                    style={{ maxWidth: 600 }}
                                >
                                    {/*Content (Center)*/}
                                    <aside>
                                        <div className="flex">
                                            <div className="flex-1 mx-2">
                                                <h2 className="px-4 py-2 text-xl font-semibold text-grey-700">
                                                    Home
                                                </h2>
                                            </div>
                                            <div className="flex-1 px-4 py-2 mx-2">
                                                <a
                                                    href=""
                                                    className=" text-2xl font-medium rounded-full text-grey-700 hover:bg-gray-800 hover:text-blue-300 float-right"
                                                >
                                                    <svg
                                                        className="m-2 h-6 w-6"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <g>
                                                            <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
                                                        </g>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <hr className="border-gray-800" />
                                        {/*middle creat tweet*/}
                                        <div className="flex">
                                            <div className="m-2 w-10 py-1">
                                                <img
                                                    className="inline-block h-10 w-10 rounded-full"
                                                    src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex-1 px-2 pt-2 mt-2">
                                                <textarea
                                                    className=" bg-transparent text-gray-400 font-medium text-lg w-full"
                                                    rows={2}
                                                    cols={50}
                                                    placeholder="What's happening?"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        {/*middle creat tweet below icons*/}
                                        <div className="flex">
                                            <div className="w-10" />
                                            <div className="w-64 px-2">
                                                <div className="flex items-center">
                                                    <div className="flex-1 text-center px-1 py-1 m-2">
                                                        <a
                                                            href="#"
                                                            className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
                                                        >
                                                            <svg
                                                                className="text-center h-7 w-6"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="flex-1 text-center py-2 m-2">
                                                        <a
                                                            href="#"
                                                            className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
                                                        >
                                                            <svg
                                                                className="text-center h-7 w-6"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                                                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="flex-1 text-center py-2 m-2">
                                                        <a
                                                            href="#"
                                                            className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
                                                        >
                                                            <svg
                                                                className="text-center h-7 w-6"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="flex-1 text-center py-2 m-2">
                                                        <a
                                                            href="#"
                                                            className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
                                                        >
                                                            <svg
                                                                className="text-center h-7 w-6"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <button className="bg-blue-400 hover:bg-blue-500 mt-5 text-white font-bold py-2 px-8 rounded-full mr-8 float-right">
                                                    Greenit
                                                </button>
                                            </div>
                                        </div>
                                        <hr className="border-gray-800 border-4" />
                                    </aside>

                                    <ul className="list-none">
                                        {slicedGreenies.map((greeny) =>
                                        (<LatestGreenySnippet key={greeny.id} greeny={greeny} />
                                        ))}
                                    </ul>

                                </section>
                                {loadedGreenies < latestGreenies.length ?
                                    (<button
                                        onClick={handleShowMoreGreenies}
                                        className="m-10 bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600">
                                        Show more Greenies
                                    </button>
                                    ) : (
                                        <p className="m-10">There are no more greenies.</p>
                                    )}
                                </div>
                                <aside className="w-2/5 h-12 position-relative">
                                    {/*Aside menu (right side)*/}
                                    <div style={{ maxWidth: 350 }}>
                                        <div className="overflow-y-auto h-auto">
                                            {/* <div className="relative text-gray-300 w-80 p-5">
                                            <button type="submit" className="absolute ml-4 mt-3 mr-4">
                                                <svg
                                                    className="h-4 w-4 fill-current"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    version="1.1"
                                                    id="Capa_1"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 56.966 56.966"
                                                    style={{ enableBackground: "new 0 0 56.966 56.966" }}
                                                    xmlSpace="preserve"
                                                    width="512px"
                                                    height="512px"
                                                >
                                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                                </svg>
                                            </button>
                                            <input
                                                type="search"
                                                name="search"
                                                placeholder="Search Twitter"
                                                className=" bg-dim-700 h-10 px-10 pr-5 w-full rounded-full text-sm focus:outline-none bg-purple-white shadow rounded border-0"
                                            />
                                        </div> */}
                                            {/*trending tweet section*/}
                                            <div className="max-w-sm rounded-lg bg-dim-700 overflow-hidden shadow-lg m-4">
                                                <div className="flex">
                                                    <div className="flex-1 m-2">
                                                        <h2 className="px-4 py-2 text-xl w-48 font-semibold text-grey-700">
                                                            Your latest Greenies
                                                        </h2>
                                                    </div>
                                                </div>
                                                <hr className="border-gray-800" />

                                                {currentUserGreenies.length === 0 ? (
                                                    <p className="px-4 ml-2 my-3 text-s font-bold text-gray-700">You have not posted any greenies</p>
                                                ) : (
                                                    <>
                                                        {currentUserGreenies.map((greeny) =>
                                                        (<UserGreenySnippet key={greeny.id} greeny={greeny} />
                                                        ))}
                                                        < hr className="border-gray-800" />

                                                        < div className="flex">
                                                            <div className="flex-1 p-4">
                                                                <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">
                                                                    Show more
                                                                </h2>
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                    </main>
                </div >
            </div >
        </>
    )
}