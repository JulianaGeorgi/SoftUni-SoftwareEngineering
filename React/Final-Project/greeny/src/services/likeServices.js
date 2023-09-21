import { database } from "../firebase";
import { get, update, set } from "firebase/database";
import { ref } from "firebase/database";

export const likeServices = () => {

    const updateLikesCount = async (greenyId, currentLikesCount, action) => {
        const greenyRef = ref(database, '/greenies/' + greenyId);

        let updatedCount;

        if (action === 'increment') {
            updatedCount = currentLikesCount + 1;
        } else if (action === 'decrement') {
            updatedCount = currentLikesCount - 1;
        } else {
            // return current count
            updatedCount = currentLikesCount;
        }

        await update(greenyRef, {
            likesCount: updatedCount,
        });

        const updatedLikesCount = await get(greenyRef);
        const updatedGreenyData = updatedLikesCount.val();

        const resultObj = { ...updatedGreenyData, id: greenyId }

        return resultObj;
    }

    const storeLikes = async (greenyId, userId, action) => {

        const likesRef = ref(database, 'likes/' + greenyId + '/' + userId);

        try {
            if (action === 'increment') {
                // Set to true if the action is to increment
                await set(likesRef, true);
                return true;
            } else if (action === 'decrement') {
                // Set to false if the action is to decrement
                await set(likesRef, false);
                return false;
            }
        } catch (error) {
            // Handle the error here
        }
    }

    const checkIfHasLiked = async (greenyId, userId) => {
        const userLikeRef = ref(database, 'likes/' + greenyId + '/' + userId);
    
        // Check if the user has a value of true
        return get(userLikeRef)
          .then((snapshot) => {
            if (snapshot.exists() && snapshot.val() === true) {
              // console.log('User has a value of true for this post.');
              return true;
            } else {
              // console.log('User does not have a value of true for this post.');
              return false;
            }
          })
          .catch((error) => {
            console.error('Error checking user like status:', error);
          });
      }

    return {
        updateLikesCount,
        storeLikes, 
        checkIfHasLiked
    }
}
