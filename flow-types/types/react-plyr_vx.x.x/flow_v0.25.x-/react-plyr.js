declare module "react-plyr" {
  import type { Component } from "react";

  declare interface OnVolumeChangeParam {
    muted: boolean;
    volume: number;
  }
  declare interface Props {
    type?: "youtube" | "vimeo" | "video" | "audio";
    className?: string;
    videoId?: string;
    url?: string;
    onReady?: (player?: any) => void;
    onPlay?: () => void;
    onPause?: () => void;
    onEnd?: () => void;
    onLoadedData?: () => void;
    onSeeked?: (time?: number) => void;
    onTimeUpdate?: (time?: number) => void;
    onEnterFullscreen?: () => void;
    onExitFullscreen?: () => void;
    onVolumeChange?: (params: OnVolumeChangeParam) => void;
    onCaptionsEnabled?: () => void;
    onCaptionsDisabled?: () => void;
    enabled?: boolean;
    title?: string;
    debug?: boolean;
    autoplay?: boolean;
    autopause?: boolean;
    seekTime?: number;
    volume?: number;
    muted?: boolean;
    duration?: number;
    displayDuration?: boolean;
    invertTime?: boolean;
    toggleInvert?: boolean;
    ratio?: string;
    clickToPlay?: boolean;
    hideControls?: boolean;
    resetOnEnd?: boolean;
    disableContextMenu?: boolean;
    loadSprite?: boolean;
    iconPrefix?: string;
    iconUrl?: string;
    blankVideo?: string;
    quality?: {
      default?: string | number,
      option?: string[] | number[]
    };
    loop?: {
      active?: boolean
    };
    speed?: {
      selected?: number,
      options?: number[]
    };
    keyboard?: {
      focused?: boolean,
      global?: boolean
    };
    tooltips?: {
      controls?: boolean,
      seek?: boolean
    };
    fullscreen?: {
      enabled?: boolean,
      fallback?: boolean,
      iosNative?: boolean
    };
    storage?: {
      enabled?: boolean,
      key?: string
    };
    controls?: string[];
    settings?: string[];
    poster?: string;
    sources?: Array<{
      src: string,
      type: string,
      size?: string
    }>;
    captions?: Array<{
      kind?: string,
      label?: string,
      src: string,
      srclang?: string,
      default?: boolean,
      key?: any
    }>;
  }
  declare class Plyr mixins Component<Props> {
    getType(): any;
    play(): void;
    pause(): void;
    togglePlay(): void;
    stop(): void;
    restart(): void;
    rewind(time: number): void;
    forward(time: number): void;
    getCurrentTime(): number;
    setCurrentTime(time: number): void;
    getDuration(): number;
    getVolume(): number;
    isMuted(): boolean;
    isPaused(): boolean;
    toggleMute(): void;
    setMuted(muted?: boolean): void;
    increaseVolume(step: boolean): void;
    decreaseVolume(step: boolean): void;
    setVolume(amount: boolean): void;
    enterFullscreen(): void;
    exitFullscreen(): void;
    toggleFullscreen(): void;
  }
  declare export default typeof Plyr;
}
