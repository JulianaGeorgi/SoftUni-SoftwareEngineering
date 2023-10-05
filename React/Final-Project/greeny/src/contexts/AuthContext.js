import { createContext, useEffect, useState, useContext } from "react";

import { get, set } from "firebase/database";
import { ref } from "firebase/database";
import { database } from "../firebase";

import { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth";

import { Loading } from "../components/common/Loading";

// creating the context
export const AuthContext = createContext(); // returns a context object - does not hold any info!!

// f to read the context 
export function useAuth() {
    return useContext(AuthContext);
}

// specifying the value of the context
export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    async function signup(email, password) {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        return (user.user.uid);
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return auth.signOut();
    }

    // update the currentUser object 
    function updateUserProfile(username, profilePhotoUrl) {
        updateProfile(auth.currentUser, {
            displayName: username,
            photoURL: profilePhotoUrl
        });
    }

    // save in db
    async function saveUserData(userId, username, profilePhotoUrl) {

        const userRef = ref(database, 'users/' + userId);

        // console.log(profilePhotoUrl)

        try {
            await set(userRef, {
                username: username,
                photoURL: profilePhotoUrl
            }); // likesRef points to the specific path in the database where we associate the user with the greeny
            // console.log('User info saved successfully.');

            //   const newGreenyId = userRef.key;

            const userSnapshot = await get(userRef);
            const newUserData = userSnapshot.val();

            // console.log(newUserData)

            //   const resultObj = { ...newUserData, id: newGreenyId }

            return newUserData;

        } catch (error) {
            // console.error('Error saving user data:', error);
        }
    }

    async function getUserProfile(userId) {
        const userRef = ref(database, "users/" + userId);

        try {
            const snapshot = await get(userRef);

            if (!snapshot.exists()) {
                return {};
            }

            const userData = snapshot.val();
            
            return userData;

        } catch (error) {
            return error;
        };
    }

    //TODO
    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email);
    }

    //TODO
    function updateEmail(email) {
        return currentUser.updateEmail(email);
    }

    //TODO
    function updatePassword(password) {
        return currentUser.updatePassword(password);
    }

    // Authentication state change listener
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setIsLoading(false);
        });
        return unsubscribe;
    }, [currentUser]);

    if (isLoading) {
        return <Loading/>
    }

    // the values that we want to pass to all the components reading the context
    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        updateUserProfile,
        getUserProfile,
        saveUserData
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};