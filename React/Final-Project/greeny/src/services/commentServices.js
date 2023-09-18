import { database } from "../firebase";
import { ref, push, get, remove } from "firebase/database";

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

    const deleteComment = async (commentId, greenyId ) => {
        console.log(commentId)
        // ref url https://greeny-5156d-default-rtdb.europe-west1.firebasedatabase.app/comments/-NeTtNPeKjpy16VrtIol/-NeYgXMa3jQSIcr7n2-l
        const commentRef = ref(database, `/comments/${greenyId}/${commentId}`);

        try {
            await remove(commentRef);
            console.log("Comment deleted successfully");
        } catch (error) {
            console.error("Error deleting comment:", error);
        }
    }


    return {
        getAllComments,
        submitComment,
        deleteComment
    }
}