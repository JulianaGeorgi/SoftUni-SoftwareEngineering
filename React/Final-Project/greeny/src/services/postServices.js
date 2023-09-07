import { database } from "../firebase";
import { ref, push, onValue, get } from "firebase/database";

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

    // const getAllGreenies = () => {
    //     return new Promise((resolve, reject) => {

    //         const allGreeniesRef = ref(database, 'greenies/');

    //         onValue(allGreeniesRef, (snapshot) => {
    //             const allGreenies = snapshot.val();

    //             if (allGreenies) {
    //                 const greeniesArray = Object.values(allGreenies);
    //                 resolve(greeniesArray); // Resolve the promise with the data
    //             } else {
    //                 // You can reject the promise if there's an error or no data
    //                 reject(new Error("No data available"));
    //             }
    //         });
    //     });
    // };

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

        const resultObj = { ...newGreenyData, id:newGreenyId}

        return resultObj; 
    }

    return {
        getAllGreenies,
        publishPost
    }
}