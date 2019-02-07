declare module "w3c-image-capture" {
  declare class ImageCapture {
    constructor(videoTrack: MediaStreamTrack): this;
    takePhoto(photoSettings?: PhotoSettings): Promise<Blob>;
    getPhotoCapabilities(): Promise<PhotoCapabilities>;
    getPhotoSettings(): Promise<PhotoSettings>;
    grabFrame(): Promise<ImageBitmap>;
    track: MediaStreamTrack;
  }
  declare interface PhotoCapabilities {
    +redEyeReduction: RedEyeReduction;
    +imageHeight: MediaSettingsRange;
    +imageWidth: MediaSettingsRange;
    +fillLightMode: FillLightMode[];
  }
  declare interface PhotoSettings {
    fillLightMode?: FillLightMode;
    imageHeight?: number;
    imageWidth?: number;
    redEyeReduction?: boolean;
  }
  declare interface MediaSettingsRange {
    +max: number;
    +min: number;
    +step: number;
  }
  declare type RedEyeReduction = "never" | "always" | "controllable";
  declare type FillLightMode = "auto" | "off" | "flash";
  declare interface MediaTrackCapabilities {
    whiteBalanceMode: MeteringMode[];
    exposureMode: MeteringMode[];
    focusMode: MeteringMode[];
    exposureCompensation: MediaSettingsRange;
    colorTemperature: MediaSettingsRange;
    iso: MediaSettingsRange;
    brightness: MediaSettingsRange;
    contrast: MediaSettingsRange;
    saturation: MediaSettingsRange;
    sharpness: MediaSettingsRange;
    focusDistance: MediaSettingsRange;
    zoom: MediaSettingsRange;
    torch: boolean;
  }
  declare type W3C$ConstrainPoint2D = Point2D[] | ConstrainPoint2DParameters;
  declare interface MediaTrackConstraintSet {
    whiteBalanceMode?: W3C$ConstrainString;
    exposureMode?: W3C$ConstrainString;
    focusMode?: W3C$ConstrainString;
    pointsOfInterest?: W3C$W3C$ConstrainPoint2D;
    exposureCompensation?: W3C$ConstrainDouble;
    colorTemperature?: W3C$ConstrainDouble;
    iso?: W3C$ConstrainDouble;
    brightness?: W3C$ConstrainDouble;
    contrast?: W3C$ConstrainDouble;
    saturation?: W3C$ConstrainDouble;
    sharpness?: W3C$ConstrainDouble;
    focusDistance?: W3C$ConstrainDouble;
    zoom?: W3C$ConstrainDouble;
    torch?: W3C$ConstrainBoolean;
  }
  declare interface MediaTrackSettings {
    whiteBalanceMode: MeteringMode;
    exposureMode: MeteringMode;
    focusMode: MeteringMode;
    pointsOfInterest: Point2D[];
    exposureCompensation: number;
    colorTemperature: number;
    iso: number;
    brightness: number;
    contrast: number;
    saturation: number;
    sharpness: number;
    focusDistance: number;
    zoom: number;
    torch: boolean;
  }
  declare interface MediaTrackSupportedConstraints {
    whiteBalanceMode: boolean;
    exposureMode: boolean;
    focusMode: boolean;
    pointsOfInterest: boolean;
    exposureCompensation: boolean;
    colorTemperature: boolean;
    iso: boolean;
    brightness: boolean;
    contrast: boolean;
    saturation: boolean;
    sharpness: boolean;
    focusDistance: boolean;
    zoom: boolean;
    torch: boolean;
  }
  declare interface ConstrainPoint2DParameters {
    exact: Point2D[];
    ideal: Point2D[];
  }
  declare type MeteringMode = "none" | "manual" | "single-shot" | "continuous";
  declare interface Point2D {
    x: number;
    y: number;
  }
}
