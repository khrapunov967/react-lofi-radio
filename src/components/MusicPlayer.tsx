import { useState } from "react";
import PauseIcon from "../assets/icons/pause-icon.svg";
import PlayIcon from "../assets/icons/play-icon.svg";

const MusicPlayer: React.FC = () => {

    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="w-full flex justify-center">
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