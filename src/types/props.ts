import { onChangeVolume } from "./functions";

export interface RootLayoutProps {
    children: React.ReactNode;
};

export interface VolumeSliderProps {
    min: number;
    max: number;
    step: number;
    value: number;
    setVolume: onChangeVolume;
};