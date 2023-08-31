import { createContext, useEffect, useState, useContext } from "react";

import { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword
} from "firebase/auth";

// creating the context
export const AuthContext = createContext(); // returns a context object - does not hold any info!!

// f to read the context 
export function useAuth() {
    return useContext(AuthContext) 
}

// specifying the value of the context
export const AuthProvider = ({ children }) => { 

    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return auth.signOut();
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email);
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email);
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password);
    }

    // Authentication state change listener
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setPending(false);
        });
        return unsubscribe;
    }, []);

    if (pending) {
        return <>Loading...</>
    }

    // the values that we want to pass to all the components reading the context
    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};










// import { createContext } from "react";

// export const AuthContext = createContext();

// export function AuthProvider({ children, value }) {
//     return (
//         <AuthContext.Provider value={value}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export function useAuthValue() {
//     return useContext(AuthContext);
// }