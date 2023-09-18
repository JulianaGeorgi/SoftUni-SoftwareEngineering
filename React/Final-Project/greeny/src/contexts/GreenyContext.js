import { createContext, useState, useContext, useEffect } from "react";
import { postServices } from "../services/postServices";

export const GreenyContext = createContext();

export function useGreeny() {
    return useContext(GreenyContext);
}

export const GreenyProvider = ({ children }) => {

    const [greenies, setGreenies] = useState([]);
    const [likesCount, setLikesCount] = useState(0);
    
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

    const createGreeny = (newGreenyData) => {
        setGreenies((oldGreenies) => [...oldGreenies, newGreenyData]);
    }

    const deleteGreeny = (greenyId) => {
        setGreenies(state => state.filter(greeny => greeny.id !== greenyId));
    };

    const editGreeny = (updatedGreenyData, greenyId) => {
        setGreenies(state => state.map(x => x.id === greenyId ? updatedGreenyData : x));
        console.log(greenies)
    }

    // const incrementLikes = () => {
    //     setLikesCount(prevCount => prevCount + 1);
    // }

    const value = {
        greenies,
        createGreeny,
        editGreeny,
        deleteGreeny, 
        likesCount,

    }

    return (
        <GreenyContext.Provider value={value}>
            {children}
        </GreenyContext.Provider>
    );
}