declare module "react-native-audio" {
  declare export type AudioEncodingAndroidType =
    | "aac_eld"
    | "amr_nb"
    | "amr_wb"
    | "he_aac"
    | "vorbis";
  declare export type AudioEncodingIOSType =
    | "lpcm"
    | "ima4"
    | "MAC3"
    | "MAC6"
    | "ulaw"
    | "alaw"
    | "mp1"
    | "mp2"
    | "alac"
    | "amr";
  declare export type AudioEncodingType =
    | "aac"
    | AudioEncodingAndroidType
    | AudioEncodingAndroidType;
  declare export interface RecordingOptions {
    SampleRate?: number;
    Channels?: number;
    AudioQuality?: "Low" | "Medium" | "High";
    AudioEncoding?: AudioEncodingType;
    OutputFormat?: string;
    MeteringEnabled?: boolean;
    MeasurementMode?: boolean;
    AudioEncodingBitRate?: number;
    IncludeBase64?: boolean;
    AudioSource?: number;
  }
  declare export var AudioRecorder: {
    requestAuthorization(): Promise<boolean>,
    prepareRecordingAtPath(
      path: string,
      options: RecordingOptions
    ): Promise<string>,
    startRecording(): Promise<string>,
    stopRecording(): Promise<string>,
    resumeRecording(): Promise<string>,
    pauseRecording(): Promise<string>,
    checkAuthorizationStatus(): Promise<boolean>,
    onProgress(res: {
      currentTime: number
    }): void,
    onFinished(res: {
      audioFileURL: string,
      base64: string,
      status: string
    }): void
  };
  declare export var AudioUtils: {
    CachesDirectoryPath: string,
    DocumentDirectoryPath: string,
    DownloadsDirectoryPath: string,
    LibraryDirectoryPath: string,
    MainBundlePath: string,
    MusicDirectoryPath: string,
    PicturesDirectoryPath: string
  };
  declare export var AudioSource: {
    CAMCORDER: number,
    DEFAULT: number,
    MIC: number,
    REMOTE_SUBMIX: number,
    UNPROCESSED: number,
    VOICE_CALL: number,
    VOICE_COMMUNICATION: number,
    VOICE_DOWNLINK: number,
    VOICE_RECOGNITION: number,
    VOICE_UPLINK: number
  };
}
