import { createContext, useState } from "react";

// Initial state for context
export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { }
});



const FavoritesContextProvider = ({ children }) => {
    const [favoriteMealIds, setFavoriteMealsIds] = useState([]);

    const addFavorite = (id) => {
        setFavoriteMealsIds(prevFavoriteMealsIds => [...prevFavoriteMealsIds, id]);
    }

    const removeFavorite = (id) => {
        setFavoriteMealsIds(prevFavoriteMealsIds => prevFavoriteMealsIds.filter(mealId => mealId !== id));
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite,
        removeFavorite
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider

