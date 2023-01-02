import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SongsService } from "../../services/SongsService";
import { Song, songsSliceInitialState } from "../../types/data";

export const fetchSongs = createAsyncThunk<Song[]>(
    "songs/fetchSongs",
    async () => {
        const songs = await SongsService.getSongs();
        return songs;
    }
)

const initialState: songsSliceInitialState = {
    songs: [],
    isFetching: false
}

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