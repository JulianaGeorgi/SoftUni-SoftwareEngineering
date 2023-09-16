import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faComment, faCommentAlt, faComments } from '@fortawesome/free-solid-svg-icons';

import { DeleteModal } from "../DeleteModal/DeleteModal";

import { postServices } from "../../services/postServices";
import { useGreeny } from "../../contexts/GreenyContext";
import { useAuth } from "../../contexts/AuthContext";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export const GreenyDetails = () => {

    const { greenyId } = useParams();
    const { currentUser } = useAuth();
    const [currentGreeny, setCurrentGreeny] = useState({});
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const { deleteGreeny } = useGreeny();
    const navigate = useNavigate();

    const toggleDeleteModal = () => {
        setIsDeleteModalOpen(!isDeleteModalOpen);
    };

    useEffect(() => {
        async function getCurrentGreeny() {
            try {
                const currentGreeny = await postServices().getGreenyById(greenyId);
                const date = new Date(currentGreeny.timestamp);
                const formattedDate = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}-${date.getFullYear()}`;
                setCurrentGreeny({ ...currentGreeny, timestamp: formattedDate });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        getCurrentGreeny();
    }, [greenyId]);

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
                            className="rounded-md absolute left-0 top-0 w-full h-full z-0 object-cover"
                        />
                        <div className="p-4 absolute bottom-0 left-0 z-20">
                            <a
                                href="#"
                                className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
                            >
                                {currentGreeny.category}
                            </a>
                            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                                {currentGreeny.title}
                            </h2>
                            <div className="flex mt-3">
                                <img
                                    src="https://randomuser.me/api/portraits/men/97.jpg"
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

                    <div className="flex mb-12 mx-auto lg:px-0 mt-12 text-gray-700 max-w-screen-md">
                        <p className="px-4"><FontAwesomeIcon icon={faHeart}/> Like</p>
                        <p className="px-4"><FontAwesomeIcon icon={faComment} /> Comment</p>
                    </div>
                </main>
            )}


            {/* BUTTONS */}
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

            {/* Delete Modal */}
            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={toggleDeleteModal}
                onDelete={handleDeleteConfirmed}
            />
        </div>
    );
};