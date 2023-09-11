import { createContext, useState, useContext, useEffect } from "react";
import { postServices } from "../services/postServices";

export const GreenyContext = createContext();

export function useGreeny() {
    return useContext(GreenyContext);
}

export const GreenyProvider = ({ children }) => {

    const [greenies, setGreenies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        postServices()
            .getAllGreenies()
            .then((allGreenies) => {
                setGreenies([...allGreenies]);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("API call error:", error);
                setIsLoading(false);
            });
    }, []);

    const deleteGreeny = (greenyId) => {
        setGreenies(state => state.filter(greeny => greeny.id !== greenyId));
    };

    const value = {
        greenies,
        setGreenies, 
        deleteGreeny
    }

    return (
        <GreenyContext.Provider value={value}>
            {children}
        </GreenyContext.Provider>
    );
}