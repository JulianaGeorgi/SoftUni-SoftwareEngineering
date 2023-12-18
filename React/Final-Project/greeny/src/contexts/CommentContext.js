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

    useEffect(() => {
        commentServices()
            .getAllComments()
            .then((allComments) => {
                setAllComments([...allComments]);
            })
            .catch((error) => {
            });
    }, []);

    const createComment = (newCommentData) => {
        setAllComments((oldComments) => [newCommentData, ...oldComments]);
        setCommentsCount(prevCount => prevCount + 1);
    }

    const deleteComment = (commentId) => {
        setAllComments(state => state.filter(comment => comment.id !== commentId));
        setCommentsCount(prevCount => prevCount - 1);
    };

    const value = {
        allComments,
        commentsCount,
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