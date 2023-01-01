import React, { useEffect, useRef, useState } from "react";
import PauseIcon from "../assets/icons/pause-icon.svg";
import PlayIcon from "../assets/icons/play-icon.svg";
import VolumeSlider from "./VolumeSlider";

const MusicPlayer: React.FC = () => {

    let currSong = 0; // index of current song
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5); 
    const ref = useRef<HTMLAudioElement>(null);
    const songs: string[] = [
        "https://firebasestorage.googleapis.com/v0/b/react-lofi-radio-app.appspot.com/o/test.mp3?alt=media&token=bfb03734-faec-47fa-af85-90e5423c4266",
        "https://firebasestorage.googleapis.com/v0/b/react-lofi-radio-app.appspot.com/o/Dreamy%20-%20The%20rain%20is%20so%20tragically%20beautiful%20lo-fi%20hip%20hop%20chillhop%20mix%20%5BStudy%20Relax%20Sleep%5D.mp3?alt=media&token=b99669c1-31f0-429d-8bb1-409cd4d381cc",
        "https://firebasestorage.googleapis.com/v0/b/react-lofi-radio-app.appspot.com/o/lofi%20vibes%20-%20jet%20lag%20a%20lo-fi%20hiphop%20mix.mp3?alt=media&token=c54e817d-1534-49c0-a825-b4ab3cd4129b",
    ];

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

    const songEndedHandler = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
        currSong = currSong === songs.length - 1 ? 0 : currSong + 1;

        if (ref.current) {
            ref.current.src = songs[currSong];
        }

        ref.current?.play();

        // console.log(ref.current);
        // console.log(currSong);
    };

    return (
        <div className="z-40 w-full flex gap-2 items-center justify-center">
            <button onClick={() => {setIsPlaying(prev => !prev)}} className={"active:scale-90 rounded-full transition-all duration-200 hover:translate-y-[-3px]"}>
                <img 
                    src={isPlaying ? PauseIcon : PlayIcon} 
                    alt="pause" 
                    className="w-[67px] h-[67px]"
                />
            </button>

            <VolumeSlider
                min={0}
                max={1}
                step={0.02}
                value={volume}
                setVolume={(e) => setVolume(+e.target.value)}
            />

            <audio 
                ref={ref} 
                src={songs[currSong]} 
                key={currSong} 
                onEnded={songEndedHandler} 
            />
        </div>
    );
};

export default MusicPlayer;