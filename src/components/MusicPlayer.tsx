import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import { fetchSongs } from "../store/slices/songsSlice";
import PauseIcon from "../assets/icons/pause-icon.svg";
import PlayIcon from "../assets/icons/play-icon.svg";
import VolumeBar from "./VolumeBar";
import Loader from "./Loader";

const MusicPlayer: React.FC = () => {

    let currSong = 0; // index of current song

    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);

    const { songs, isFetching } = useAppSelector(state => state.songs); 
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        dispatch(fetchSongs());
    }, [dispatch]);
    
    
    useEffect(() => {
        if (ref.current) {
            ref.current.volume = volume;
        }
       
    }, [volume]);


    useEffect(() => {
        if (isPlaying) {
            ref.current?.play();
       
        } else {
            ref.current?.pause();
        }

    }, [isPlaying]);

    const handleEnded = () => {
        // if ended song was last in the list, index become 0 - the first song in the list
        currSong = currSong === songs.length - 1 ? 0 : currSong + 1;

        if (ref.current) {
            ref.current.src = songs[currSong].songUrl;
        }

        ref.current?.play();

    };

    

    if (isFetching) {
        return (
            <div className="z-40 w-full flex justify-center">
                <Loader />
            </div>
        );
    };

    return (
        <div className="z-40 w-full flex gap-2 justify-center">       
            <button onClick={() => {setIsPlaying(prev => !prev)}} className={"active:scale-90 rounded-full transition-all duration-200 hover:translate-y-[-3px]"}>
                <img 
                    src={isPlaying ? PauseIcon : PlayIcon} 
                    alt="pause" 
                    className="w-[67px] h-[67px]"
                />
            </button>
          

            <VolumeBar
                min={0}
                max={1}
                step={0.02}
                value={volume}
                setVolume={(e) => setVolume(+e.target.value)}
            />

            <audio 
                ref={ref} 
                src={songs[currSong]?.songUrl} 
                key={currSong} 
                onEnded={handleEnded} 
            />
        </div>
    );
};

export default MusicPlayer;