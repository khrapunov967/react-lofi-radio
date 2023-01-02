import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FirebaseService } from "../../services/FirebaseService";

export const fetchSongs = createAsyncThunk<string[]>(
    "songs/fetchSongs",
    async () => {
        const songs = await FirebaseService.getSongsFromStorage();
        return songs;
    }
)

type state = {
    songs: string[];
    isFetching: boolean;
}

const initialState: state = {
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