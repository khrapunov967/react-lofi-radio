import { VolumeBarProps } from "../types/props";
import VolumeIcon from "../assets/icons/volume-icon.svg";
import VolumeMuteIcon from "../assets/icons/volume-mute-icon.svg";

const VolumeBar: React.FC<VolumeBarProps> = (props) => {
    return (
        <div className="flex gap-2 items-center fixed bottom-[20px] right-[50px]">
            <img 
                src={props.value === 0 ? VolumeMuteIcon : VolumeIcon}
                className={"w-[30px] h-[30px]"}
                alt="Vol." 
            />

            <input 
                type="range" 
                min={props.min}
                max={props.max}
                step={props.step}
                value={props.value}
                onChange={props.setVolume}
                className={"volume-slider"}
            />
        </div>
    );
}

export default VolumeBar;