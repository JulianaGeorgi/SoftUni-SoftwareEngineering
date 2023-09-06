import { database } from "../firebase";
import { ref, push, onValue } from "firebase/database";

export const postServices = () => {

    const getAllGreenies = async () => {

        const allGreeniesRef = ref(database, 'greenies/');
        onValue(allGreeniesRef, (snapshot) => {
            const data = snapshot.val();
            return data;
        });
    }

    const publishPost = async ({ author, title, imageUrl, content, ownerId }) => {

        const newGreenyRef = await push(ref(database, 'greenies/'), {
            author: author,
            title: title,
            imageUrl: imageUrl,
            content: content,
            ownerId: ownerId
        });

        const newGreenyId = newGreenyRef.key;

        return newGreenyId;
    }

    return {
        getAllGreenies,
        publishPost
    }
}