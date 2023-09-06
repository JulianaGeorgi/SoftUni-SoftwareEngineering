import { database } from "../firebase";
import { ref, push } from "firebase/database";

export const postServices = () => {

    const publishPost = async ({author, title, imageUrl, content, ownerId}) => {

        const result = await push(ref(database, 'greenies/'), {
            author: author,
            title: title,
            imageUrl: imageUrl,
            content: content,
            ownerId: ownerId
        });

        console.log(result)
        return result;
    }

    return {
        publishPost
    }
}