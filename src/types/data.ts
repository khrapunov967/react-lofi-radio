export type Song = {
    id: string;
    songUrl: string;
}

export type songsSliceInitialState = {
    songs: Song[];
    isFetching: boolean;
}