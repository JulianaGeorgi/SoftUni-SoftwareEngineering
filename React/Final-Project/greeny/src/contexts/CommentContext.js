import { useEffect } from "react";
import { createContext, useState, useContext } from "react";
import { commentServices } from "../services/commentServices";

export const CommentContext = createContext();

export function useComment() {
    return useContext(CommentContext);
}

export const CommentProvider = ({ children }) => {

    const [allComments, setAllComments] = useState([]);
    const [commentsCount, setCommentsCount] = useState(0);


    // useEffect(() => {
    //     // Get the stored JSON data from local storage
    //     const storedComments = window.localStorage.getItem('allComments');

    //     try {
    //         // Attempt to parse the stored JSON data
    //         const parsedComments = JSON.parse(storedComments);

    //         // Check if parsedComments is an array (or whatever data structure you expect)
    //         if (Array.isArray(parsedComments)) {
    //             setAllComments(parsedComments);
    //         } else {
    //             // Handle the case where the stored data is not an array
    //             console.error('Invalid data in local storage: Not an array');
    //         }
    //     } catch (error) {
    //         // Handle JSON parsing errors
    //         console.error('Error parsing JSON data from local storage:', error);
    //     }
    // }, []);

    // useEffect(() => {
    //     // Store the updated comments as JSON in local storage
    //     window.localStorage.setItem('allComments', JSON.stringify(allComments));
    // }, [allComments]);

    useEffect(() => {
        commentServices()
            .getAllComments()
            .then((allComments) => {
                setAllComments([...allComments]);
            })
            .catch((error) => {
            });
    }, []);


    // const setComments = (orderedCommentsByLatest) => {
    //     setAllComments([...orderedCommentsByLatest]);
    //     setCommentsCount(orderedCommentsByLatest.length);
    // }

    const createComment = (newCommentData) => {
        setAllComments((oldComments) => [newCommentData, ...oldComments]);
        setCommentsCount(prevCount => prevCount + 1);
    }

    const deleteComment = (commentId) => {
        setAllComments(state => state.filter(comment => comment.id !== commentId));
        setCommentsCount(prevCount => prevCount - 1);
    };

    // const editGreeny = (updatedGreenyData, greenyId) => {
    //     setGreenies(state => state.map(x => x.id === greenyId ? updatedGreenyData : x));
    // }

    const value = {
        allComments,
        commentsCount,
        // setComments,
        createComment,
        deleteComment,
        setAllComments,
        setCommentsCount
    }

    return (
        <CommentContext.Provider value={value}>
            {children}
        </CommentContext.Provider>
    );
}