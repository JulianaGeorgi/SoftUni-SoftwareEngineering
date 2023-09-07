import { database } from "../firebase";
import { ref, push, onValue, get } from "firebase/database";

export const postServices = () => {

    const getAllGreenies = () => {
        return new Promise((resolve, reject) => {

            const allGreeniesRef = ref(database, 'greenies/');

            onValue(allGreeniesRef, (snapshot) => {
                const allGreenies = snapshot.val();

                if (allGreenies) {
                    const greeniesArray = Object.values(allGreenies);
                    resolve(greeniesArray); // Resolve the promise with the data
                } else {
                    // You can reject the promise if there's an error or no data
                    reject(new Error("No data available"));
                }
            });
        });
    };

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

        // const newGreenyId = newGreenyRef.key;

        const greenySnapshot = await get(newGreenyRef);
        const newGreenyData = greenySnapshot.val();

        return newGreenyData; // Return the newly created greeny object
    }

    return {
        getAllGreenies,
        publishPost
    }
}