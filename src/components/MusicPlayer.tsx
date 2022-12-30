import { useEffect, useRef, useState } from "react";
import PauseIcon from "../assets/icons/pause-icon.svg";
import PlayIcon from "../assets/icons/play-icon.svg";

const MusicPlayer: React.FC = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const ref = useRef<HTMLAudioElement>(null);
    const songs: string[] = [
        "https://firebasestorage.googleapis.com/v0/b/react-lofi-radio-app.appspot.com/o/lofi-test-song.wav?alt=media&token=c7741687-9366-477a-bd95-6b3653d5c5e3"
    ];


    useEffect(() => {
        if (isPlaying && ref.current) {
            ref.current.play();
        }

        if (!isPlaying && ref.current) {
            ref.current.pause();
        }
    }, [isPlaying]);

    return (
        <div className="w-full flex justify-center">
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
        </div>
    );
};

export default MusicPlayer;