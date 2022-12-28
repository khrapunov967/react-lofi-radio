import { useState } from "react";
import PauseIcon from "../assets/icons/pause-icon.svg";
import PlayIcon from "../assets/icons/play-icon.svg";

const MusicPlayer: React.FC = () => {

    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="w-full flex justify-center">
            <button onClick={() => {setIsPlaying(prev => !prev)}}>
                <img 
                    src={isPlaying ? PauseIcon : PlayIcon} 
                    alt="pause" 
                    className="w-[60px] h-[60px]"
                />
            </button>
        </div>
    );
};

export default MusicPlayer;