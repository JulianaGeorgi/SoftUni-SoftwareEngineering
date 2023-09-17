import { database } from "../firebase";
import { ref, push, get } from "firebase/database";

export const commentServices = () => {

    const getAllComments = async (greenyId) => {
        const commentsRef = ref(database, 'comments/' + greenyId);

        try {
            const snapshot = await get(commentsRef);
            if (snapshot.exists()) {
                const commentsObject = snapshot.val();
                // Convert the object into an array of objects with IDs
                const commentsArray = Object.entries(commentsObject).map(([id, data]) => ({
                    id,
                    ...data,
                }));
                return commentsArray;
            } else {
                // Handle the case where no data exists
                return [];
            }
        } catch (error) {
            console.error('Error fetching greenies:', error);
            throw error;
        }
    }

    const submitComment = async ({ comment }, username, ownerId, greenyId) => {

        const timestamp = new Date().getTime();

        const newCommentRef = await push(ref(database, 'comments/' + greenyId), {
            username: username,
            comment: comment,
            ownerId: ownerId,
            timestamp: timestamp,
        });

        const newCommentId = newCommentRef.key;

        const commentSnapshot = await get(newCommentRef);
        const newCommentData = commentSnapshot.val();

        const resultObj = { ...newCommentData, id: newCommentId }

        return resultObj;
    }

    return {
        getAllComments,
        submitComment
    }
}