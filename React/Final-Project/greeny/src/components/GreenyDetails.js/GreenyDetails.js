import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';

import { postServices } from "../../services/postServices";
import { commentServices } from "../../services/commentServices";
import { likeServices } from "../../services/likeServices";
import { useGreeny } from "../../contexts/GreenyContext";
import { useAuth } from "../../contexts/AuthContext";
import { useComment } from "../../contexts/CommentContext";
import { formatTimestamp } from "../../utils/utils";

import { CommentSection } from "./CommentSection/CommentSection";
import { DeleteModal } from "../DeleteModal/DeleteModal";


export const GreenyDetails = () => {

    const { greenyId } = useParams();
    const { currentUser, getUserProfile } = useAuth();
    const { editGreeny } = useGreeny();
    const { setAllComments, setCommentsCount, commentsCount } = useComment();

    const [currentGreeny, setCurrentGreeny] = useState({});
    const [hasLiked, setHasLiked] = useState(null);
    const [author, setAuthor] = useState({});

    const [showCommmentSection, setShowCommentSection] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const { deleteGreeny } = useGreeny();

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchCurrentGreeny() {
            try {
                const currentGreeny = await postServices().getGreenyById(greenyId);
                const formattedDate = formatTimestamp(currentGreeny.timestamp);
                setCurrentGreeny({ ...currentGreeny, timestamp: formattedDate });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchCurrentGreeny();
    }, [greenyId, currentGreeny]);

    useEffect(() => {
        async function getGreenyOwnerPhoto() {
            const greenyOwnerId = currentGreeny.ownerId;
            const authorData = await getUserProfile(greenyOwnerId); //get from db
            setAuthor(authorData); // update state
        }
        getGreenyOwnerPhoto();
    }, [getUserProfile, currentGreeny.ownerId]);

    useEffect(() => {
        async function fetchUserHasLiked() {
            try {
                if (currentUser) {
                    const userHasLiked = await likeServices().checkIfHasLiked(greenyId, currentUser.uid);
                    setHasLiked(userHasLiked);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchUserHasLiked();
    }, [currentUser, greenyId]);

    useEffect(() => {
        async function fetchComments() {
            try {
                const allComments = await commentServices().getAllComments(greenyId);
                const orderedCommentsByLatest = allComments.reverse();

                setAllComments([...orderedCommentsByLatest]);
                setCommentsCount(orderedCommentsByLatest.length);

                // setComments(orderedCommentsByLatest); // state update via context
            } catch (error) {
                console.error("API call error:", error);
            }
        }
        fetchComments();
    }, [greenyId, setAllComments, setCommentsCount]);

    const onLikeClick = async () => {
        const action = "increment";
        const currentLikesCount = currentGreeny.likesCount;

        const updatedGreenyData = await likeServices().updateLikesCount(greenyId, currentLikesCount, action); // update property likesCounter in the greeny object in the db
        editGreeny(updatedGreenyData, greenyId); // update state with the new likes count of the greeny
        setCurrentGreeny(prevState => {
            return { ...prevState, likesCount: updatedGreenyData.likesCount } // update currentGreeny state
        });

        const userHasLiked = await likeServices().storeLikes(greenyId, currentUser.uid, action);
        setHasLiked(userHasLiked);
    }

    const onUnlikeClick = async () => {
        const action = "decrement";
        const currentLikesCount = currentGreeny.likesCount;

        const updatedGreenyData = await likeServices().updateLikesCount(greenyId, currentLikesCount, action); // update property likesCounter in the greeny object in the db
        editGreeny(updatedGreenyData, greenyId); // update state with the new likes count of the greeny
        setCurrentGreeny(prevState => {
            return { ...prevState, likesCount: updatedGreenyData.likesCount } // update currentGreeny state
        });

        const userHasLiked = await likeServices().storeLikes(greenyId, currentUser.uid, action);
        setHasLiked(userHasLiked);
    }

    const toggleCommentSection = () => {
        setShowCommentSection(!showCommmentSection);
    }

    const toggleDeleteModal = () => {
        setIsDeleteModalOpen(!isDeleteModalOpen);
    };

    const isOwner = currentUser && currentUser.uid === currentGreeny.ownerId;

    const handleDeleteConfirmed = async () => {

        toggleDeleteModal();

        await postServices().deleteGreeny(greenyId); // delete from db

        deleteGreeny(greenyId); // delete from state via context

        navigate("/");
    }

    return (
        <div className="max-w-screen-xl mx-auto">
            {currentGreeny && (
                <main className="mt-10">
                    <div
                        className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
                        style={{ height: "24em" }}
                    >
                        <div
                            className="rounded-md absolute left-0 bottom-0 w-full h-full z-10"
                            style={{
                                backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))"
                            }}
                        />
                        <img
                            src={currentGreeny.imageUrl}
                            alt=""
                            className="rounded-md absolute left-0 top-0 w-full h-full z-0 object-cover"
                        />
                        <div className="p-4 absolute bottom-0 left-0 z-20">
                            <a
                                href="/"
                                className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
                            >
                                {currentGreeny.category}
                            </a>
                            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                                {currentGreeny.title}
                            </h2>
                            <div className="flex mt-3">
                                <img
                                    src={author.photoURL}
                                    alt=""
                                    className="h-10 w-10 rounded-full mr-2 object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-gray-200 text-sm">
                                        {" "}
                                        {currentGreeny.author}{" "}
                                    </p>
                                    <p className="font-semibold text-gray-400 text-xs"> {currentGreeny.timestamp} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 mb-12 mx-auto lg:px-0 mt-12 text-gray-700 max-w-screen-md text-lg leading-relaxed">
                        <p>{currentGreeny.content}</p>
                    </div>
                </main>
            )}


            {/* Edit and delete buttons */}
            {isOwner && (
                <div className="flex flex-row justify-center gap-3">
                    <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                            className="px-10 py-2 text-white bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 rounded-full hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                        >
                            <Link to={`/greenies/${greenyId}/edit`}>Edit</Link>
                        </button>
                    </div>
                    <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                            onClick={toggleDeleteModal}
                            className="px-10 py-2 text-white bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 rounded-full hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            )}

            {/* Likes and comments */}
            <div className="flex mb-12 mx-auto lg:px-0 mt-12 text-gray-700 max-w-screen-md">
                <button
                    onClick={hasLiked ? onUnlikeClick : onLikeClick}
                    disabled={!currentUser}
                    className="px-4"
                >
                    <FontAwesomeIcon
                        className={hasLiked ? 'text-red-400' : 'text-indigo-500'}
                        icon={faHeart}
                    /> {currentGreeny.likesCount} likes
                </button>


                <button
                    onClick={toggleCommentSection}
                    className="px-4">
                    <FontAwesomeIcon className="text-indigo-500" icon={faComment} /> {commentsCount} comments
                </button>
            </div>
            {showCommmentSection && <CommentSection currentGreeny={currentGreeny} />}

            {/* Delete Modal */}
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={toggleDeleteModal}
                onDelete={handleDeleteConfirmed}
            />
        </div >
    );
};

//TODO: Comments do not appear after a page refresh - persist the state in localStorage?