import { database } from "../firebase";
import { ref, push, get, remove } from "firebase/database";

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
        console.log("Greeny not found.");
        return {};
      }

    } catch (error) {
      console.error("Error fetching item:", error);
      return error;
    };
  }

  const publishPost = async ({ author, title, imageUrl, content, ownerId }) => {

    const timestamp = new Date().getTime();

    const newGreenyRef = await push(ref(database, 'greenies/'), {
      author: author,
      title: title,
      imageUrl: imageUrl,
      content: content,
      ownerId: ownerId,
      timestamp: timestamp,
    });

    const newGreenyId = newGreenyRef.key;

    const greenySnapshot = await get(newGreenyRef);
    const newGreenyData = greenySnapshot.val();

    const resultObj = { ...newGreenyData, id: newGreenyId }

    return resultObj;
  }

  const deleteGreeny = async (greenyId) => {
   remove(ref(database, "/greenies/" + greenyId));
  }

  return {
    getAllGreenies,
    getGreenyById,
    publishPost, 
    deleteGreeny
  }
}