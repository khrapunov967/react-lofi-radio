export type Song = {
    id: string;
    songUrl: string;
}

export type songsInitialState = {
    songs: Song[];
    isFetching: boolean;
}