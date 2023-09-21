import { database } from "../firebase";
import { push, get, remove, update, query, orderByChild } from "firebase/database";
import { ref } from "firebase/database";

export const postServices = () => {

  const getAllGreenies = async () => {
    const greeniesRef = ref(database, 'greenies');

    try {
      const snapshot = await get(greeniesRef);
      if (snapshot.exists()) {
        const greeniesObject = snapshot.val();
        // Convert the object into an array of objects with IDs
        const greeniesArray = Object.entries(greeniesObject).map(([id, data]) => ({
          id,
          ...data,
        }));
        return greeniesArray;
      } else {
        // Handle the case where no data exists
        return [];
      }
    } catch (error) {
      console.error('Error fetching greenies:', error);
      throw error;
    }
  };

  const getGreenyById = async (greenyId) => {
    const greenyRef = ref(database, "/greenies/" + greenyId);

    try {
      const snapshot = await get(greenyRef);
      if (snapshot.exists()) {
        const greenyData = snapshot.val();
        return greenyData;
      } else {
        // console.log("Greeny not found.");
        return {};
      }

    } catch (error) {
      // console.error("Error fetching item:", error);
      return error;
    };
  }

  const getGreeniesByUserId = async (userId) => {

    const greeniesRef = ref(database, "/greenies");

    try {
      const snapshot = await get(greeniesRef);

      if (!snapshot.exists()) {
        return [];
      }

      const greenyData = snapshot.val();
      const filteredDataArray = Object.keys(greenyData)
        .filter((key) => greenyData[key].ownerId === userId)
        .map((key) => ({ id: key, ...greenyData[key] }));
      return filteredDataArray;

    } catch (error) {
      return error;
    };
  }

  const publishPost = async ({ author, title, category, imageUrl, content, ownerId }) => {

    const timestamp = new Date().getTime();

    const newGreenyRef = await push(ref(database, 'greenies/'), {
      author: author,
      title: title,
      category: category,
      imageUrl: imageUrl,
      content: content,
      ownerId: ownerId,
      timestamp: timestamp,
      likesCount: 0,
      commentsCount: 0
    });

    const newGreenyId = newGreenyRef.key;

    const greenySnapshot = await get(newGreenyRef);
    const newGreenyData = greenySnapshot.val();

    const resultObj = { ...newGreenyData, id: newGreenyId }

    return resultObj;
  }

  const updateGreeny = async ({ author, title, category, imageUrl, content, ownerId }, greenyId) => {
    const timestamp = new Date().getTime();

    try {
      const greenyRef = ref(database, '/greenies/' + greenyId);

      // Update the greeny data
      await update(greenyRef, {
        author: author,
        title: title,
        category: category,
        imageUrl: imageUrl,
        content: content,
        ownerId: ownerId,
        timestamp: timestamp,
      });

      // Fetch the updated data
      const updatedGreenySnapshot = await get(greenyRef);
      const updatedGreenyData = updatedGreenySnapshot.val();

      const resultObj = { ...updatedGreenyData, id: greenyId }

      return resultObj;
    } catch (error) {
      console.error('Error updating greeny:', error);
      throw error;
    }
  };

  const updateCommentsCount = async (greenyId, currentCommentsCount, action) => {
    const greenyRef = ref(database, '/greenies/' + greenyId);

    let updatedCount;

    if (action === 'increment') {
      updatedCount = currentCommentsCount + 1;
    } else if (action === 'decrement') {
      updatedCount = currentCommentsCount - 1;
    } else {
      // return current count
      updatedCount = currentCommentsCount;
    }

    await update(greenyRef, {
      commentsCount: updatedCount,
    });

    const updatedCommentsCount = await get(greenyRef);
    const updatedGreenyData = updatedCommentsCount.val();

    const resultObj = { ...updatedGreenyData, id: greenyId };

    return resultObj;
  };

  const deleteGreeny = async (greenyId) => {
    remove(ref(database, "/greenies/" + greenyId));
  }

  const getLatestGreenies = async () => {

    const greeniesRef = query(ref(database, '/greenies'), orderByChild('timestamp')); //TODO: verify that the orderByChild works at all 

    try {
      const snapshot = await get(greeniesRef);
      const greeniesObject = snapshot.val();

      // Check for a case where there are no greenies
      if (!greeniesObject) {
        return [];
      }

      const greeniesArray = Object.entries(greeniesObject).map(([id, data]) => ({
        id,
        ...data,
      }));

      const reversedArray = greeniesArray.reverse();

      return reversedArray;

    } catch (error) {
      return error;
    }
  }

  return {
    getAllGreenies,
    getGreenyById,
    getGreeniesByUserId,
    publishPost,
    updateGreeny,
    deleteGreeny,
    getLatestGreenies,
    updateCommentsCount,
  }
}