import { createContext, useState, useContext } from "react";

export const CommentContext = createContext();

export function useComment() {
    return useContext(CommentContext);
}

export const CommentProvider = ({ children }) => {

    const [allComments, setAllComments] = useState([]);
    const [commentsCount, setCommentsCount] = useState(0);

    const setComments = (orderedCommentsByLatest) => {
        setAllComments([...orderedCommentsByLatest]);
        setCommentsCount(orderedCommentsByLatest.length);
    }

    const createComment = (newCommentData) => {
        setAllComments((oldComments) => [newCommentData, ...oldComments,]);
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
        setComments,
        createComment,
        deleteComment
    }

    return (
        <CommentContext.Provider value={value}>
            {children}
        </CommentContext.Provider>
    );
}