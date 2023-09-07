import { createContext, useState, useContext, useEffect } from "react";
import { postServices } from "../services/postServices";

export const GreenyContext = createContext();

export function useGame() {
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

    const value = {
        greenies,
        setGreenies
    }

    return (
        <GreenyContext.Provider value={value}>
            {children}
        </GreenyContext.Provider>
    );
}