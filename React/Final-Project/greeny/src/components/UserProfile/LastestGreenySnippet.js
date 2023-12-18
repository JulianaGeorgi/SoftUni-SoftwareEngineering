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
            {/*greeny snippet*/}
            <article className="hover:bg-frog transition duration-350 ease-in-out">
                <div className="flex flex-shrink-0 p-4 pb-0">
                    <div className="flex-shrink-0 group block">
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
                    </div>
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
                    </div>
                </div>
                <hr className="border-grey-400" />
            </article>
        </li>
    )
}