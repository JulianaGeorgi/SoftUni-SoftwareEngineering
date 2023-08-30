import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function signup(email, password) {
    try {
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;

                alert("Account successfully created :)");
            })
    } catch (err) {
        alert(`Registration failed - ${err.code, err.message}`);
    };
}