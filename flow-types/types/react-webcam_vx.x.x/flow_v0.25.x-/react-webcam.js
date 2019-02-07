declare module "react-webcam" {
  import typeof * as React from "react";

  declare module.exports: typeof Webcam;

  declare class Webcam
    mixins React.Component<
        Webcam$Webcam$WebcamProps,
        Webcam$Webcam$WebcamState
      > {
    getScreenshot(): string | null;
    getCanvas(): HTMLCanvasElement | null;
    requestUserMedia(): void;
    handleUserMedia(error: Error, stream: MediaStream): void;
  }
  declare interface Webcam$WebcamProps {
    audio?: boolean;
    muted?: boolean;
    height?: number | string;
    width?: number | string;
    screenshotFormat?: "image/jpeg" | "image/png" | "image/webp";
    style?: React.CSSProperties;
    className?: string;
    audioSource?: string;
    videoSource?: string;
    onUserMedia?: () => void;
  }

  declare interface Webcam$WebcamState {
    hasUserMedia: boolean;
    src?: string;
  }
}
