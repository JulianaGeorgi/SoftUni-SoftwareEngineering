import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

import { postServices } from "../../../services/postServices";
import { commentServices } from "../../../services/commentServices";
import { useComment } from "../../../contexts/CommentContext";
import { useAuth } from "../../../contexts/AuthContext";

import { formatTimestamp } from "../../../utils/utils";

import { DeleteModal } from "../../DeleteModal/DeleteModal";


export const Comment = ({ comment }) => {

    const { greenyId } = useParams();
    const { deleteComment } = useComment();
    const { getUserProfile } = useAuth();

    const [author, setAuthor] = useState(null);

    const [isDropDownCommentOpen, setIsDropDownCommentOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedComment, setSelectedComment] = useState({});

    const formattedDate = formatTimestamp(comment.timestamp);

    useEffect(() => {
        async function getGreenyOwnerPhoto() {
            const commentOwnerId = comment.ownerId;
            const authorData = await getUserProfile(commentOwnerId);
            setAuthor(authorData);
        }
        getGreenyOwnerPhoto();
    }, [comment.ownerId, getUserProfile]);

    const toggleDropdownComment = () => {
        setIsDropDownCommentOpen(!isDropDownCommentOpen);
    }

    const toggleDeleteModal = () => {
        setIsDeleteModalOpen(!isDeleteModalOpen);
        setSelectedComment({
            commentId: comment.id,
            greenyId: greenyId
        })
    };

    const handleDeleteConfirmed = async () => {

        toggleDeleteModal();

        const { commentId, greenyId } = selectedComment;

        await commentServices().deleteComment(commentId, greenyId); // delete comment from db
        deleteComment(commentId); // delete from state via context

        const res = await postServices().getGreenyById(greenyId);
        const currentCommentsCount = res.commentsCount;
        await postServices().updateCommentsCount(greenyId, currentCommentsCount, 'decrement'); // update comment count in the greeny object 
    }


    return (
        <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
            <footer className="flex justify-between items-center mb-2">
                {author &&
                    <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">

                            <img
                                className="mr-2 w-6 h-6 rounded-full"
                                src={author.photoURL}
                                alt="Michael Gough"
                            />
                            {author.username}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            <time pubdate="" dateTime="2022-02-08" title="February 8th, 2022">
                                {formattedDate}
                            </time>
                        </p>
                    </div>
                }
                <div className="relative inline-block text-left">
                    <button
                        onClick={toggleDropdownComment}
                        id="dropdownComment1Button"
                        // data-dropdown-toggle="dropdownComment1"
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <FontAwesomeIcon icon={faEllipsis} />

                    </button>
                    {/* Dropdown menu */}
                    {isDropDownCommentOpen && (
                        <div
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex={-1}
                        >
                            <div className="py-1" role="none">
                                {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                                <button
                                    href="#"
                                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white"
                                    role="menuitem"
                                    tabIndex={-1}
                                    id="menu-item-0"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={toggleDeleteModal}
                                    className="text-gray-700 block px-4 py-2 text-sm  hover:bg-blue-400 hover:text-white"
                                    role="menuitem"
                                    tabIndex={-1}
                                    id="menu-item-1"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>

                    )}
                </div>
            </footer>

            <p className="text-gray-500 dark:text-gray-400">
                {comment.comment}
            </p>
            <div className="flex items-center mt-4 space-x-4">
                <button
                    type="button"
                    className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                >
                    <svg
                        className="mr-1.5 w-3.5 h-3.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 18"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                        />
                    </svg>
                    Reply
                </button>
            </div>

            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={toggleDeleteModal}
                onDelete={handleDeleteConfirmed}
            />
        </article>
    )
}