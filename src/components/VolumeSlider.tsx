import { VolumeSliderProps } from "../types/props";

const VolumeSlider: React.FC<VolumeSliderProps> = (props) => {
    return (
        <input 
            type="range" 
            min={props.min}
            max={props.max}
            step={props.step}
            value={props.value}
            onChange={props.setVolume}
            className={"volume-slider"}
        />
    );
}

export default VolumeSlider;