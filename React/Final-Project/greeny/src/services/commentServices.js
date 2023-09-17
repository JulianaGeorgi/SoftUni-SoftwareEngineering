import { database } from "../firebase";
import { ref, push, get } from "firebase/database";

export const commentServices = () => {

    const submitComment = async ({comment}, username, ownerId, greenyId)  => {

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

    return  {
        submitComment
    }
}