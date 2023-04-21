import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        addFavorite: (state, action) => {
            state.ids.push(action.payload.id);
        },
        removeFavorite: (state, action) => {
            state.ids = state.ids.filter(id => id !== action.payload.id);
        },
    }
});

// it need state.favorites since it is used by useSelector which point to the store file.
export const getFavorites = (state) => state.favorites.ids 

export const {
    addFavorite,
    removeFavorite,
} = favoritesSlice.actions

export default favoritesSlice.reducer;