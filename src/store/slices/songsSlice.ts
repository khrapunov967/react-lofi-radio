import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Songs } from "../../services/songs";
import { Song, songsInitialState } from "../../types/data";

export const fetchSongs = createAsyncThunk<Song[]>(
    "songs/fetchSongs",
    async () => {
        const response = await Songs.getSongs();
        return response;
    }
);

const initialState: songsInitialState = {
    songs: [],
    isFetching: false
};

const songsSlice = createSlice({
    name: "songs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSongs.pending, (state) => {
                state.isFetching = true;
            })
            
            .addCase(fetchSongs.fulfilled, (state, action) => {
                state.songs = action.payload;
                state.isFetching = false;
            })
    }
});


export default songsSlice.reducer;