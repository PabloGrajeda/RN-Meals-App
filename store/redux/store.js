import { configureStore } from '@reduxjs/toolkit'
import FavoritesReducer from './favorites'

export const store = configureStore({
    reducer: {
        favorites: FavoritesReducer
    },
});