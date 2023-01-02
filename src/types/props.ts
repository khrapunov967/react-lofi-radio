import { handleChange } from "./functions";

export interface RootLayoutProps {
    children: React.ReactNode;
};

export interface VolumeBarProps {
    min: number;
    max: number;
    step: number;
    value: number;
    setVolume: handleChange;
};