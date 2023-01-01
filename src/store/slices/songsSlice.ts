import { createSlice } from "@reduxjs/toolkit";


type songsState = {
    songs: string[];
}

const initialState: songsState = {
    songs: [
        "https://firebasestorage.googleapis.com/v0/b/react-lofi-radio-app.appspot.com/o/test.mp3?alt=media&token=bfb03734-faec-47fa-af85-90e5423c4266",
        "https://firebasestorage.googleapis.com/v0/b/react-lofi-radio-app.appspot.com/o/Dreamy%20-%20The%20rain%20is%20so%20tragically%20beautiful%20lo-fi%20hip%20hop%20chillhop%20mix%20%5BStudy%20Relax%20Sleep%5D.mp3?alt=media&token=b99669c1-31f0-429d-8bb1-409cd4d381cc",
        "https://firebasestorage.googleapis.com/v0/b/react-lofi-radio-app.appspot.com/o/lofi%20vibes%20-%20jet%20lag%20a%20lo-fi%20hiphop%20mix.mp3?alt=media&token=c54e817d-1534-49c0-a825-b4ab3cd4129b",
    ]
}

const songsSlice = createSlice({
    name: "songs",
    initialState,
    reducers: {

    }
});


export default songsSlice.reducer;