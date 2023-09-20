import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { useAuth } from "../../contexts/AuthContext";

import { sliceText } from "../../utils/utils";

export const LatestGreenySnippet = ({ greeny }) => {

    const { getUserProfile } = useAuth();
    const [author, setAuthor] = useState(null);

    const greenyContentSnippet = sliceText(greeny.content);

    useEffect(() => {
        async function getGreenyOwnerPhoto() {
            const greenyOwnerId = greeny.ownerId;
            const authorData = await getUserProfile(greenyOwnerId);
            setAuthor(authorData);
        }
        getGreenyOwnerPhoto();
    }, [getUserProfile, greeny.ownerId]);

    return (
        <li>
            {/*second tweet*/}
            <article className="hover:bg-frog transition duration-350 ease-in-out">
                <div className="flex flex-shrink-0 p-4 pb-0">
                    <a href="/" className="flex-shrink-0 group block">
                        {author && (
                            <div className="flex items-center">
                                <div>
                                        <img
                                            className="inline-block h-10 w-10 rounded-full"
                                            src={author.photoURL}
                                            alt=""
                                        />
                                </div>
                                <div className="ml-3">
                                    <p className="text-base leading-6 font-medium text-gray-800">
                                        @{greeny.author}
                                    </p>
                                </div>
                            </div>
                        )}
                    </a>
                </div>
                <div className="pl-16">
                    <p className="text-base width-auto font-medium text-gray-800 flex-shrink">
                        {greenyContentSnippet}
                    </p>
                    <div className="md:flex-shrink pr-6 pt-3">
                        <div
                            className="bg-cover bg-no-repeat bg-center rounded-lg w-full h-64"
                            style={{
                                height: 200,
                                backgroundImage:
                                    `url(${greeny.imageUrl})`
                            }}
                        >
                            <Link to={`/greenies/${greeny.id}`}>
                                <img
                                    className="opacity-0 w-full h-full"
                                    src={greeny.imageUrl}
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center py-4">
                        <div className="flex-1 flex items-center text-gray-800 text-xs hover:text-indigo-500 transition duration-350 ease-in-out">
                            <FontAwesomeIcon className="w-5 h-5 mr-2" icon={faComment} />{greeny.commentsCount}
                        </div>
                        <div className="flex-1 flex items-center text-gray-800 text-xs hover:text-red-400 transition duration-350 ease-in-out">
                            <FontAwesomeIcon className="w-5 h-5 mr-2" icon={faHeart} /> {greeny.likesCount}
                        </div>
                        {/* <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-red-600 transition duration-350 ease-in-out">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 mr-2"
                            >
                                <g>
                                    <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z" />
                                </g>
                            </svg>
                            14 k
                        </div>
                        <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 mr-2"
                            >
                                <g>
                                    <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z" />
                                    <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z" />
                                </g>
                            </svg>
                        </div> */}
                    </div>
                </div>
                <hr className="border-grey-400" />
            </article>
        </li>
    )
}