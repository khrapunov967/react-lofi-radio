import { useEffect, useRef, useState } from "react";
import PauseIcon from "../assets/icons/pause-icon.svg";
import PlayIcon from "../assets/icons/play-icon.svg";
import VolumeSlider from "./VolumeSlider";

const MusicPlayer: React.FC = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const ref = useRef<HTMLAudioElement>(null);
    const songs: string[] = [
        "https://firebasestorage.googleapis.com/v0/b/react-lofi-radio-app.appspot.com/o/lofi%20vibes%20-%20jet%20lag%20a%20lo-fi%20hiphop%20mix.mp3?alt=media&token=c54e817d-1534-49c0-a825-b4ab3cd4129b"
    ];

    useEffect(() => {
        if (ref.current) {
            ref.current.volume = volume;
        }
        console.log(volume);
    }, [volume]);


    useEffect(() => {
        if (isPlaying && ref.current) {
            ref.current.play();
        }

        if (!isPlaying && ref.current) {
            ref.current.pause();
        }
    }, [isPlaying]);

    return (
        <div className="z-40 w-full flex flex-col gap-2 items-center justify-center">
            {
                songs.map(song => <audio ref={ref} src={song} key={song} />)
            }

            <button onClick={() => {setIsPlaying(prev => !prev)}} className={"active:scale-90 rounded-full transition-all duration-200 hover:translate-y-[-3px]"}>
                <img 
                    src={isPlaying ? PauseIcon : PlayIcon} 
                    alt="pause" 
                    className="w-[77px] h-[77px]"
                />
            </button>

            <VolumeSlider
                min={0}
                max={1}
                step={0.02}
                value={volume}
                setVolume={(e) => setVolume(+e.target.value)}
            />
        </div>
    );
};

export default MusicPlayer;